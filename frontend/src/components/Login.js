import { React, useState } from "react";
import addItem from "../api/addItem";
import getItems from "../api/getItems";

const Login = ({ setUserID }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [toggle, setToggle] = useState(true)

    async function loginSubmitHandler(e) {
        e.preventDefault()

        let response = await getItems("user", { Username: username, Password: password })
        setUsername("")
        setPassword("")
        if (response.length > 0) {
            setUserID({ UserID: response[0]._id, Username: response[0].Username })
        }
    }

    async function registerSubmitHandler(e) {
        e.preventDefault()
        let response = await addItem("user", { Username: username, Password: password })
        console.log(response)
        let newResponse = await getItems("user", { Username: username, Password: password })

        setUsername("")
        setPassword("")
        setUserID({ UserID: newResponse[0]._id, Username: newResponse[0].Username })
    }

    function Toggle() {
        toggle ? setToggle(false) : setToggle(true)
    }

    return (
        <div id="LogginBlock" style={{ position: "fixed", right: 10, top: 10, padding: "5px", borderRadius: "10px", backgroundColor: "rgb(21,31,45)", color: "lightGray" }}>
            <form onSubmit={toggle ? loginSubmitHandler : registerSubmitHandler}>
                <label for="Username" >Username</label>
                <input id="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                <br></br>
                <label for="Password" style={{ display: "inline-block", width: 80, marginTop: 5 }}>Password</label>
                <input id="Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: "lightgray", color: "black" }}></input>
                <br></br>
                <button type="submit" style={{ marginTop: 5 }}>{toggle ? "Login" : "Register"}</button>
            </form>
            <p onClick={Toggle}>{toggle ? "Register Account" : "Login"}</p>
        </div>
    )
}

export default Login