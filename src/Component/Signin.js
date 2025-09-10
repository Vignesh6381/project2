import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const API = "https://687494cadd06792b9c9459cd.mockapi.io/register/web-login";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");



        // Step 1: Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            // Step 2: Fetch API data
            const res = await axios.get(API);
            const user = res.data.find(
                (u) => u.email === email && u.passsword === password
            );
            if (user) {
                localStorage.setItem("isLoggedIn", "true"); // Save login status
                navigate("/home");
            }


            // Step 3: Navigate if found
            if (user) {
                navigate("/home");
            } else {
                setError("Invalid email or password");
            }
        } catch (err) {
            console.error(err);
            setError("Error connecting to server");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: '350px' }}>
                <h2 className="text-center mb-4">Sign In</h2>

                {error && <div className="alert alert-danger">{error}</div>}

                <form className="d-flex flex-column gap-3 text-start" onSubmit={handleSubmit}>
                    <div>
                        <label className="form-label">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="form-label">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {showConfirm && (
                        <div>
                            <label className="form-label">Confirm Password</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Confirm password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    )}

                    <button
                        type={showConfirm ? "submit" : "button"}
                        className="btn btn-primary w-100"
                        onClick={() => {
                            if (!showConfirm) {
                                setShowConfirm(true); // Reveal confirm password field
                            }
                        }}
                    >
                        {showConfirm ? "Submit" : "Confirm Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
