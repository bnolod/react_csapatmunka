import { useEffect } from "react"

function Profile() { 
    useEffect(() => {
        fetch("localhost:3000/login")
            .then((response) => response.json())
            .then((data) => console.log(data))
    })
    return <h1>profile</h1>

}

export default Profile