import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'; 
import Button from '../components/button';
import useAuthFetch from '../hooks/useAuthFetch';

const SignUp = () => {
    const [signupStatus, setSignupStatus] = useState(null); // To track success or error
    const { fetchData, data, isLoading, isError } = useAuthFetch();
    const navigate = useNavigate();  // useNavigate 훅 초기화

    useEffect(() => {
        if (!isLoading) {
            if (isError) {
                console.log('회원가입 에러');
                setSignupStatus('error');
            } else if (data) {
                setSignupStatus('success');
                alert('회원가입 성공!');
                navigate('/login');  // 회원가입 성공 시 로그인 페이지로 이동
            }
        }
    }, [isLoading, isError, data]);

    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 반드시 입력해주세요.'),
        password: yup
            .string()
            .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 최대 16자까지 가능합니다.')
            .required('비밀번호를 반드시 입력해주세요.'),
        passwordCheck: yup
            .string()
            .required('비밀번호 확인을 입력해주세요.')
            .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (formData) => {
        const body = {
            email: formData.email,
            password: formData.password,
            passwordCheck: formData.passwordCheck,
        };

        setSignupStatus(null);
        await fetchData('/auth/register', 'POST', body); // fetchData 실행
    };

    return (
        <LoginContainer>
            <StyledTitle>회원 가입 페이지</StyledTitle>
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* 이메일 */}
                <input type="email" placeholder="이메일을 입력해주세요" {...register('email')} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                {/* 비밀번호 */}
                <input type="password" placeholder="비밀번호를 입력해주세요" {...register('password')} />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

                {/* 비밀번호 확인 */}
                <input type="password" placeholder="비밀번호를 다시 입력해주세요" {...register('passwordCheck')} />
                {errors.passwordCheck && <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>}

                {/* 오류 메시지 표시 */}
                {signupStatus === 'error' && <ErrorMessage>회원가입에 실패했습니다. 다시 시도해 주세요.</ErrorMessage>}
                {signupStatus === 'success' && <SuccessMessage>회원가입 성공! 로그인 해주세요.</SuccessMessage>}

                <Button width={'100%'} height={'50px'} color={'#EF007E'}>
                    회원가입
                </Button>
            </StyledForm>
        </LoginContainer>
    );
};

export default SignUp;

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

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 16px;
`;

const ErrorMessage = styled.p`
    color: #ff4d4f;
    font-size: 14px;
    margin: 0;
    min-height: 20px;
`;

const SuccessMessage = styled.p`
    color: #4caf50;
    font-size: 14px;
    margin: 0;
`;
