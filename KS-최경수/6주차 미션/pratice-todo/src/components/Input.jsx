const Input = ({textEntered, fun, addfun}) => {

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={textEntered}
        placeholder="할일을 작성해보세요. 엔터를 누르면 자동으로 추가 됩니다."
        onChange={(e) => fun(e.target.value)}
        onKeyUp={(e) => {
          if(e.key === "Enter" && textEntered !== "") addfun();
        }}
      />
    </form>
    </>
  )
}

export default Input

