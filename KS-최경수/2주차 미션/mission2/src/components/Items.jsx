const Items = ({data}) => {

  const movieimgPath = "https://image.tmdb.org/t/p/original" + data.poster_path;
  console.log(movieimgPath);
  return (
    <>
    <div className="movie" style={{backgroundImage: `url(${movieimgPath})`}}></div>
    </>
  )
}

export default Items