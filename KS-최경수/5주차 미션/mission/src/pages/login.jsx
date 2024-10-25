import { styled, css } from 'styled-components';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const Login = () => {

  return (
    <LoginContainer>
    <LoginTitle>로그인</LoginTitle>
    <form>
      <LoginEmailInput type={'email'} placeholder='이메일을 입력해주세요!'/>
      <LoginEamilError/>
      <LoginPasswordInput type={'password'} placeholder='비밀번호를 입력해주세요!'/>
      <LoginPasswordError/>
      <LoginSubmit type={'submit'} value={'로그인'}/>
    </form>
    </LoginContainer>
  )
}

export default Login
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`

const LoginTitle = styled.p`
  color: var(--w5-titlecolor);
  font-weight: bold;
  font-size: 30px;
`
const InputCommonStyle = css`
  width: 380px;
  height: 50px;
  border-radius: 7px;
  padding-left : 10px;
  box-sizing: border-box;

  &:hover{
  }
`

const LoginEmailInput = styled.input`
  ${InputCommonStyle}
  margin-top: 35px;

`
const LoginEamilError = styled.p``

const LoginPasswordInput = styled.input`
  ${InputCommonStyle}
  margin-top: 15px;
`

const LoginPasswordError = styled.p``


const LoginSubmit = styled.input`
  width: 377px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: var(--w5-buttonColor);
  color: var(--w5-titlecolor);
  margin-top: 15px;
`