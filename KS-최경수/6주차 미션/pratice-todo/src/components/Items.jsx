import Button from './Button';

const Items = ({data, id, deletefun, updatefun, text, setTextfun}) => {

  return (
    <>
      <div className="itemContainer">
        <div className="leftContainer">
          {text === "수정" && (
            <>
              <input type="checkbox" id={id} className='checkbox'/>
              <label htmlFor={id} >{data.task}</label>
            </>
          )}  {text === "완료" && (
            <>
            <input defaultValue={data.task} className='editInput' onChange={(e) => setTextfun(e.target.value)} autoFocus/>
            </>
          )}
        </div> 
        <div className="rightContainer">
          <Button text={text} fun={updatefun} data={data} />
          <Button text={"삭제"} fun={deletefun} data={data} />
        </div>
      </div>
    </>
  )

}

export default Items