import { MenuCard } from '../components/MenuCard';

export const MenuPage = () => {

    // This is the menu page, it will have a list of all the items in our menu, each item will be clickable and go to a new menuitempage
    return (
        <div className="bg-fancy-dark-blue">
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
