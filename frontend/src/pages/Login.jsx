import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "../styles/Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {

        if (!email || !password) {

            alert("Please enter email and password.");

            return;

        }

        try {

            const user = await login(email, password);

            localStorage.setItem("user", JSON.stringify(user));

            alert("Login successful.");

            navigate("/dashboard");

        }

        catch (error) {

            console.error(error);

            alert("Invalid email or password.");

        }

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