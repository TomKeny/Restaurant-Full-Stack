import { MenuCard } from '../components/MenuCard';

export const MenuPage = () => {

    const dummyData = [
        { "image": '', "name": "Lasagna", "description": "Italian lasagna", "price": "£15.99" },
        { "image": '', "name": "Chicken Curry", "description": "Twist on a chicken curry", "price": "£23.99" },
        { "image": '', "name": "Pot Roast", "description": "Classic pot roast", "price": "£19.99" },
    ]

    // This is the menu page, it will have a list of all the items in our menu, each item will be clickable and go to a new menuitempage
    return (
        <div>
            <h1>Our Menu</h1>

            {/* dummy data */}
            <ul>
                {
                    dummyData.map((item, index) => (
                        <MenuCard item={item} />
                    ))
                }

            </ul>
        </div>
    )
}
