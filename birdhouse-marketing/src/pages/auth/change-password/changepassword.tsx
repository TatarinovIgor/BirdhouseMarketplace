import { GenericError } from '@ory/kratos-client';
import { FormProps, Space } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import { ActionFunctionArgs, redirect, useLoaderData, useSearchParams, useSubmit } from 'react-router-dom';
import { Button } from '../../../modules/antd/Button/Button';
import { Form } from '../../../modules/antd/Form/Form';
import { Input } from '../../../modules/antd/Input/Input';
import { EAuthLoginFlowId } from '../kratos';
import { kratos } from '../kratos';
import { BrowserRecoveryFlow } from '../../../types/kratos';
import { MappingPaths } from '../../../constants/mapping.paths';
import * as S from './changepassword.style';


export const ChangePasswordPage = () => {
  const { t } = useTranslation();
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const emailFromSearchParams = searchParams.get('email');
  const flow = useLoaderData() as BrowserRecoveryFlow;
  const token = flow.ui.nodes.find((node) => node.attributes?.name! === 'csrf_token')?.attributes?.value || '';

  const onFinishLogin: FormProps['onFinish'] = (values) => {
    const formData = new FormData();

    formData.append('login', values.login);
    formData.append('csrf_token', values.csrf_token);
    formData.append('flow_id', values.flow_id);

    submit(formData, {
      method: 'post',
    });
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
      <S.Card>
        <Form
            onFinish={onFinishLogin}
            validateMessages={validateMessages}
            initialValues={{
              login: emailFromSearchParams,
              flow_id: flow.id,
              csrf_token: token,
            }}
        >
          <Form.Item
              name="csrf_token"
              style={{
                display: 'none',
              }}
          >
            <Input size="large" allowClear />
          </Form.Item>
          <Form.Item
              name="flow_id"
              style={{
                display: 'none',
              }}
          >
            <Input  size="large" />
          </Form.Item>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Form.Item name="login" rules={[{ type: 'email' }]}>
              <Input
                  disabled={!!emailFromSearchParams}
                  size="large"
                  allowClear
                  placeholder={t('auth.identifier')!}
              />
            </Form.Item>
            <Form.Item noStyle>
              <Button type="primary" dataTestId="submit_button" htmlType="submit" size="large" block>
                <Trans i18nKey="auth.resetPassword" />
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </S.Card>
  );
};

export default ChangePasswordPage;

export const loader = async () => {
  try {
    const { data } = await kratos.createBrowserRecoveryFlow();
    return data;
  } catch (e: any) {
    // check for axios@0.21 Error
    if (!e.isAxiosError) {
      throw e;
    }

    const { data } = e.response;

    if (data.error) {
      if ((data.error as GenericError).id === EAuthLoginFlowId.SessionAlreadyAvailable) {
        return redirect(MappingPaths.PROTECTED.DASHBOARD);
      }
    }

    if (data.ui) {
      return data;
    }

    throw e;
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get('login') as string;
  const csrf_token = formData.get('csrf_token') as string;
  const flow_id = formData.get('flow_id') as string;
  const cookie = request.headers.get('cookie');
  const method = 'code';

  await kratos.updateRecoveryFlow({
    flow: flow_id,
    updateRecoveryFlowBody: {
      csrf_token,
      email,
      method,
    },
  });
  const searchParams = new URLSearchParams();
  searchParams.append('flow_id', flow_id);
  return redirect(`${MappingPaths.PUBLIC.CONFIRM_CODE}?${searchParams.toString()}`);
};
