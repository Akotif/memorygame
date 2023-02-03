import React from 'react'
const Square  = (props) => {
  return (
    <div className='Square'>
        <div className="image">
          <img onClick={props.clickHandler} className={props.iconStyle} src={props.images}></img>
        </div>
    </div>
  )
}
export default Square
