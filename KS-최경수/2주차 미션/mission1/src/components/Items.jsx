import Button from './Button';

const Items = ({data, id, deletefun, updatefun}) => {
  return (
    <>
      <div className="itemContainer">
        <div className="leftContainer">
          <input type="checkbox" id={id} />
          <label htmlFor={id}>{data.task}</label>
        </div>
        <div className="rightContainer">
          <Button text={"수정"} fun={updatefun}/>
          <Button text={"삭제"} fun={deletefun} data={data}/>
        </div>
      </div>
    </>
  )

}

export default Items