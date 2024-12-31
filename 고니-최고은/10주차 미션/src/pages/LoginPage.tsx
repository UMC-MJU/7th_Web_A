import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// 폼 데이터 타입 정의
interface LoginForm {
    email: string;
    password: string;
}

// 유효성 검사 스키마 정의
const schema = yup.object().shape({
    email: yup
        .string()
        .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
        .required('이메일을 입력해주세요!'),
    password: yup
        .string()
        .min(8, '비밀번호는 8자 이상이어야 합니다.')
        .max(16, '비밀번호는 16자 이하여야 합니다.')
        .required('비밀번호를 입력해주세요!'),
});

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { setNickname } = useAuth();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginForm>({
        resolver: yupResolver(schema),
        mode: 'all', // 모든 입력에 대해 유효성 검사
    });

    const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email: data.email,
                password: data.password,
            });

            console.log('로그인 성공:', response.data);
            // AccessToken과 RefreshToken을 로컬스토리지에 저장
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            // 유저 정보 가져오기
            const userResponse = await fetch('http://localhost:3000/user/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${response.data.accessToken}`,
                },
            });
            const userData = await userResponse.json();
            const userNickname = userData.email.split('@')[0]; // 이메일의 @ 앞부분
            setNickname(userNickname); // 상태 업데이트

            navigate('/'); // 메인 페이지로 이동
        } catch (error: any) {
            console.error('로그인 실패:', error.response?.data || error.message);
        }
    };

    return (
        <div style={{ color: '#fff', width: '300px', margin: 'auto', marginTop: '100px' }}>
            <div style={{ marginBottom: '30px', marginLeft: '10px' }}><h2 style={{ textAlign: 'center' }}>로그인</h2></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="이메일을 입력해주세요!"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.email?.message}</p>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="password"
                        {...register("password")}
                        placeholder="비밀번호를 입력해주세요!"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.password?.message}</p>
                </div>
                <div style={{ width: '321px' }}>
                    <button
                        type="submit"
                        disabled={!isValid} // 유효하지 않을 때 비활성화
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            backgroundColor: isValid ? 'rgb(220, 20, 60)' : 'gray', // 유효성에 따라 색상 변경
                            color: '#fff',
                            border: 'none',
                            cursor: isValid ? 'pointer' : 'not-allowed', // 비활성화 시 커서 변경
                        }}
                    >
                        로그인
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;