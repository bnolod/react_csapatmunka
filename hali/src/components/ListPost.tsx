import { useEffect, useState } from "react";
import { Post } from "../interfaces/Post";


export const ListPost = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("/posts")
        .then((response) => {
            if (!response.ok) {
            throw new Error("Hiba történt az adatok lekérésekor");
            }
            return response.json();
        })
        .then((data) => setPosts(data))
        .catch((error) => console.error("Hiba:", error));
    }, []);

    return(
        <>
        <div>
            <h1>Bejegyzések</h1>
            <ul>
                {posts.map((post) => (
                <li key={post._id}>{post.title}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ListPost;