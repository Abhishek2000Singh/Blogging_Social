
import "./home.css"
import { Posts, Sidebar, Header } from '../../components/indexComp'
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    // console.log(location);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            console.log(res.data);
            setPosts(res.data);
        }
        fetchPosts();
    }, [search])
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
