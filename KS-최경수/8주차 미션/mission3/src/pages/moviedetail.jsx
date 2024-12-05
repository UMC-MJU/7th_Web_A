import { useLocation } from "react-router-dom";
import Content from "../components/content";
import Cast from "../components/cast";

const MovieDetail = () => {
  const { state } = useLocation();


  return (
    <>
    <Content id={state.id}/>
    <Cast movieId={state.id}/>
    </>
  )
}

export default MovieDetail;

