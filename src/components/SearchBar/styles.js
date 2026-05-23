import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin: 20px;
`;
export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  flex: 1;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;