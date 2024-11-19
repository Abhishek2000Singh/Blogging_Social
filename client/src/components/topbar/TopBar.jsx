import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = async () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-x-twitter fa-xl" style={{ color: "black" }}></i>
                <i className="topIcon fa-brands fa-square-facebook fa-xl" style={{ color: "#138be7" }}></i>
                <i className="topIcon fa-brands fa-linkedin fa-xl" style={{ color: "#0068f9" }}></i>
                <i className="topIcon fa-brands fa-instagram fa-xl"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img className="topImg" src={PF + user.profilePic} alt="" />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register">REGISTER</Link>
                            </li>

                        </ul>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div >
    )
}
