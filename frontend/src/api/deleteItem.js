const API_URL = `http://localhost:4000`

export const deleteItem = async (DB, id) => {
    const response = await fetch(`${API_URL}/todos/item/${id}`, {
        method: 'delete',
        body: JSON.stringify({
            DB: DB
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = response.json()
    return data
}