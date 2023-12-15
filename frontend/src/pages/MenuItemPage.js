import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import getItem from "../api/getItem"
import { ItemCard } from "../components/ItemCard"

export const MenuItemPage = () => {

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
            <ItemCard
                item={menuItem}
            />
        </div>
    )
}
