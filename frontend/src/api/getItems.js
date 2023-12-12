const API_URL = `http://localhost:4000`


const getItems = async (DB, condition) => {
     let response = await fetch(`${API_URL}/menu/items/${encodeURIComponent(DB)}/${encodeURIComponent(JSON.stringify(condition))}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
     })

     let data = await response.json()
     return data
}

export default getItems