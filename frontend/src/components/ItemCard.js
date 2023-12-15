import { useState, useEffect } from "react"

export const ItemCard = ({ item }) => {

    const [calories, setCalories] = useState([])

    // This has already been done on MenuCard.js but I couldn't get passing it as a param to work and couldn't figure how else to pass it to this route so I'm just fetching it again
    const fetchCalories = async () => {
        let query = ""
        item.Ingredients?.map((el, index) => {
            if (index == item.Ingredients.length - 1) {
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

    useEffect(() => {
        fetchCalories()
    }, [item])
    return (
        <div className="m-5 p-5 text-center border border-gray-600">
            <h2 className="mb-3 text-xl font-semibold">{item.FoodName}</h2>
            <h3 className="mb-3 italic">{item.Description}</h3>
            <h3 className="mb-3">£{item.Price}</h3>
            <br></br>
            <h2 className="mb-3 text-xl font-semibold">Calorie Information</h2>
            {calories.map(el => {
                return (
                    <div>
                        <h3 className="mb-3">Ingredient: {el.name}</h3>
                        <p>calories: {el.calories}</p>
                        <p>quantity: {el.serving_size_g}g</p>
                        <p>total fat: {el.fat_total_g}g</p>
                        <p>saturated fat: {el.fat_saturated_g}g</p>
                        <p>protein: {el.protein_g}g</p>
                        <p>sodium: {el.sodium_mg}mg</p>
                        <p>potassium: {el.potassium_mg}mg</p>
                        <p>cholesterol: {el.cholesterol_mg}mg</p>
                        <p>total carbohydrates: {el.carbohydrates_total_g}g</p>
                        <p>fiber: {el.fiber_g}g</p>
                        <p className="mb-3">sugar: {el.sugar_g}g</p>
                    </div>
                )
            })}
        </div>
    )
}