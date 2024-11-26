import { styled } from 'styled-components';

const Button = ({buttonText}) => {

  return (
    <>
      <RegisterButton>{buttonText}</RegisterButton>
    </>
  )
}

export default Button;

const RegisterButton = styled.button`
  width: 80px;
  height: 39px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  background-color: var(--w3-buttonColor);
  color: var(--w3-fontColor);

  &:hover{
    background-color: var(--w3-buttonHoverColor);
  }
`