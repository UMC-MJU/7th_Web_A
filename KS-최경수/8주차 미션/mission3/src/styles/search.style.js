import { styled } from 'styled-components';

const SearchInput = styled.input`
  width: calc(100% - 97px);
  border: none;
  padding: 15px 0px 15px 12px;
  border-radius: 5px 0px 0px 5px;
`
const SearchButton = styled.button`
  border: none;
  border-radius: 0px 5px 5px 0px;
  padding: 15px 30px;
  color : var(--w6-textcolor);
  background-color: var(--w6-buttonColor);
`

export {SearchInput, SearchButton}