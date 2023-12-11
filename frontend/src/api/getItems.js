const API_URL = `http://localhost:4000`


export const getItems = async (DB, condition) => {
     let response = await fetch(`${API_URL}/menu/items?DB="${encodeURIComponent(DB)}"&condition=${encodeURIComponent(condition)}`, {
        method: "GET",
        // body: JSON.stringify({
        //     DB: DB,
        //     condition: condition
        // }),
        headers: {
            "Content-Type": "application/json"
        }
     })

     let data = await response.json()
     return data
}