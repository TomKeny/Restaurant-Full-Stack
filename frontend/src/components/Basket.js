import getItems from "../api/getItems"

export const Basket = ({ basket , setBasket}) => {

    async function loadItems () {
        let response = await getItems("item", {})
        setBasket(response)
        console.log(basket)
    }
    if (basket.length == 0) {
        loadItems()
    }

    let total = 0
    
    function remove (index) {
        let updated = [...basket]
        updated.splice(index, 1)
        setBasket(updated)
    }

    return (
        <div style={{width: 300, backgroundColor: "rgb(233 234 236)", padding: 20, borderRadius: 10, position: "fixed", top: 180, right: 60, zIndex: 1}}>
            <h2 style={{fontSize: "1.3em"}}>Basket</h2>
            {basket.map(function (item, index) {
                total += item.Price
                return( <>
                    <h3 id="basketItem" style={{textAlign: "right", whiteSpace: "pre", backgroundColor: index % 2 ? "rgb(253 254 255)":"rgb(243 244 246)"}}>{item.FoodName}       £{item.Price}</h3>
                    <p style={{fontSize: "0.7em", textAlign: "right", marginTop: -15, float: "left"}} onClick={() => remove(index)}>remove</p>
                </>
                )
            })}
            <h3 style={{textAlign: "right", whiteSpace: "pre"}}>Total:  £{total}</h3>
        </div>
    )
}