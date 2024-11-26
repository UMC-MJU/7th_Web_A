import Grid from '../components/grid';

const TopRated = () => {

  let apiUrl = `/movie/top_rated?language=ko-KR&page=1`;
  
  return (
    <>
    <Grid url={apiUrl}></Grid>
    </>
  )
}

export default TopRated