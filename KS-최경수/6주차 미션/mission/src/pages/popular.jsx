import Grid from '../components/grid';

const Popular = () => {

  let apiUrl = `/movie/popular?language=ko-KR&page=1`;
  
  return (
    <>
    <Grid url={apiUrl}></Grid>
    </>
  )
}

export default Popular