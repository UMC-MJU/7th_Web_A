import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Category = ({ datas }) => {

  return (
    <>
      {datas.map((data) => (
        <Link key={data.id} to={data.link}>
         <Categoryitems image={`${data.src}`}>
          <Categorylabel>{data.text}</Categorylabel>
        </Categoryitems>
        </Link>
      ))};
    </>
  )
}

export default Category;

const Categoryitems = styled.div`
  position: relative;
  height: 160px;
  background-color: white;
  border-radius: 10px;
  background-image: url(${$props => $props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const Categorylabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: var(--w3-categorytitle);
  color: var(--w3-fontColor);
  padding: 10px;
  border-radius: 5px;
  font-weight: 700;
`