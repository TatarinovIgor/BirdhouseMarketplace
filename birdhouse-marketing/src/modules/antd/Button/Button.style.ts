import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InternalButtonProps, InternalButton } from './InternalButton';

const generateSuccessStyles = (props: { disabled?: boolean }) => css`
  background-color: #a0d911;
  color: black;
  border-color: #a0d911;
  box-shadow: 0 2px 0 rgba(225, 255, 5, 0.1);

  ${!props.disabled &&
  css`
    &:hover,
    &:active {
      background-color: #bae637 !important;
      color: #000 !important;
      border-color: #bae637 !important;
    }
  `}
`;

const generateWarningStyles = (props: { disabled?: boolean }) => css`
  background-color: #ffc53d;
  color: #000;
  border-color: #ffc53d;
  box-shadow: 0 2px 0 rgba(255, 222, 5, 0.06);

  ${!props.disabled &&
  css`
    &:hover,
    &:active {
      background-color: #ffd666 !important;
      color: black !important;
      border-color: #ffd666 !important;
    }
  `}
`;

const generateDefaultStyles = (props: { disabled?: boolean }) => css`
  --wave-color: #000;
  background-color: #fff;

  ${!props.disabled &&
  css`
    &:hover,
    &:active {
      background-color: white !important;
      color: #000 !important;
      border: 1px solid black !important;
    }
  `}
`;

const generatePrimaryStyles = (props: { disabled?: boolean }) => css`
  --wave-color: black;
  background-color: #262626;
  color: white;
  border: 1px solid #262626;
  box-shadow: none;

  ${!props.disabled &&
  css`
    &:hover,
    &:active {
      background-color: #333333 !important;
      color: white !important;
      border: 1px solid #333333 !important;
    }
  `}
`;

const generateOverrideStyles = ({ disabled, success, warning, type }: InternalButtonProps) => {
  if (success) {
    return generateSuccessStyles({ disabled });
  }
  if (warning) {
    return generateWarningStyles({ disabled });
  }
  if (type === 'primary') {
    return generatePrimaryStyles({ disabled });
  }

  if (type === 'text') {
    return css``;
  }

  return generateDefaultStyles({ disabled });
};

const Button = styled(InternalButton)`
  ${(props) => generateOverrideStyles(props)}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Button };
