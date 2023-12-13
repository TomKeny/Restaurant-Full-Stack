const API_URL = `http://localhost:4000`

const updateItem = async (DB, id, Update) => {

    const response = await fetch(`${API_URL}/menu/item/${id}`, {
        
        method: "PATCH",
        body: JSON.stringify({
            DB: DB,
            Update: Update
        }),
        headers: {
            "Content-Type": "application/json"
        }
        
    })
    const json = await response.json()
    return json
}

export default updateItem