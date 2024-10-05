import Grid from '../components/grid';
import { useParams } from 'react-router-dom';

const Movies = () => {
  let apiUrl = '';
  const APIBASIC = `https://api.themoviedb.org/3/`;
  const APISORT = 'discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1';

  switch(useParams().movieCategory){
    case 'now-playing':
      apiUrl = APIBASIC + APISORT +'&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}';
      break;
    case 'popular':
      apiUrl = APIBASIC + APISORT +'&sort_by=popularity.desc';
      break;
    case 'top-rated':
      apiUrl = APIBASIC + APISORT +'&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';
      break;
    case 'up-coming':
      apiUrl = APIBASIC + APISORT +'&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}';
      break;
    default:
      apiUrl = APIBASIC + 'movie/popular?language=ko-KR&page=1';
  }

  return (
    <>
    <Grid url={apiUrl}></Grid>
    </>
  )
}

export default Movies