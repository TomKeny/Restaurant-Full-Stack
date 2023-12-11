const API_URL = `http://localhost:4000`

export const getItem = async (DB, id) => {

    const response = await fetch(`${API_URL}/menu/item/${id}`, {
        method: "get",
        body: JSON.stringify({
            DB: DB
        }),
        headers: {
            "Content-Type": "application/json"
        }
        
    })

    const data = await response.json()
    return data
}