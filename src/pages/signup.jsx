import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import leftImage from "../assets/image/munyeshuri-pic.png"

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("https://mybland-backend-c3uv.onrender.com/signup", formData);
            await new Promise(resolve => setTimeout(resolve, 2000));
            toast.success('Sign up successful!');
            setFormData({
              name: '',
              email: '',
              password: '',
              confirm_password: ''
            });
        } catch (error) {
            toast.error('Error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="main-container">
            <div className="section-container">
                <div className="section-side section-side-left">
                <img src={leftImage} alt="" />
                </div>
                <div className="section-side section-side-right">
                    <h3 className="text-yellow text-center">MMAP</h3>
                    <h2 className="text-center">Hi, Create account <br />or <Link to="/login">Login</Link></h2>
                    <form className="signupform-container" id="signupForm" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <p className="normal-text">Name</p>
                            <div className="input-content">
                                <span className="material-symbols-outlined input-left-icon">
                                    person
                                </span>
                                <input type="text" placeholder="Enter name" name="name" id="name" value={formData.name} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="input-container">
                            <p className="normal-text">Email</p>
                            <div className="input-content">
                                <span className="material-symbols-outlined input-left-icon">
                                    mail
                                </span>
                                <input type="email" placeholder="Enter email" name="email" id="email" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="input-container">
                            <p className="normal-text">Password</p>
                            <div className="input-content">
                                <span className="material-symbols-outlined input-left-icon">
                                    lock
                                </span>
                                <input type={showPassword ? "text" : "password"} placeholder="Enter password" name="password" id="password" value={formData.password} onChange={handleChange} />
                                <span className="material-symbols-outlined input-right-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? "visibility" : "visibility_off"}
                                </span>
                            </div>
                        </div>
                        <div className="input-container">
                            <p className="normal-text">Confirm Password</p>
                            <div className="input-content">
                                <span className="material-symbols-outlined input-left-icon">
                                    lock
                                </span>
                                <input type={showConfirmPassword ? "text" : "password"} placeholder="Enter password" name="confirm_password" id="confirm_password" value={formData.confirm_password} onChange={handleChange} />
                                <span className="material-symbols-outlined input-right-icon" onClick={toggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? "visibility" : "visibility_off"}
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="submit-button" disabled={loading}>
                            {loading ? 'Loading...' : 'Sign Up'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
