import { useState, useEffect } from "react"
import loadingImage from '../images/Loading-PNG-Photo-export.png'
import { HashLink } from "react-router-hash-link"
import { ItemCalories } from "./ItemCalories"

export const ItemCard = ({ item, addToCart }) => {

    const [calories, setCalories] = useState([])
    const [totalNutrition, setTotalNutrition] = useState('')
    const [calorieDisplay, setCalorieDisplay] = useState('')

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

    const getTotalNutrition = () => {
        let cals = 0
        let serving = 0
        let fat = 0
        let saturatedFat = 0
        let protein = 0
        let sodium = 0
        let potassium = 0
        let cholesterol = 0
        let carbs = 0
        let fiber = 0
        let sugar = 0
        for (let i = 0; i < calories.length; i++) {
            cals += calories[i].calories
            serving += calories[i].serving_size_g
            fat += calories[i].fat_total_g
            saturatedFat += calories[i].fat_saturated_g
            protein += calories[i].protein_g
            sodium += calories[i].sodium_mg
            potassium += calories[i].potassium_mg
            cholesterol += calories[i].cholesterol_mg
            carbs += calories[i].carbohydrates_total_g
            fiber += calories[i].fiber_g
            sugar += calories[i].sugar_g
        }
        cals = Math.round(cals * 100) / 100      
        serving = Math.round(serving * 100) / 100      
        fat = Math.round(fat * 100) / 100      
        saturatedFat = Math.round(saturatedFat * 100) / 100      
        protein = Math.round(protein * 100) / 100      
        sodium = Math.round(sodium * 100) / 100      
        potassium = Math.round(potassium * 100) / 100      
        cholesterol = Math.round(cholesterol * 100) / 100      
        carbs = Math.round(carbs * 100) / 100      
        fiber = Math.round(fiber * 100) / 100      
        sugar = Math.round(sugar * 100) / 100

        return ({
            name: "All Ingredients",
            calories: cals,
            serving_size_g: serving,
            fat_total_g: fat,
            fat_saturated_g: saturatedFat,
            protein_g: protein,
            sodium_mg: sodium,
            potassium_mg: potassium,
            cholesterol_mg: cholesterol,
            carbohydrates_total_g: carbs,
            fiber_g: fiber,
            sugar_g: sugar
        })
    }

    useEffect(() => {
        fetchCalories()
    }, [item])
    useEffect(() => {
        const totalNutrition = getTotalNutrition()
        setTotalNutrition(totalNutrition)
        setCalorieDisplay(totalNutrition)
    }, [calories])
    return (
        <div className="m-5 p-5 text-center border border-gray-600">

            <h2 id="bookmark" className="my-3 text-xl font-semibold">{item.FoodName}</h2>
            <h3 className="mb-3 italic">{item.Description}</h3>
            <h3 className="mb-3">£{item.Price}</h3>
            <button className="bg-transparent hover:bg-gold text-gold font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent"
                onClick={() => addToCart(item, 1)}
            >
                Add to cart
            </button>
            {/* horizontal line */}
            <div className="my-10 border-b w-2/3 m-auto"></div>
<<<<<<< HEAD
            {calories == 0 ? <img src={loadingImage} className="w-10 h-10 place-self-center mr-auto ml-auto animate-spin-slow mb-3" /> : <h2 className="mb-3 text-xl font-semibold">Calorie Information</h2>}
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
=======
            {calories == 0
                ? <img src={loadingImage} className="w-10 h-10 place-self-center mr-auto ml-auto animate-spin-slow mb-3" />
                : <h2 className="mb-3 text-xl font-semibold">Calorie Information</h2>}

            <div className="flex justify-center">
                <button onClick={() => setCalorieDisplay(totalNutrition)} id="allIngredients" className="w-fit p-2 border-2 border-gold m-1">All Ingredients</button>
                {calories.map(el => {
                    return (
                        <button onClick={() => setCalorieDisplay(el)} id={el.name} className="w-fit p-2 border-2 border-gold m-1">{el.name}</button>
                    )

                })}
            </div>
            <ItemCalories 
                ingredient={calorieDisplay}
            />
>>>>>>> main
            <HashLink smooth to={`/menu#${item._id}`}>
                <h2 className="text-1xl text-center border-b w-fit m-auto border-gray-600 my-5 hover:text-gray-600">Back to Full Menu</h2>
            </HashLink>
        </div>
    )
}