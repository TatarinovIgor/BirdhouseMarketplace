import {Input} from 'antd';
import {TextAreaProps} from 'antd/es/input';

const {TextArea: AntdTextArea} = Input;

export const TextArea = (props: TextAreaProps) => <AntdTextArea {...props} />;
