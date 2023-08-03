import { styled } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
`;

export const Label = styled.label`
  margin: 0 8px;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;