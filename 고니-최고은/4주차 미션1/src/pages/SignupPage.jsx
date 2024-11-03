import React from 'react';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const SignupPage = () => {
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
        passwordCheck: yup
        .string()
        .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.') // 비밀번호와 일치하는지 확인
        .required('비밀번호 확인을 입력해주세요!'),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all', // 모든 입력에 대해 유효성 검사
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
    };

    return (
        <div style={{ color: '#fff', width: '300px', margin: 'auto', marginTop: '100px' }}>
            <div style={{ marginBottom: '30px', marginLeft: '13px' }}><h2 style={{ textAlign: 'center' }}>회원가입</h2></div>
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
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="password"
                        {...register("passwordCheck")}
                        placeholder="비밀번호를 다시 입력해주세요!"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.passwordCheck?.message}</p>
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
                        제출
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;