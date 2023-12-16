import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import getItem from "../api/getItem"
import { ItemCard } from "../components/ItemCard"
import { Link } from "react-router-dom"

export const MenuItemPage = ({ addToCart }) => {

    const { id } = useParams()
    const [menuItem, setMenuItem] = useState('')

    useEffect(() => {
        const fetchItem = async () => {
            let data = await getItem('item', id)
            setMenuItem(data)
        }
        fetchItem()
    }, [])
    return (
        <div>
            <h1 className="text-4xl text-center m-8">Nutritional Information</h1>
            {/* <Link to={'/menu'}>
                <h2 className="text-1xl text-center m-5 border-b w-fit m-auto border-gray-600 my-5 hover:text-gray-600">Back to Full Menu</h2>
            </Link> */}
            <ItemCard
                item={menuItem}
                addToCart={addToCart}
            />
        </div>
    )
}
