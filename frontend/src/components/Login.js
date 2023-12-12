import {React,useState}  from "react";
import getItems from "../api/getItems";
import addItem from "../api/addItem";

function Login({ setUserID }) {

    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState ("")
    const [toggle, setToggle] = useState(true)

    async function loginSubmitHandler(e) {
        e.preventDefault()
        let response = await getItems("user", JSON.stringify({Username:username,Password:password}))
        setUsername("")
        setPassword("")
        if (response.length > 0) {
            setUserID({UserID: response[0]._id, Username: response[0].Username})
        }
    }

    async function registerSubmitHandler(e) {
        e.preventDefault()
        let response = await addItem("user", {Username: username, Password: password})
        setUsername("")
        setPassword("")
        console.log(response)
    }

    function Toggle () {
        (toggle ? setToggle(false): setToggle(true))
    }


    return (
        <div id="LogginBlock" style={{position: "fixed", right: 10, top: 10, padding: "20px", borderRadius: "10px", backgroundColor: "lightGrey"}}>
            <h2>{toggle ? "Login":"Register"}</h2>
            <form onSubmit={toggle ? loginSubmitHandler: registerSubmitHandler}>
                <label for="Username" style={{display: "inline-block", width: 80}}>Username</label>
                <input id="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <br></br>
                <label for="Password" style={{display: "inline-block", width: 80}}>Password</label>
                <input id="Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <button type="submit">{toggle ? "Login":"Register"}</button>
            </form>
            <p onClick={Toggle}>{toggle ? "Register":"Login"}</p>
        </div>
    )
}

export default Login