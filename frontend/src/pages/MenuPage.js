import { useState, useEffect } from 'react'
import getItems from '../api/getItems'


export const MenuPage = () => {

    const [menu, setMenu] = useState([])

    const getAndSetMenu = async () => {
        const data = await getItems('item', {})
        setMenu(data)
    }

    useEffect(() => {
        getAndSetMenu()
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
            {/* calorie info */}
            {/* <p>{`${calories[0].name} calories: ${calories[0].calories}`}</p> */}

            {menu.map(el => {
                return (
                    <div>
                        <h3>{el.FoodName}</h3>
                        <h4>£{el.Price}</h4>
                        <p><i>{el.Description}</i></p>
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
}
