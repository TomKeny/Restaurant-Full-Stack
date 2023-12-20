import { MenuCard } from "./MenuCard"

export function MenuSet({ menu, addToCart, menuSet }) {
    const filteredMenu = menu.filter((item) => { return item.MenuSet === menuSet })

    let string = menuSet.split("")
    string[0] = string[0].toUpperCase()
    menuSet = string.join("")

    return (
        <>
            <h1 className="w-max text-3xl ml-auto mr-auto">{menuSet}</h1>
            {filteredMenu.map((item) => {
                return (
                    <MenuCard
                        item={item}
                        addToCart={addToCart}
                        key={item.FoodName}
                    />
                )
            })}
        </>
    )
}