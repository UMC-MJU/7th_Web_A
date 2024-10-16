import styled from 'styled-components';

const Button = (props) => {
    return <ButtonStyle color={props.color}>{props.children}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
    width: 85px;
    height: 50px;
    color: white;
    background-color: ${(props) => props.color || 'black'};
    border-radius: 20px;
    border: solid black 1px;
    &:hover {
        filter: brightness(1.2);
    }
`;
