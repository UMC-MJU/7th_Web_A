import { styled, css } from 'styled-components';
import {useForm} from 'react-hook-form'
// import useForm from '../hooks/use-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from 'react';
import { validateLogin } from '../utils/validate.js';

const Login = () => {

  /* 실습2 강의 */
  // const login = useForm({
  //   initialValue: {
  //     email: '',
  //     password: '',
  //   },
  //   validate: validateLogin
  // })

  const schema = yup.object().shape({
    email: yup.string().required("이메일을 입력해주세요").matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "올바른 이메일 형식이 아닙니다. 다시 확인해주세요"
    ),
    password: yup.string().min(8, "비밀번호는 8~16자 사이로 입력해주세요!").max(16, "비밀번호는 8~16자 사이로 입력해주세요!").required(),
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  /* 실습2 강의 */
  // const handlePressLogin = () => {
  //   console.log(login.values.email, login.values.password)
  // }
  
  return (
    <LoginContainer>
    <LoginTitle>로그인</LoginTitle>
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginEmailInput type={'email'}{...register("email")} placeholder='이메일을 입력해주세요!'/>
      <Error>{errors.email?.message}</Error>
      <LoginPasswordInput type={'password'}{...register("password")} placeholder='비밀번호를 입력해주세요!'/>
      <Error>{errors.password?.message}</Error>
      <LoginSubmit type={'submit'} value={'로그인'} disabled={errors.email === undefined && errors.password === undefined ? false : true}/>
    </form>

    {/* 실습2 강의 */}
      {/* <LoginEmailInput error={login.touched.email && login.errors.email} type={'email'} 
      placeholder={'이메일을 입력해주세요!'} {...login.getTextInputProps('email')} />
      {login.touched.email && login.errors.email && <LoginEamilError>{login.errors.email}</LoginEamilError>}
      <LoginPasswordInput error={login.touched.password && login.errors.password} type={'password'} 
      placeholder={'비밀번호를 입력해주세요!'}{...login.getTextInputProps('password')}/>
      {login.touched.password && login.errors.password && <LoginPasswordError>{login.errors.password}</LoginPasswordError>}
      <button onClick={handlePressLogin}>로그인</button> */}
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
`

// border: ${props => props.error ? '4px solid red' : '1px solid #ccc'};

const LoginEmailInput = styled.input`
  ${InputCommonStyle}
  margin-top: 35px;
`

const LoginPasswordInput = styled.input`
  ${InputCommonStyle}
  margin-top: 15px;
`

const Error = styled.p`
  color: var(--w5-errorColor);
  margin-top: 5px;
  margin-left: 3px;
  font-size: 12px;
`


const LoginSubmit = styled.input`
  width: 377px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: ${props=>props.disabled? 'var(--w5-disabledbuttonColor)': 'var(--w5-buttonColor)'};
  color: var(--w5-titlecolor);
  margin-top: 15px;
`