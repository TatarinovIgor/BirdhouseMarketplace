import {Ref, forwardRef} from 'react';
import {Checkbox, Input as AntInput, InputProps, InputRef} from 'antd';
import {InputPassword} from './InputPassword';
import {TextArea} from './TextArea';

export type Props = InputProps;

const InternalInput = forwardRef(({ ...restProps}: Props, ref: Ref<InputRef>) => (
    <AntInput ref={ref} {...restProps} />
));

const Input = Object.assign(InternalInput, {
    Password: InputPassword,
    TextArea,
    Search: AntInput.Search,
});

export {Input};
