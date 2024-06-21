
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "johnson" && password === "johnson") {
            navigate("/dashboard/home");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="login-container">
            <h2>Login Component</h2>
            <div>
                <label>
                    Username:
                    <input className="login-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input className="login-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <br />
            <button onClick={handleLogin} className="login-button">Login</button>
        </div>
    );
}