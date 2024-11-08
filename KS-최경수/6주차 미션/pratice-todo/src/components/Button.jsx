
const Button = ({text, fun, data}) => {

  return (
    <>
    <button onClick={() => fun(data.id)}>
      {text}
    </button>
    </>
  )
}

export default Button

