import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { useState } from "react";
import '../Login/Login.css';

import singupimage from '../../../src/assets/image/undraw_feeling_proud_qne1.svg';
import singinimage from '../../../src/assets/image/undraw_maker_launch_re_rq81.svg';
import { Link } from "react-router-dom";

const Login = () => {
    const [isSignUpMode, setSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setSignUpMode(true);
    };

    const handleSignInClick = () => {
        setSignUpMode(false);
    };

    return (
        <div className="body max-w-screen-2xl mx-auto">
            <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div className="forms-container">
                    <div className="singin-singup">
{/* signIn from */}
                        <form action="" className="sing-in-from">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value={"login"} className="btnn solid" />

                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <IoLogoFacebook />
                                </a>
                                <a href="#" className="social-icon">
                                    <IoLogoGithub />
                                </a>
                                <a href="#" className="social-icon">
                                    <IoLogoGoogle />
                                </a>
                            </div>
                            <div className="absolute top-0 font-bold text-blue-600">
                                <Link to="/">Back to Home</Link>
                            </div>
                        </form>
{/* signUp from */}
                        <form action="" className="sing-up-from">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value={"Sign up"} className="btnn solid" />

                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <IoLogoFacebook />
                                </a>
                                <a href="#" className="social-icon">
                                    <IoLogoGithub />
                                </a>
                                <a href="#" className="social-icon">
                                    <IoLogoGoogle />
                                </a>
                            </div>
                            
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here?</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni </p>
                            <button className="btnn transparent" onClick={handleSignUpClick} id="sing-up-btn">
                                Sign up
                            </button>
                        </div>

                        <img src={singupimage} className="image" alt="" />
                    </div>

                    <div className="panel right-panel">
                        <div className="content -mt-8">
                            <h3>One of us ?</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni </p>
                            <button className="btnn transparent" onClick={handleSignInClick} id="sing-in-btn">
                                Sign in
                            </button>
                        </div>

                        <img src={singinimage} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
