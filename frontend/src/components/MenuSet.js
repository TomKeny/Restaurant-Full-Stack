import { MenuCard } from "./MenuCard"

export function MenuSet ({menu, addToCart}) {
    

    <>
        {menu.map((item, index) => {
            return (
                <MenuCard
                    item={item}
                    addToCart={addToCart}
                    key={item.FoodName}
                />
            )
        })}
    </>
}