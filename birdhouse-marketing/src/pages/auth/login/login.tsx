/* eslint-disable no-debugger */
import { useEffect } from 'react';
import {
  LoginFlow,
  GenericError,
  UiNodeGroupEnum,
  UiNodeTypeEnum,
  UiNodeInputAttributesTypeEnum,
} from '@ory/kratos-client';
import { App } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import {
  ActionFunctionArgs,
  redirect,
  useActionData,
  useNavigation,
  useSubmit,
  useSearchParams,
  useLoaderData,
  Link,
} from 'react-router-dom';
import { Button } from 'antd';
import { Checkbox } from 'antd';
import { Form } from '../../../modules/antd/Form/Form';
import { Input } from '../../../modules/antd/Input/Input';
import {Loader} from '../../../modules/antd/Loader/Loader';
import {MappingPaths} from '../../../constants/mapping.paths';
import {kratos,EAuthLoginFlowId} from '../../../auth/kratos';
import {LoginPageActionData, LoginPageLoaderData} from  '../../../auth/types';
import * as S from './login.style';
import { DefaultErrorBoundary } from '../../../modules/DefaultErrorBoundary/DefaultErrorBoundary';

const { useApp } = App;

export const LoginPage = () => {
  console.log('start LoginPage');

  const { t } = useTranslation();
  const { notification } = useApp();
  const [searchParams] = useSearchParams();
  const actionData = useActionData() as LoginPageActionData;
  const navigation = useNavigation();
  const submit = useSubmit();
  const from = searchParams.get('from') || MappingPaths.ROOT;
  const { flow } = (useLoaderData() || {}) as LoginPageLoaderData;

  useEffect(() => {
    console.log('searchParams kratos');

    const message = searchParams.get('message');
    if (message) {
      notification.info({
        message,
        placement: 'top',
      });
      searchParams.delete('message');
    }
  }, []);

  useEffect(() => {
    console.log('actionData kratos');
    if (actionData?.errors) {
      actionData.errors.forEach((error) => {
        notification.error({
          message: error,
        });
      });
    }
  }, [actionData]);

  if (!flow) {
    console.log('request kratos');
    return <Loader />;
  }

  const submitting = navigation.state === 'submitting';

  const handleSubmit = async (values: any) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    formData.append('flow_id', flow.id);
    formData.append('from', from);

    submit(formData, {
      method: 'post'
    });

  };

  const initialValues = flow.ui.nodes.reduce(
      (acc: any, node: any) => ({
      ...acc,
      [node.attributes.name]: node.attributes.value,
    }),
    {},
  );

  const renderNode = (node: any, index: number) => {
    console.log("render start")
    if (node.group === UiNodeGroupEnum.Oidc) {
      // skip oids group.
      return null;
    }

    if (node.type === UiNodeTypeEnum.Input) {
      if (node.group === UiNodeGroupEnum.Default) {
        if (node.attributes.type === UiNodeInputAttributesTypeEnum.Text) {
          if (node.attributes.name === 'identifier') {
            return (
              <Form.Item
                key={index}
                name={node.attributes.name}
                rules={[
                  {
                    required: node.attributes.required,
                    message: t('validation.required')!,
                  },
                ]}
              >
                <Input
                  size="large"
                  type={node.attributes.type}
                  allowClear
                  placeholder={`${t(`auth.identifier`)}`}
                />
              </Form.Item>
            );
          }
        }

        if (node.attributes.type === UiNodeInputAttributesTypeEnum.Hidden) {
          return (
            <Form.Item
              key={index}
              name={node.attributes.name}
              style={{
                display: 'none',
              }}
            >
              <Input size="large" type={node.attributes.type} />
            </Form.Item>
          );
        }
      }

      if (node.group === UiNodeGroupEnum.Password) {
        if (node.attributes.type === UiNodeInputAttributesTypeEnum.Password) {
          return (
            <Form.Item
              key={index}
              name={node.attributes.name}
              rules={[
                {
                  required: node.attributes.required,
                  message: t('validation.required')!,
                },
              ]}
            >
              <Input.Password
                size="large"
                type={node.attributes.type}
                allowClear
                placeholder={`${t(`auth.password`)}`}
              />
            </Form.Item>
          );
        }

        if (node.attributes.type === UiNodeInputAttributesTypeEnum.Submit) {
          return (
            <div key="submit">
              <S.Wrapper>
                <Checkbox>{t('auth.checkbox.rememberMe')}</Checkbox>
                <Link to={MappingPaths.PUBLIC.CHANGE_PASSWORD}>{t('auth.button.forgotPassword')}</Link>
              </S.Wrapper>

              <Form.Item name={node.attributes.name} key={index} noStyle>
                <Button
                  value={node.attributes.value}
                  type="primary"
                  loading={submitting}
                  size="large"
                  htmlType="submit"
                  block
                >
                  <Trans i18nKey="auth.signIn" />
                </Button>
              </Form.Item>
            </div>
          );
        }
      }
    }

    return null;
  };

  return (
    <S.Card>
      <Form initialValues={initialValues} onFinish={handleSubmit}>
        <span style={{fontSize: 30, fontWeight: 500}}>Login</span>
        {flow.ui.nodes.map(renderNode)}
      </Form>
      <Link to={MappingPaths.PUBLIC.REGISTRATION}>{t('auth.login.signUp')}</Link>
    </S.Card>
  );
};

// for react-router lazy loading
export default LoginPage;

export const loader = async () => {
  try {
    console.log("call kratos");
    const response = await kratos.createBrowserLoginFlow();
    return {
      flow: response.data,
    };
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
  const flowId = formData.get('flow_id');
  const csrf_token = formData.get('csrf_token');
  const identifier = formData.get('identifier');
  const password = formData.get('password');
  const method = formData.get('method');
  const from = formData.get('from');

  try {
    await kratos.updateLoginFlow({
      flow: `${flowId}`,
      updateLoginFlowBody: {
        csrf_token: `${csrf_token}`,
        identifier: `${identifier}`,
        password: `${password}`,
        method: `${method}`,
      },
    });
    return redirect(`${from}`);
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

export const ErrorBoundary = DefaultErrorBoundary;
