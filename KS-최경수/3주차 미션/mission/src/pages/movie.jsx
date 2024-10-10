import Grid from '../components/grid';
import { useParams } from 'react-router-dom';

const Movies = () => {

  let categoryId = "popular"

  switch(useParams().movieCategory){
    case 'now-playing':
      categoryId = 'now_playing?';
      break;
    case 'popular':
      categoryId = 'popular?';
      break;
    case 'top-rated':
      categoryId = 'top_rated?';
      break;
    case 'up-coming':
      categoryId = 'upcoming?';
      break;
  }

  let apiUrl = `https://api.themoviedb.org/3/movie/${categoryId}?language=ko-KR&page=1`;
  
  return (
    <>
    <Grid url={apiUrl}></Grid>
    </>
  )
}

export default Movies