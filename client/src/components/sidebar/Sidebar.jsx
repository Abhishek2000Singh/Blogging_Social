
import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            const res = await axios.get("/categories")
            // console.log(res);
            setCats(res.data)
        }
        getCat();
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/29294054/pexels-photo-29294054/free-photo-of-man-taking-photo-at-red-phone-booth-with-wifi-sign.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quod officia facilis sint eaque porro excepturi aliquid earum atque. Eveniet.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`}>
                            <li key={c.id} className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
            </div>
            <div className="sidebarSocial">
                <i className="topIcon fa-brands fa-square-x-twitter fa-xl" style={{ color: "black" }}></i>
                <i className="topIcon fa-brands fa-square-facebook fa-xl" style={{ color: "#138be7" }}></i>
                <i className="topIcon fa-brands fa-linkedin fa-xl" style={{ color: "#0068f9" }}></i>
                <i className="topIcon fa-brands fa-instagram fa-xl"></i>

            </div>
        </div>
    )
}
