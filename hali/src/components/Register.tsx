import { useEffect } from "react"

function Register() { 
    useEffect(() => {
        fetch("localhost:3000/login")
            .then((response) => response.json())
            .then((data) => console.log(data))
    })
    return <h1>reg</h1>
}

export default Register
