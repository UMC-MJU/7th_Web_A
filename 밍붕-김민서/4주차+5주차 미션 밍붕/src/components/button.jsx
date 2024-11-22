import styled from 'styled-components';

const Button = (props) => {
    return (
        <ButtonStyle color={props.color} width={props.width} height={props.height}>
            {props.children}
        </ButtonStyle>
    );
};

export default Button;

const ButtonStyle = styled.button`
    width: ${(props) => props.width || '60px'};
    height: ${(props) => props.height || 'auto'};
    color: white;
    background-color: ${(props) => props.color || 'white'};
    border-radius: 10px;
    border: solid black 1px;
    &:hover {
        filter: brightness(1.2);
    }
`;
