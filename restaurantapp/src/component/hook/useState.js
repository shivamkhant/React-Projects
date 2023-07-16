import React, { useState } from 'react'
import "./style.css"

const UseState = () => {
    const [myData, setmyData]=useState(0)

  return (
    <>
      <div className="center_div">
        <p>{myData}</p>
        <div className="button2"onClick={()=>{setmyData(myData+1)}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2"onClick={()=> {myData>0?setmyData(myData-1):setmyData(0)}}>
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

export default UseState
