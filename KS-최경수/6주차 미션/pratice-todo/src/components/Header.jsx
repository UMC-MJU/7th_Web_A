
const Header = ( {img, todayDate} ) => {

  return (
    <>
      <header>
        <h1>할일 목록</h1>
        <div className='calenderInfo'>
          <img src={img}></img>
          <p>{todayDate}</p>
        </div>
      </header>
    </>
  )
}

export default Header


