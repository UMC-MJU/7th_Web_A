import Grid from "../components/grid";

const Home = () => {

  const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`;

  return (
    <>
    <Grid url={apiUrl}></Grid>
    </>
  )
}

export default Home;

