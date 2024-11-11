import Grid from '../components/grid';

const Upcoming = () => {

  let apiUrl = `/movie/upcoming?language=ko-KR&page=1`;
  
  return (
    <>
    <Grid url={apiUrl}></Grid>
    </>
  )
}

export default Upcoming