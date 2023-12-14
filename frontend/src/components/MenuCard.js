import React from "react"
import { useState, useEffect } from 'react'
import getItem from '../api/getItem'

//### Basic initial TEST layout, all can be changed ###

//call MenuCard from App.js, pass in food item as argument (might be best to use primary Key/ UniqueID), the component will display all needed info from database or file.  

//Styling is a must!!

export const MenuCard = ({ item, addToCart }) => {

    const [calories, setCalories] = useState([])

    const fetchCalories = async () => {

        const query = (item.ServingSize + " " + item.FoodName)
        const url = 'http://localhost:4000/nutrition/' + query
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        const data = await response.json()
        setCalories(data)
    }

    useEffect(() => {
        fetchCalories()
    }, [])

    if (!calories) return (
        <div>
            <h1>loading calories...</h1>
        </div>
    )
    return (
        <div class="m-5 p-5 text-center border border-gray-600">
            {/* IMAGE GOES HERE */}
            {/* <img src={item.image}></img> */}
            <h2 className="mb-3 text-xl font-semibold">{item.FoodName}</h2>
            <h3 className="mb-3 italic">{item.Description}</h3>
            <h3 className="mb-3">£{item.Price}</h3>

            {calories.map((el, index) => {
                return (
                    <h3 key="index">tempCaloriesDisplay: {el.calories}</h3>
                )
            })}

            <button
                onClick={() => addToCart(item)}
            >
                Add to cart
            </button>
            {/* ADD WAY TO ADD MORE THAN 1 ITEM */}
        </div>
    )
}
