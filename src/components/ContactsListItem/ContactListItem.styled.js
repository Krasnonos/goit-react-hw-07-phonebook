import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: auto;
  height: 40px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  & + & {
    margin-top: 10px;
  }
`;

export const TextWrap = styled.div`
  display: inline-flex;
  align-items: center;
  width: 300px;
`;

export const Text = styled.p`
  margin-left: 10px;
`;
