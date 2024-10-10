const Items = ({id, data}) => {

  const movieimgPath = `https://image.tmdb.org/t/p/original${data.poster_path}`
  return (
    <>
    <div key="{id}" className="movie" style={{backgroundImage: `url(${movieimgPath})`}}></div>
    </>
  )
}

export default Items