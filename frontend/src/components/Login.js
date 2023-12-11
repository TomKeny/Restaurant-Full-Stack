import {React,useState}  from "react";
import addItem from "../api/addItem";

function Login() {

    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState ("")

    async function submitHandler(e) {
        e.preventDefault()
        let response = await addItem("user", {
            Username: username,
            Password: password
        })
        setUsername("")
        setPassword("")
        console.log(response)
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