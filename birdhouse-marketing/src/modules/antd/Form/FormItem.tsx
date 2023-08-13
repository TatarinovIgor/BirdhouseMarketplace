import {ReactNode} from 'react';
import {FormItemProps, Form as AntForm} from 'antd';

export const FormItem = ({
                             children,
                             rootClassName,
                             ...restProps
                         }: FormItemProps & {
    dataTestId?: string;
    children?: ReactNode;
}) => (
    <AntForm.Item colon={false} rootClassName={['custom-ant-form-item', rootClassName].join(' ')} {...restProps}>
        {children}
    </AntForm.Item>
);
