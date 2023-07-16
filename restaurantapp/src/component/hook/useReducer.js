import React, { useReducer } from 'react'
import "./style.css"
 const reduser=(state,action)=>{
if(action.type==="INCR"){
    state=state+1
}
if( state>0 && action.type==="DECR"){
    state=state-1
}
return state;
 }
const UseReducer = () => {
    const intialvalue=0
    const [state,dispatch]=useReducer(reduser, intialvalue)

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2"onClick={()=>{dispatch({type:"INCR"})}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2" onClick={()=>{dispatch({type:"DECR"})}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
      </div>
    </>
  )
}

export default UseReducer
