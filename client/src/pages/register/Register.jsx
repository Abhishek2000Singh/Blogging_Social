import { useState } from "react"
import "./register.css"
import { Link } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError(false)
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });

            console.log(res);
            res.data && navigate("/login");

        } catch (err) {
            console.error(err);
            setError(true)
        }
    };

    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label className="registerLabel">Username</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label className="registerLabel">Email</label>
                <input
                    className="registerInput"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label className="registerLabel">Password</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="registerBtn" type="submit">register</button>
            </form>
            <button className="registerLoginBtn">
                <Link to="/login" className="loginRegisterLink">Login</Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
        </div>
    )
}
