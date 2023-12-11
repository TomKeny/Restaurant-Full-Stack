const API_URL = `http://localhost:4000`

export const getItem = async (DB, id) => {

    const response = await fetch(`${API_URL}/menu/item/${id}/${DB}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
        
    })

    const data = await response.json()
    return data
}