import React from "react"
//Modular button, pass in custom function and text when calling in App.js

const Button = ({ func, text }) => {
    return <button onClick={func}>{text}</button>
}

export default Button