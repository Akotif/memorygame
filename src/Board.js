import React from 'react'
import  Square  from './Square'

const Board = (props) => {

  return (
    <div className='Board'>
        <table>
        <tbody>
        <tr>
        {props.board.slice(0,5).map((item,index)=>(
            <td key={index}>
            <Square clickHandler={()=>props.clickHandler(props.images[index])}
             iconStyle={props.images[index].style} images={props.images[index].icon}>
            </Square>
            </td>
        ))}
        </tr>
        <tr>
        {props.board.slice(0,5).map((item,index)=>(
            <td key={index}>
            <Square clickHandler={()=>props.clickHandler(props.images[index+5])}
              iconStyle={props.images[index+5].style} images={props.images[index+5].icon}></Square>
            </td>
        ))}
        </tr>
        <tr>
        {props.board.slice(0,5).map((item,index)=>(
            <td key={index}>
            <Square 
            clickHandler={()=>props.clickHandler(props.images[index+10])}
            iconStyle={props.images[index+10].style} images={props.images[index+10].icon}></Square>
            </td>
        ))}
        </tr>
        <tr>
        {props.board.slice(0,5).map((item,index)=>(
            <td key={index}>
            <Square  clickHandler={()=>props.clickHandler(props.images[index+15])}
              iconStyle={props.images[index+15].style} images={props.images[index+15].icon}></Square>
            </td>
        ))}
        </tr>
        </tbody>
        </table>
      
    </div>
  )
}

export default Board
