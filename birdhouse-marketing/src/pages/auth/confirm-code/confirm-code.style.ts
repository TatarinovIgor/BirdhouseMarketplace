import styled from '@emotion/styled';

export const Card = styled.div`
  width: 364px;
  background: white;
  padding: 20px;
  margin: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  color: black;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  height: 48px;
  padding-left: 32px;
  width: 377px;
`;

export const InputWrappper = styled.div`
  .no-spin::-webkit-inner-spin-button,
  .no-spin::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .no-spin {
    -moz-appearance: textfield;
  }
`;
