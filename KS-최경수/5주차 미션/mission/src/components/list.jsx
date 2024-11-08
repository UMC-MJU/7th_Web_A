import { styled } from 'styled-components';


const List = ( {listText}) => {

  return (
    <>
        <ListText>{listText}</ListText>
    </>
  )
}

export default List;


const ListText = styled.div`
    margin-left: 9px;
`