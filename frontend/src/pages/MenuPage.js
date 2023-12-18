import { useState, useEffect } from 'react'
import getItems from '../api/getItems'
import { MenuCard } from '../components/MenuCard'
import loadingImage from '../images/Loading-PNG-Photo-export.png'
import { MenuSet } from '../components/MenuSet'

export const MenuPage = ({ addToCart }) => {

    const [menu, setMenu] = useState([])
    const [menuSet, setMenuSet] = useState("starters")

    const getAndSetMenu = async () => {
        const data = await getItems('item', {})
        setMenu(data)
    }

    useEffect(() => {
        getAndSetMenu()
    }, [])

    function changeMenu (menuset) {
        setMenuSet(menuset)
    }

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
                : <>
                <div className='flex w-1/2 h-20 ml-auto mr-auto place-content-evenly'>
                    <h1 onClick={() => changeMenu("starters")} className='flex text-2xl hover:text-gray-200 hover:bg-gray-800 h-max p-2 rounded'>Starters</h1>
                    <h1 onClick={() => changeMenu("mains")} className='flex text-2xl hover:text-gray-200 hover:bg-gray-800 h-max p-2 rounded'>Mains</h1>
                    <h1 onClick={() => changeMenu("desserts")} className='flex text-2xl hover:text-gray-200 hover:bg-gray-800 h-max p-2 rounded'>Desserts</h1>
                    <h1 onClick={() => changeMenu("drinks")} className='flex text-2xl hover:text-gray-200 hover:bg-gray-800 h-max p-2 rounded'>Drinks</h1>
                </div>
                <MenuSet menu={menu} addToCart={addToCart} menuSet={menuSet} />
                </>
                }
        </div>
    )
}

