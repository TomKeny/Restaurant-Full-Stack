const API_URL = `http://localhost:4000`

const addItem = async (DB, obj) => {
    const response = await fetch(`${API_URL}/menu/item`, {
        method: 'POST',

        body: JSON.stringify({ 
            DB: DB,
            Object: obj
        }),

        headers: {
            "Content-Type": "application/json"
        }
    })
    const json = await response.json()
    return json
}

export default addItem
