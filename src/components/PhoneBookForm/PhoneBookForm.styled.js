import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 10px;
  }
`;

export const InputBox = styled(Field)`
  width: 400px;
  height: 25px;
  margin-top: 5px;
  padding: 5px;
  border: none;
  border-radius: 7px;
`;

export const BtnWrap = styled.div`
  margin-top: 15px;
`;
