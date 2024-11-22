import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/button';
import useAuthFetch from '../hooks/useAuthFetch';

const Login = () => {
    const [LoginStatus, setLoginStatus] = useState(null);
    const { fetchData, data, isLoading, isError } = useAuthFetch();
    const navigate = useNavigate();

    // 로그인 상태 확인: accessToken이 있으면 메인 페이지로 리디렉션
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            navigate('/'); // 이미 로그인 상태라면 메인 페이지로 리디렉션
        }
    }, [navigate]);

    useEffect(() => {
        if (!isLoading) {
            if (isError) {
                console.log('로그인 에러');
                alert('로그인 실패');
                setLoginStatus('error');
            } else if (data) {
                setLoginStatus('success');
                alert('로그인 성공!');
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('email', data.email);

                // 페이지 새로고침 후 메인 페이지로 리디렉션
                window.location.reload(); // 새로고침 후 리디렉션
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
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

    const onSubmit = async (formData) => {
        const body = {
            email: formData.email,
            password: formData.password,
        };

        await fetchData('/auth/login', 'POST', body); // 로그인 요청
    };

    return (
        <LoginContainer>
            <StyledTitle>로그인</StyledTitle>
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* 이메일 */}
                <input type="email" placeholder="이메일을 입력해주세요" {...register('email')} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                {/* 비밀번호 */}
                <input type="password" placeholder="비밀번호를 입력해주세요" {...register('password')} />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

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
