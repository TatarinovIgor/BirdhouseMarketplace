import { App as AntApp, AppProps } from 'antd';

export const InternalApp = ({ children, style, ...restProps }: AppProps) => (
  <AntApp
    {...restProps}
    style={{
      height: '100%',
      ...style,
    }}
  >
    {children}
  </AntApp>
);

const { useApp } = AntApp;

export const App = Object.assign(InternalApp, {
  useApp,
});
