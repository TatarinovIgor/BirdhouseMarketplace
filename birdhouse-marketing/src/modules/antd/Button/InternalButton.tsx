import { CSSProperties } from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

export type InternalButtonProps = AntButtonProps & {
  dataTestId?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  warning?: boolean;
  success?: boolean;
};

export const InternalButton = ({
  dataTestId,
  width,
  height,
  style,
  warning,
  success,
  disabled,
  type,
  rootClassName,
  ...restProps
}: InternalButtonProps) => (
    <AntButton
      rootClassName={['custom-ant-btn', rootClassName].join(' ')}
      {...restProps}
      type={type}
      disabled={disabled}
      style={{
        width,
        height,
        ...style,
      }}
    />
);
