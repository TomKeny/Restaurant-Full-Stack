import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import getItems from '../api/getItems'
import { MenuCard } from '../components/MenuCard'
import loadingImage from '../images/Loading-PNG-Photo-export.png'
import { Link } from 'react-router-dom'

export const Cuisines = ({ addToCart }) => {

    const { cuisine } = useParams()
    const menuArr = ['starters', 'mains', 'desserts']
    const [menu, setMenu] = useState([])

    const getAndSetMenu = async () => {
        const data = await getItems('item', {})
        setMenu(data)
    }

    useEffect(() => {
        getAndSetMenu()
    }, [])

    if (menu.length == 0) return (
        <div>
            <img src={loadingImage} className="w-10 h-10 place-self-center mr-auto ml-auto animate-spin-slow mb-3" />
            <p className="m-auto mt-1 text-center">Populating Menu. Refresh the page.</p>
        </div>
    )
    return (
        <div>
            <h1 className="text-4xl text-center m-8"><span className="text-gold">{cuisine}</span> Menu</h1>

            {menuArr.map(menuSet => {
                return (
                    menu.map(item => {
                        return (
                            item.MenuSet == menuSet && item.Cuisine == cuisine &&
                            <MenuCard
                                item={item}
                                addToCart={addToCart}
                                key={item.FoodName}
                            />
                        )
                    })
                )
            }

            )}
            <Link to={'/menu'}>
                <h2 className="text-1xl text-center m-5 border-b w-fit m-auto border-gray-600 my-5 hover:text-gray-600">Back to Full Menu</h2>
            </Link>
        </div>
    )
}
