import React from "react"

//### Basic initial TEST layout, all can be changed ###

//call MenuCard from App.js, pass in food item as argument (might be best to use primary Key/ UniqueID), the component will display all needed info from database or file.  

//Styling is a must!!

const MenuCard = ({item}) => {

    return(
        <>
            <img src={item.image}></img>
            <h2>{item.name}{item.IDnumber}</h2>
            <h3>{item.description}</h3>
            <h3>{item.price}</h3>
        </>
    )
}

export default MenuCard