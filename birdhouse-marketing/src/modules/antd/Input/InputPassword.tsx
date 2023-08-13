import {InputProps, Input as AntInput} from 'antd';

export const InputPassword = ({ ...restProps}: InputProps ) => (
    <AntInput.Password {...restProps} />
);
