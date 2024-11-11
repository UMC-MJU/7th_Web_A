import Grid from '../components/grid';

const NowPlaying = () => {

  let apiUrl = `/movie/now_playing?language=ko-KR&page=1`;
  
  return (
    <>
    <Grid url={apiUrl}></Grid>
    </>
  )
}

export default NowPlaying