import { useEffect } from "react"

function Login() { 
    useEffect(() => {
        fetch("localhost:3000/login")
            .then((response) => response.json())
            .then((data) => console.log(data))
    })
    return <h1>login</h1>

}

export default Login
