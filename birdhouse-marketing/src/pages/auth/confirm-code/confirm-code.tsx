import { useEffect, useRef, useState } from 'react';
import { GenericError, RecoveryFlow } from '@ory/kratos-client';
import { App, FormProps, Space } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
  useSubmit,
} from 'react-router-dom';
import { Button } from '../../../modules/antd/Button/Button';
import { Form } from '../../../modules/antd/Form/Form';
import { Input } from '../../../modules/antd/Input/Input';
import { DefaultErrorBoundary } from '../../../modules/DefaultErrorBoundary/DefaultErrorBoundary';
import { kratos } from '../../../auth/kratos';
import { LoginPageActionData } from '../../../auth/types';
import { MappingPaths } from '../../../constants/mapping.paths';
import * as S from './confirm-code.style';

const { useApp } = App;

export const ConfirmCodePage = () => {
  const { t } = useTranslation();
  const code = ['', '', '', '', '', ''];
  const [state, setState] = useState({});

  const inputRefs = useRef(new Array(code.length));
  const actionData = useActionData() as LoginPageActionData;
  const { notification } = useApp();
  const submit = useSubmit();
  const loaderData = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const flow_id = loaderData.id;

  const emailNode = loaderData.ui.nodes.find(
    (node) => 'name' in node.attributes && node.attributes.name === 'email',
  ) as any;

  const csrfTokeNode = loaderData.ui.nodes.find(
    (node) => 'name' in node.attributes && node.attributes.name === 'csrf_token',
  ) as any;

  const updateArray = (array: string[], index: number, newValue: string) => {
    const copy = [...array];
    copy[index] = newValue;
    return copy;
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newDigit = value.trim().replace(/\D/g, '');
    const inputs = inputRefs.current;

    if (newDigit.length > 1 || newDigit < '0' || newDigit > '9') {
      inputs[index] = '';
      return;
    }

    updateArray(code, index, newDigit);

    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    } else {
      inputs[index].blur();
    }
  };

  const handleKeyDown = (index: number, keyPressed: string) => {
    if (keyPressed !== 'Backspace') {
      return;
    }

    if (code[index]) {
      updateArray(code, index, '');
    } else if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  useEffect(() => {
    if (actionData?.errors) {
      actionData.errors.forEach((error) => {
        notification.error({
          message: error,
        });
      });
    }
  }, [actionData]);

  const onFinishCode: FormProps['onFinish'] = (values) => {
    const formData = new FormData();
    const otpCode: string = Object.values(values).join('');

    setState({
      ...state,
      code: otpCode,
    });

    formData.append('code', otpCode);
    formData.append('csrf_token', csrfTokeNode.attributes.value);
    formData.append('flow_id', flow_id);

    submit(formData, {
      method: 'post',
    });
  };

  const resendCode = async () => {
    await kratos.updateRecoveryFlow({
      flow: flow_id,
      updateRecoveryFlowBody: {
        csrf_token: csrfTokeNode.attributes.value,
        email: emailNode.attributes.value,
        method: 'code',
      },
    });
  };

  return (
    <Space size={32} direction="vertical">
      <S.Wrapper>
        <b>{t('auth.confirmCode.text')}</b>
        <b>{emailNode.attributes.value}</b>
      </S.Wrapper>
      <S.Card>
        <Form onFinish={onFinishCode}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Space size={17} direction="horizontal" style={{ width: '100%' }}>
              {code.map((digit, index) => (
                <S.InputWrappper>
                  <Form.Item name={`digit_${index}`}>
                    <Input
                      ref={(ref) => {
                        inputRefs.current[index] = ref;
                      }}
                      size="large"
                      style={{
                        width: '40px',
                        textAlign: 'center',
                        fontSize: '16px',
                      }}
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      value={digit}
                      onChange={(event) => handleChange(index, event)}
                      onKeyUp={(event) => handleKeyDown(index, event.nativeEvent.key)}
                      type="number"
                      inputMode="numeric"
                      className="no-spin"
                    />
                  </Form.Item>
                </S.InputWrappper>
              ))}
            </Space>
            <Form.Item noStyle>
              <Button type="primary" dataTestId="submit_button" htmlType="submit" size="large" block>
                <Trans i18nKey="auth.confirmCode" />
              </Button>
            </Form.Item>
            <Form.Item noStyle>
              <Button dataTestId="submit_button" size="large" onClick={resendCode} block>
                <Trans i18nKey="auth.resend" />
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </S.Card>
    </Space>
  );
};
// for react-router lazy loading
export default ConfirmCodePage;
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const csrf_token = formData.get('csrf_token') as string;
  const flow_id = formData.get('flow_id') as string;
  const code = formData.get('code') as string;
  const method = 'code';

  try {
    const flow = await kratos.updateRecoveryFlow({
      flow: flow_id,
      updateRecoveryFlowBody: {
        csrf_token,
        code,
        method,
      },
    });

    if (flow.data.ui) {
      const { ui } = flow.data as RecoveryFlow;
      if (ui.messages) {
        const generalErrors = ui.messages.map((message) => message.text);
        const nodeErrors = ui.nodes.map((node) => node.messages.map((message) => message.text)).flat();

        return {
          errors: [...generalErrors, ...nodeErrors],
        };
      }
    }

    return redirect(MappingPaths.PUBLIC.CREATE_NEW_PASSWORD);
  } catch (e: any) {
    // check for axios@0.21 Error
    if (!e.isAxiosError) {
      throw e;
    }

    const { data } = e.response;

    if (e.response.data.error.id === 'browser_location_change_required') {
      return redirect(MappingPaths.PUBLIC.CREATE_NEW_PASSWORD);
    }

    if (data.error) {
      return {
        errors: [(data.error as GenericError).reason],
      };
    }

    if (data.ui) {
      const { ui } = data as RecoveryFlow;
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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const flow_id = searchParams.get('flow_id');
  if (flow_id) {
    try {
      const flow = await kratos.getRecoveryFlow({
        id: flow_id as string,
      });
      return flow.data;
    } catch (e: any) {
      // check for axios@0.21 Error
      if (!e.isAxiosError) {
        throw e;
      }
      // if the recovery flow has expired
      if (e.response.data.error.code === 410) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw redirect(MappingPaths.PUBLIC.RESET_PASSWORD);
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw redirect(MappingPaths.PUBLIC.RESET_PASSWORD);
};

export const ErrorBoundary = DefaultErrorBoundary;
