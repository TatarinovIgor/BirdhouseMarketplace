import * as S from './Button.style';
import { InternalButtonProps } from './InternalButton';

export type ButtonProps = InternalButtonProps;

export const Button = (props: InternalButtonProps) => <S.Button {...props} />;
