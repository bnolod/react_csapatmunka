import { useEffect } from "react"

function Messages() { 
    useEffect(() => {
        fetch("localhost:3000/login")
            .then((response) => response.json())
            .then((data) => console.log(data))
    })
    return <h1>messages</h1>

}

export default Messages
