import { styled, css } from 'styled-components';
import {useForm} from 'react-hook-form'
// import useForm from '../hooks/use-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState, useContext } from 'react';
import { LoginContext } from '../context/LoginContext.jsx';
import { useMutation } from '@tanstack/react-query';
import { loginUserInfo } from '../apis/getUserInfo';
import { queryClient } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {isLogin} = useContext(LoginContext);
  const navigate = useNavigate();

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

  const {mutate:postUserInfo} = useMutation({
    mutationFn: loginUserInfo,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey:["User"],
      })
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      isLogin(true);
      alert("로그인이 완료되었습니다.")
      return navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {

    },
  })


  const onSubmit = async (data) => {
    postUserInfo({email: data.email, password: data.password});
  }

  
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