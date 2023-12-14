import React from "react"

//### Basic initial TEST layout, all can be changed ###

//call MenuCard from App.js, pass in food item as argument (might be best to use primary Key/ UniqueID), the component will display all needed info from database or file.  

//Styling is a must!!

export const MenuCard = ({ item, addToCart }) => {

    return (
        <div className="m-5 p-5 text-center border border-gray-600">
            {/* IMAGE GOES HERE */}
            {/* <img src={item.image}></img> */}
            <h2 className="mb-3 text-xl font-semibold">{item.FoodName}</h2>
            <h3 className="mb-3 italic">{item.Description}</h3>
            <h3 className="mb-3">£{item.Price}</h3>
            <button className="bg-transparent hover:bg-gold text-gold font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent"
                onClick={() => addToCart(item, 1)}
            >
                Add to cart
            </button>
            {/* ADD WAY TO ADD MORE THAN 1 ITEM */}
        </div>
    )
}
