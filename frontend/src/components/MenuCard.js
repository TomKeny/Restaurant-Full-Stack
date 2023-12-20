import React, { useState, useEffect } from "react"
import loadingImage from '../images/Loading-PNG-Photo-export.png'
import { HashLink } from "react-router-hash-link"

//### Basic initial TEST layout, all can be changed ###

export const MenuCard = ({ item, addToCart }) => {
    const [calories, setCalories] = useState([])
    const [totalCals, setTotalCals] = useState()
    const [nutritionPopup, setNutritionPopup] = useState('opacity-0')
    const [cuisinePopup, setCuisinePopup] = useState('opacity-0 z-0')

    const fetchCalories = async () => {
        let query = ""
        item.Ingredients.forEach((el, index) => {
            if (index === item.Ingredients.length - 1) {
                query += `${el.quantity} ${el.name}`
            } else {
                query += `${el.quantity} ${el.name} and `
            }
        })
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

    const getTotalCalories = () => {
        let sum = 0
        for (let i = 0; i < calories.length; i++) {
            sum += calories[i].calories
        }
        setTotalCals(Math.round(sum * 100) / 100)
    }

    const handleMouseOverNutririon = () => {
        setNutritionPopup('opacity-90')
    }
    const handleMouseOutNutrition = () => {
        setNutritionPopup('opacity-0')
    }
    const handleMouseOverCuisine = () => {
        setCuisinePopup('opacity-90 z-40')
    }
    const handleMouseOutCuisine = () => {
        setCuisinePopup('opacity-0 z-0')
    }

    useEffect(() => {
        if (calories.length === 0) {
            fetchCalories()
        }
    }, [])

    useEffect(() => {
        getTotalCalories()
    }, [calories])

    if (!calories) return (
        <div className="m-5 p-5 text-center border border-gray-600">
            <h1>loading calories...</h1>
        </div>
    )
    return (
        <div id={item._id} className="m-5 p-5 text-center border border-gray-600">
            <div className="flex items-center justify-center pb-10 h-75 w-100" >
                {item.Image ? <img src={item.Image} className="object-fit object-center border-4 border-gray-600 " alt="menu item"></img> : null}
            </div>

            {/* FoodName */}
            <div className={`absolute -translate-y-8 left-1/2 -translate-x-1/2 ${nutritionPopup} transition-opacity duration-500 delay-300`}>
                <div id="popup" className="z-10 relative bg-fancy-dark-blue text-white border-2 border-gold text-xs p-1 w-fit m-auto">see nutritional info</div>
                <div id="popupArrow" className="z-0 absolute rotate-45 bg-gold w-1.5 h-1.5 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
            </div>
            <HashLink smooth to={`/menuitem/${item._id}#bookmark`}>
                <h2 onMouseOver={handleMouseOverNutririon} onMouseOut={handleMouseOutNutrition} className="z-20 relative mb-3 text-xl font-semibold border-b w-fit m-auto border-gray-600 hover:text-gray-600">{item.FoodName}</h2>
            </HashLink>

            {/* Cuisine */}
            <div className={`absolute -translate-y-8 left-1/2 -translate-x-1/2 ${cuisinePopup} transition-opacity duration-500 delay-300`}>
                <div className="z-50 relative bg-fancy-dark-blue text-white border-2 border-gold text-xs p-1 w-fit m-auto">see {item.Cuisine} menu</div>
                <div className="z-40 absolute rotate-45 bg-gold w-1.5 h-1.5 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
            </div>
            <HashLink smooth to={`/cuisines/${item.Cuisine}`}>
                {item.Cuisine !== 'drinks' && <h2 onMouseOver={handleMouseOverCuisine} onMouseOut={handleMouseOutCuisine} className="z-60 mb-3 text-l text-gold hover:text-gray-600 border-b w-fit m-auto border-gray-600">{item.Cuisine} Cuisine</h2>}
            </HashLink>

            {/* Description */}
            <h3 className="mb-3 italic max-w-5xl m-auto">{item.Description}</h3>
            {/* PRICE */}
            <h3 className="mb-3">£{item.Price}</h3>
            {/* Calories */}
            {calories === 0 ? <img src={loadingImage} alt="menu item" className="w-10 h-10 place-self-center mr-auto ml-auto animate-spin-slow mb-3" /> : <h3 className="mb-3">{totalCals} calories</h3>}
            {/* Add to Cart */}
            <button className="bg-transparent hover:bg-gold text-gold font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent"
                onClick={() => addToCart(item, 1)}
            >
                Add to cart
            </button>
        </div>
    )
}
