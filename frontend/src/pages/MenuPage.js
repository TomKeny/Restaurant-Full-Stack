import { useState, useEffect } from 'react'
import getItems from '../api/getItems'
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

    function changeMenu(menuset) {
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

            {menu.length === 0
                ? <div>
                    <img src={loadingImage} alt="food" className="w-10 h-10 place-self-center mr-auto ml-auto animate-spin-slow mb-3" />
                    <p className="m-auto mt-1 text-center">Populating Menu. Refresh the page.</p>
                </div>
                : <>
                    <div className='flex w-1/2 h-20 ml-auto mr-auto place-content-evenly'>
                        <h1 onClick={() => changeMenu("starters")} className="cursor-pointer underline underline-offset-4 decoration-white hover:-translate-y-1 scale-5 duration-200 hover:text-gold">Starters</h1>
                        <h1 onClick={() => changeMenu("mains")} className="cursor-pointer underline underline-offset-4 decoration-white hover:-translate-y-1 scale-5 duration-200 hover:text-gold">Mains</h1>
                        <h1 onClick={() => changeMenu("desserts")} className="cursor-pointer underline underline-offset-4 decoration-white hover:-translate-y-1 scale-5 duration-200 hover:text-gold">Desserts</h1>
                        <h1 onClick={() => changeMenu("drinks")} className="cursor-pointer underline underline-offset-4 decoration-white hover:-translate-y-1 scale-5 duration-200 hover:text-gold">Drinks</h1>
                    </div>
                    <MenuSet menu={menu} addToCart={addToCart} menuSet={menuSet} />
                </>
            }
        </div>
    )
}