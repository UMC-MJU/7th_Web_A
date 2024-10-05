import { styled } from 'styled-components';
import Category from '../components/category';
import { Category1, Category2, Category3, Category4 } from '../assets/images/imageExport';

const MovieCategory = () => {
  const categoryData = [
    {id: 1, src:Category1, text: "현재 상영중인"},
    {id: 2, src:Category2, text: "인기있는"},
    {id: 3, src:Category3, text: "높은 평가를 받은"},
    {id: 4, src:Category4, text: "개봉 예정중인"},
  ];


  return (
    <>
    <h1>카테고리</h1>
    <CategoryContainer>
      <Category datas={categoryData}></Category>
    </CategoryContainer>
    </>
  )
}

export default MovieCategory;

const CategoryContainer = styled .div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 25px;
  margin-top: 20px;
`