import React from 'react';
import styled from 'styled-components';

const Input = ({ label, error, ...props }) => {
    return (
        <InputContainer>
            {label && <Label>{label}</Label>}
            <StyledInput hasError={!!error} {...props} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
    );
};

export default Input;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;

const Label = styled.label`
    font-size: 14px;
    color: #333;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${(props) => (props.hasError ? '#ff4d4f' : '#e1e1e1')};
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:focus {
        border-color: ${(props) => (props.hasError ? '#ff4d4f' : '#4096ff')};
        box-shadow: 0 0 0 2px ${(props) => (props.hasError ? 'rgba(255, 77, 79, 0.2)' : 'rgba(64, 150, 255, 0.2)')};
    }

    &::placeholder {
        color: #999;
    }
`;

const ErrorMessage = styled.p`
    color: #ff4d4f;
    font-size: 14px;
    margin: 0;
    min-height: 20px;
`;