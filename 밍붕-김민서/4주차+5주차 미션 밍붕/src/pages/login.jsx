import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/button';
import Input from '../components/input';

const Login = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다.')
            .required('이메일을 반드시 입력해주세요.')
            .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, '올바른 이메일 형식이 아닙니다.'), // 추가적인 이메일 형식 검증
        password: yup
            .string()
            .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 최대 16자까지 가능합니다.')
            .required('비밀번호를 반드시 입력해주세요.')
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                '비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.'
            ),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
    };

    return (
        <LoginContainer>
            <StyledTitle>로그인</StyledTitle>
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    error={errors.email?.message}
                    {...register('email')}
                />

                <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    error={errors.password?.message}
                    {...register('password')}
                />

                <Button width={'100%'} height={'50px'} color={'#EF007E'}>
                    로그인
                </Button>
            </StyledForm>
        </LoginContainer>
    );
};

export default Login;

const LoginContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 100px;
`;

const StyledTitle = styled.h1`
    color: white;
    margin: 10px;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
`;
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 16px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;


