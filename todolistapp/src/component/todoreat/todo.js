import React, { useEffect, useState } from 'react'
import "./style.css"

// get deta to loxalstoreg
const getlocalData = ()=>{
  const list = localStorage.getItem("todolistREACT");
  if(list){
    return JSON.parse(list)
  }
  else{
    return [];
  }
}


const Todo = () => {
  const [inputdata, setInputdata]= useState("")
  const [items,setItems]=useState(getlocalData())
  const [isEditItem, setIsEditItem]= useState("")
  const [toggalButton, setToggalButton]= useState(false)

  // add the item function 
const addItem =()=>{
  if(!inputdata){
    alert("plz fill the data")
  }
  else if(inputdata && isEditItem){
    setItems(
      items.map((curElem)=>{
        if(curElem.id===isEditItem){
          return {...curElem,name:inputdata}
        }
        return curElem
      })
    )
    setInputdata("")
  setIsEditItem(null)
  setToggalButton(false)
  }
  else{
    const myNewInputData ={
      id:new Date().getTime().toString(),
      name:inputdata
    }
    setItems([...items, myNewInputData])
    setInputdata("")
  }
}
// edit  the item 
const editItem=(index)=>{
  const item_todo_edited=items.find((curElem)=>{
return curElem.id === index

  })
  
  setInputdata(item_todo_edited.name)
  setIsEditItem(index)
  setToggalButton(true)
}

// how to delete item 
const deleteItem= (index)=>{
  const updetItems = items.filter((curElem)=>{
    return curElem.id !== index
  })
  setItems(updetItems)
}
// hoe to all delete item 
const allDelet =()=>{
  setItems([])
}
// set add to localstoreg 
useEffect(()=>{
  localStorage.setItem("todolistREACT", JSON.stringify(items))
},[items])


  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>add your list Hear ✌</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder='✍ Add Item'
            className='form-control' 
            value={inputdata}
            onChange={(event)=>{setInputdata(event.target.value)}}
            />
            {toggalButton ? <i className=" far fa-edit add-btn" onClick={addItem}></i>:<i className=" fa fa-solid fa-plus add-btn" onClick={addItem}></i>}
        
          </div>
          {/* SHOW OUR TTEM */}

<div className="showItems">

{items.map((curElem, index) =>{
return (
<div className="eachItem" key={index}>
    <h3>{curElem.name}</h3>
    <div className="todo-btn">
    <i className=" far fa-edit  add-btn"onClick={()=>editItem(curElem.id)}></i>  
       <i className=" far fa-trash-alt  add-btn" onClick={()=>deleteItem(curElem.id)}></i>
    </div>
  </div>
)
})}
  
</div>


          {/* REMOVE ALL BUTTON  */}
          <div className="showItems">
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={allDelet}>
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
