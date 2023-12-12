import { useState, useEffect } from 'react'


export const MenuPage = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        setMenu()
    }, [])

    if (!menu) return (
        <div>
            <h1>loading menu...</h1>
        </div>
    )
    return (
        <div>
            <h1>Menu Page</h1>
            {/* calorie info */}
            {/* <p>{`${calories[0].name} calories: ${calories[0].calories}`}</p> */}

            {/* dummy data */}
            <ul>
                <li>Lasagne</li>

                <li>Curry</li>

                <li>Chicken</li>

            </ul>
        </div>
    )
}

