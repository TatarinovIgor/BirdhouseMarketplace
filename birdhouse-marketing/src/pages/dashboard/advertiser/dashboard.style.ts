import styled from '@emotion/styled';

export const Card = styled.div`
  align-self: center;
  min-width: 320px;
  max-width: 1200px;
  width: calc(100% - 0px);
  background: white;
  margin: 100px 0px;
  justify-content:  space-between;
  position: sticky;
  top: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  margin-bottom: 23px;
  & a {
    color: black;
  }
`;
