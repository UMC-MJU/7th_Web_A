import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/button';
import Input from '../components/input';

const SignUp = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다.')
            .required('이메일을 반드시 입력해주세요.')
            .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, '올바른 이메일 형식이 아닙니다.'),
        password: yup
            .string()
            .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 최대 16자까지 가능합니다.')
            .required('비밀번호를 반드시 입력해주세요.')
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                '비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.'
            ),
        passwordConfirm: yup
            .string()
            .required('비밀번호 확인을 입력해주세요.')
            .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
    };

    return (
        <LoginContainer>
            <StyledTitle>회원 가입 페이지</StyledTitle>
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

                <Input
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                    error={errors.passwordConfirm?.message}
                    {...register('passwordConfirm')}
                />

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