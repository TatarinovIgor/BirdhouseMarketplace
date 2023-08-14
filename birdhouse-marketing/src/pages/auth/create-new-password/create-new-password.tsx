import { useEffect, useState } from 'react';
import { GenericError, LoginFlow } from '@ory/kratos-client';
import { FormProps, Space, App } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import {
  ActionFunctionArgs,
  redirect,
  unstable_useBlocker,
  useActionData,
  useLoaderData,
  useSubmit,
} from 'react-router-dom';
import { Button } from '../../../modules/antd/Button/Button';
import { Form } from '../../../modules/antd/Form/Form';
import { Input } from '../../../modules/antd/Input/Input';
import { kratos } from '../../../auth/kratos';
import { BrowserRecoveryFlow } from '../../../auth/types';
import { MappingPaths } from '../../../constants/mapping.paths';
import * as S from './create-new-password.style';

const { useApp } = App;

export const CreateNewPasswordPage = () => {
  const { t } = useTranslation();
  const submit = useSubmit();
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [buttonActiveStatus, setButtonActiveStatus] = useState(true);
  const [block, setBlock] = useState(true);
  const actionData = useActionData() as {
    errors?: string[];
  };
  const { notification } = useApp();

  useEffect(() => {
    if (actionData?.errors) {
      actionData.errors.forEach((error) => {
        notification.error({
          message: error,
        });
      });
    }
  }, [actionData]);

  unstable_useBlocker(block);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setBlock(false);
    setPassword(newPassword);

    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%*?_&]{8,}$/.test(
      newPassword,
    );
    setIsValid(isValidPassword || newPassword === '');
    setButtonActiveStatus(!isValidPassword);
  };

  const settingsFlow = useLoaderData() as BrowserRecoveryFlow;
  const csrf_token =
    settingsFlow.ui.nodes.find((node) => node.attributes?.name! === 'csrf_token')?.attributes?.value || '';
  const flow_id = settingsFlow.id || '';

  const onFinish: FormProps['onFinish'] = (values) => {
    const formData = new FormData();

    formData.append('csrf_token', csrf_token);
    formData.append('flow_id', flow_id);
    formData.append('new_password', values.new_password);

    submit(formData, {
      method: 'post',
    });
  };

  return (
    <S.Card>
      <Form onFinish={onFinish}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Form.Item name="new_password">
            <Input.Password
              size="large"
              allowClear
              placeholder={t('auth.newPassword.placeholder')!}
              minLength={8}
              value={password}
              onChange={(e) => handleChange(e)}
            />
          </Form.Item>
          {!isValid && <p style={{ color: 'red', marginTop: '-20px' }}>{t('auth.createNewPassord.errorText')}</p>}
          <Form.Item noStyle>
            <Button
              disabled={buttonActiveStatus}
              type="primary"
              dataTestId="submit_button"
              htmlType="submit"
              size="large"
              block
            >
              <Trans i18nKey="auth.button.update" />
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </S.Card>
  );
};

export const Component = CreateNewPasswordPage;

export const loader = async () => {
  const { data } = await kratos.createBrowserSettingsFlow();
  return data;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const password = formData.get('new_password') as string;
  const csrf_token = formData.get('csrf_token') as string;
  const flow_id = formData.get('flow_id') as string;
  const method = 'password';

  try {
    await kratos.updateSettingsFlow({
      flow: flow_id,
      updateSettingsFlowBody: {
        csrf_token,
        password,
        method,
      },
    });

    return redirect(MappingPaths.PUBLIC.LOGIN);
  } catch (e: any) {
    // check for axios@0.21 Error
    if (!e.isAxiosError) {
      throw e;
    }

    const { data } = e.response;

    if (data.error) {
      return {
        errors: [(data.error as GenericError).reason],
      };
    }

    if (data.ui) {
      const { ui } = data as LoginFlow;
      if (ui.messages) {
        const generalErrors = ui.messages.map((message) => message.text);
        const nodeErrors = ui.nodes.map((node) => node.messages.map((message) => message.text)).flat();

        return {
          errors: [...generalErrors, ...nodeErrors],
        };
      }
    }

    throw e;
  }
};

Object.assign(Component, {
  displayName: 'LazyCreateNewPasswordPage',
});
