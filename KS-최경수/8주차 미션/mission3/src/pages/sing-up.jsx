import { styled } from 'styled-components';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().required("이메일을 입력해주세요").matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "올바른 이메일 형식이 아닙니다. 다시 확인해주세요"
    ),
    password: yup.string().min(8, "비밀번호는 8~16자 사이로 입력해주세요!").max(16, "비밀번호는 8~16자 사이로 입력해주세요!").required(),
    passwordcheck: yup.string().oneOf([yup.ref('password'), null],"입력된 비밀번호가 일치하지 않습니다.").required("비밀번호 검증 또한 필수 입력요소입니다.")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_USER_API_URL}/auth/register`, {
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordcheck,
     }); 
     if(response.status == 201) {
      alert("회원가입이 완료되었습니다.")
      return navigate("/login");
    }
    } catch(error){
      console.log(error);
    }
  }

  return (
    <SignUpContainer>
      <SingUpTitle>회원가입</SingUpTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type={'email'}{...register("email")} placeholder='이메일을 입력해주세요!' />
        <Error>{errors.email?.message}</Error>
        <Input type={'password'}{...register("password")} placeholder='비밀번호를 입력해주세요!' />
        <Error>{errors.password?.message}</Error>
        <Input type={'password'}{...register("passwordcheck")} placeholder='비밀번호를 다시 입력해주세요!' />
        <Error>{errors.passwordcheck?.message}</Error>
        <SignUpSubmit type={'submit'} value={'제출'} disabled={errors.email === undefined && errors.password === undefined && errors.passwordcheck === undefined? false : true}/>
      </form>

    </SignUpContainer>
  )
}

export default SignUp

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`

const SingUpTitle = styled.p`
  color: var(--w5-titlecolor);
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
`

const Input = styled.input`
  width: 380px;
  height: 50px;
  border-radius: 7px;
  padding-left : 10px;
  box-sizing: border-box;
  margin-top: 15px;

  &:focus{
  }
`

const Error = styled.p`
  color: var(--w5-errorColor);
  margin-top: 5px;
  margin-left: 3px;
  font-size: 12px;
`

const SignUpSubmit = styled.input`
  width: 377px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: ${props=>props.disabled? 'var(--w5-disabledbuttonColor)': 'var(--w5-buttonColor)'};
  color: var(--w5-titlecolor);
  margin-top: 15px;
`