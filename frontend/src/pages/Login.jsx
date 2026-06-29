import { useState } from "react";
import "../styles/Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log(email);
        console.log(password);
    };

    return (
        <div className="login-container">
            <div className="login-card">

                <h1>AI Ticket Management System</h1>

                <p>Sign in to continue</p>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>
                    Login
                </button>

            </div>
        </div>
    );
}

export default Login;