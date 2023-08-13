import {forwardRef, Ref} from 'react';
import {FormProps, Form as AntForm, FormInstance} from 'antd';
import * as S from './Form.style';
import {FormItem} from './FormItem';

export const InternalForm = forwardRef(
    (
        {
            rootClassName,
            ...restProps
        }: FormProps,
        ref: Ref<FormInstance>,
    ) => (
        <S.Wrapper>
            {/** @ts-ignore */}
            <AntForm
                layout="vertical"
                rootClassName={['custom-ant-form', rootClassName].join(' ')}
                {...restProps} ref={ref}
            />
        </S.Wrapper>
    ),
);

export const Form = Object.assign(InternalForm, {
    Item: FormItem,
    useForm: AntForm.useForm,
    useFormInstance: AntForm.useFormInstance,
});
