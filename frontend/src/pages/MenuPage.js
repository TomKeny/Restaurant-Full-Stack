import { useState, useEffect } from 'react'
import getItems from '../api/getItems'


export const MenuPage = () => {

    const [menu, setMenu] = useState([])
    const [calories, setCalories] = useState([])

    const fetchCalories = async (query) => {
        const url = 'http://localhost:4000/nutrition/' + query
        console.log(url)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify(query)
        })
        const data = await response.json()
        // console.log(`data: ${data}`)
        // // update calories
        const copy = [...calories]
        copy.push(data)
        setCalories(copy)
    }

    const getAndSetMenu = async () => {
        const data = await getItems('item', {})
        await setMenu(data)
    }
    const getCalorieInfo = () => {
        // run a calorie fetch for each item
        menu.forEach((el, index) => {
            const query = (el.ServingSize + " " + el.FoodName).toString()
            console.log(query)
            fetchCalories(query)
        })
    }

    useEffect(() => {  
        getAndSetMenu()
        getCalorieInfo()
    }, [])

    if (!menu) return (
        <div>
            <h1>loading menu...</h1>
        </div>
    )
    return (
        <div>
            <h1>Menu Page</h1>
            <br></br>

            {menu.map((el, index) => {
                return (
                    <div>
                        <h3><strong>{el.FoodName}</strong></h3>
                        <h4>£{el.Price}</h4>
                        <p><i>{el.Description}</i></p>
                        {/* <p>{`${calories[index].calories} calories`}</p> */}
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
}

