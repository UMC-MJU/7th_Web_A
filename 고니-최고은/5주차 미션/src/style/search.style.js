import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;

    input {
        flex: 1;
        padding: 15px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border: 1px solid rgb(220,220,220);
    }

    button {
        width: 80px;
        background-color: rgb(220, 20, 60);
        color: white;
        cursor: pointer;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`

const MovieGridContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
`

export {SearchContainer, MovieGridContainer}