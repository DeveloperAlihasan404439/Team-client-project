import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { useContext, useState } from "react";
import '../Login/Login.css';

import singupimage from '../../../src/assets/image/undraw_feeling_proud_qne1.svg';
import singinimage from '../../../src/assets/image/undraw_maker_launch_re_rq81.svg';
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const [isSignUpMode, setSignUpMode] = useState(false);
    const {singIn} = useContext(AuthContext)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    // create user 
    const {createUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSignUpClick = () => {
        setSignUpMode(true);
    };

    const handleSignInClick = () => {
        setSignUpMode(false);
    };

    //google signIn
    const handleGoogleSingIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user =result.user;
            console.log(user)
            Swal.fire('Login successfully')
            navigate(location?.state ? location.state :
             '/')
        })
        .catch(error =>{
            console.error(error)
        })
   
    }

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        singIn(email, password)
        .then(result =>{
            console.log(result);

            navigate(location?.state ? location.state : '/')

        })
        .catch(error =>{
            console.error(error)
            Swal.fire('email does not match')
        })
    }

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        setRegisterError('')
        setSuccess('')
        if (password.length < 6) {
            setRegisterError('password should be 6 carecter or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one upuer case caracters.')
            Swal.fire('your password should have at least one upuer case caracters.')
            return;
        }

        createUser (email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
            Swal.fire('Already exists')
        })
    }

    return (
        <div className="body max-w-screen-2xl mx-auto">
            <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div className="forms-container">
                    <div className="singin-singup">
{/* signIn from */}
                        <form onSubmit={handleLogin} className="sing-in-from">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input name="email" type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input name="password" type="password" placeholder="Password" />
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
                                <a onClick={handleGoogleSingIn} href="#" className="social-icon">
                                    <IoLogoGoogle />
                                </a>
                            </div>
                            <div className="absolute top-0 font-bold ">
                                <Link to="/"><div className="flex justify-center items-center gap-2 hover:text-[#3498db]"><FaChevronLeft /> Back to Home</div></Link>
                            </div>
                        </form>
{/* signUp from */}
                        <form onSubmit={handleRegister} className="sing-up-from">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input name="name" type="Text" placeholder="name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input name="email" type="email" placeholder="email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input name="password" type="password" placeholder="password" />
                            </div>
                            <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>
           {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                success && <p className="text-green-700">
                    {success}
                </p>
            }
                            <input type="submit" value={"Sign up"} className="btnn solid" />
                            
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <IoLogoFacebook />
                                </a>
                                <a href="#" className="social-icon">
                                    <IoLogoGithub />
                                </a>
                                <a onClick={handleGoogleSingIn} className="social-icon">
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
