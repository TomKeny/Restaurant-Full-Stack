import { useState, useEffect } from 'react'
import getItems from '../api/getItems'
import { MenuCard } from '../components/MenuCard'
import loadingImage from '../images/Loading-PNG-Photo-export.png'

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
            <h1 className="text-4xl text-center m-8">Menu</h1>

            {/* // pass down image and calorie info to card component */}

            {menu.length == 0
                ?   <div>
                        <img src={loadingImage} className="w-10 h-10 place-self-center mr-auto ml-auto animate-spin-slow mb-3" />
                        <p className="m-auto mt-1 text-center">Populating Menu. Refresh the page.</p>
                    </div>
                : menu.map((item, index) => {
                        return (
                            <MenuCard
                                item={item}
                                addToCart={addToCart}
                                key={item.FoodName}
                            />
                        )
                    })
                }
        </div>
    )
}

