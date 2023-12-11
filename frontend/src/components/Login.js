import {React,useState}  from "react";
import { getItems } from "../api/getItems";

function Login() {

    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState ("")
    const [userID, setUserID] = useState("")

    async function submitHandler(e) {
        e.preventDefault()
        let response = await getItems("user", JSON.stringify({Username:username,Password:password}))
        setUsername("")
        setPassword("")
        setUserID(response[0]._id)
    }



    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">submit</button>
        </form>
    )
}

export default Login