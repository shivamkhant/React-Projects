import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from './Navbar'

const uniqueData = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category
        })),
    "All"
    ]
console.log(uniqueData)
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueData)
    const filterItem = (category) => {
        if(category==="All"){
            setMenuData(Menu)
            return
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category
        })
        setMenuData(updatedList)
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            < MenuCard menuDeta={menuData} />
        </>
    )
}

export default Resturant
