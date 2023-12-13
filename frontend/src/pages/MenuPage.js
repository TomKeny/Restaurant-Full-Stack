import { useState, useEffect } from 'react'
import getItems from '../api/getItems'
import { MenuCard } from '../components/MenuCard'

export const MenuPage = ({ addToCart }) => {

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
            <h1 className="text-4xl text-center m-5">Menu</h1>
            <br></br>
            {/* calorie info */}
            {/* <p>{`${calories[0].name} calories: ${calories[0].calories}`}</p> */}

            {/* // pass down image and calorie info to card component */}

            {menu.map(item => {
                return (
                    <MenuCard item={item} addToCart={addToCart} />
                )
            })}
        </div>
    )
}
