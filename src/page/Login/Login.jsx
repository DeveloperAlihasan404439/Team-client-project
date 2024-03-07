import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useState } from "react";
import "../Login/Login.css";

import singupimage from "../../../src/assets/image/undraw_feeling_proud_qne1.svg";
import singinimage from "../../../src/assets/image/undraw_maker_launch_re_rq81.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../shared/Auth/useAuth";
import app from "../../shared/Auth/Firebase";

import { FaTentArrowTurnLeft } from "react-icons/fa6";

//  images hostion
const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;
//  images hostion
const Login = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const { singIn, createUser,githubUser } = useAuth();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const axiosPublick = useAxios();

  // create user
  const [success, setSuccess] = useState("");
  const [imgLoader, setImgLoader] = useState(false);
  const [open, setOpen] = useState(true);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  //google user signIn
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {

        if (result.user) {
          const email = result.user?.email;
          const photoURL = result.user?.photoURL;
          const name = result.user?.displayName;
          const role = "user";
          const dataToInsert = { name, photoURL, email,role };
          // store user to the database and checking if user exist
          axiosPublick.post("/users", dataToInsert).then((res) => {

            if (res.data.insertedId) {
              navigate(location?.state ? location?.state : "/");
              return Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfull User Updated",
                showConfirmButton: false,

                background: "#144248",
                color: "#EEEEEE",
                timer: 2000,
              });
            }
          });
          navigate(location?.state ? location?.state : "/");
          return Swal.fire({

            position: "center",
            icon: "success",
            title: "Successfull Google Sign In",
            showConfirmButton: false,
            background: "#144248",

            color: "#EEEEEE",
            timer: 1500,
          });
        }

      })
      .catch((error) => {
        console.error(error);
      });
  };
  //github user signIn
  const handleGithubSingIn = () => {
    githubUser(githubProvider)
      .then((result) => {
        if (result.user) {
          console.log(result.user)
          const email = result.user?.email;
          const photoURL = result.user?.photoURL;
          const name = result.user?.displayName;
          const role = "user";
          const dataToInsert = { name, photoURL, email,role };
          // store user to the database and checking if user exist
          axiosPublick.post("/users", dataToInsert).then((res) => {

            if (res.data.insertedId) {
              navigate(location?.state ? location?.state : "/");
              return Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfull User Updated",
                showConfirmButton: false,

                background: "#144248",
                color: "#EEEEEE",
                timer: 2000,
              });
            }
          });
          navigate(location?.state ? location?.state : "/");
          return Swal.fire({

            position: "center",
            icon: "success",
            title: "Successfull Google Sign In",
            showConfirmButton: false,
            background: "#144248",

            color: "#EEEEEE",
            timer: 1500,
          });
        }

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    singIn(email, password)
      .then((result) => {
        if (result.user) {
          navigate(location?.state ? location?.state : "/"); 
         return Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull User Sign In",
            showConfirmButton: false,
            background: "#144248",
            color: "#ffffff",
            timer: 1500,
          });

        }

      })
      .catch((error) => {
        const message = error.message;
        Swal.fire({
          position: "center",
          icon: "error",

          title: { message },

          showConfirmButton: false,
          background: "#017E77",
          color: "#ffffff",
          timer: 2000,
        });
      });
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    if (data.password.length < 6) {
      setSuccess("password should be 6 carecter or longer");
      return;
    } else if (!/[A-Z]/.test(data.password)) {
      setSuccess(
        "your password should have at least one upuer case caracters."
      );
      return;
    }

    setImgLoader(true);

    const fromImages = { image: data.image[0] };
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",

      },
    });
    if (res.data.success) {
      setImgLoader(false);

      const name = data.name;
      const email = data.email;
      const password = data.password;
      const photoURL = res?.data?.data?.display_url;
      const role = "users";

      createUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL,
          }).then(() => {
            const userInfo = {
              name,
              email,
              photoURL,
              role

            };
            axiosPublick.post("/users/post", userInfo).then((res) => {
              if (res.data?._id) {
                reset();
                navigate(location?.state ? location?.state : "/");
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Successfull User Sign Up",
                  showConfirmButton: false,
                  background: "#017E77",
                  color: "#ffffff",
                  timer: 2000,
                });
              }
            });
          });
        })
        .catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${ error?.message }`,
            showConfirmButton: false,
            background: "#017E77",
            color: "#ffffff",
            timer: 2000,
          });
        });
    }
  };
  return (
    <div className="body">
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="singin-singup">
            {/* signIn from */}
            <form onSubmit={handleLogin} className="sing-in-from">
              <h2 className="title">Sign in</h2>

              <div className="input-field ">

                <i className="fas fa-user"></i>
                <input name="email" type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input name="password" type="password" placeholder="Password" />
              </div>
              <input type="submit" value={"login"} className="btnn solid" />

              <div className="divider">OR</div>
              <p className="social-text">Sign in with social platforms</p>
              <div className="social-media">
                <a onClick={handleGithubSingIn} href="#" className="social-icon">

                  <IoLogoGithub />
                </a>
                <a
                  onClick={handleGoogleSingIn}
                  href="#"
                  className="social-icon"
                >
                  <IoLogoGoogle />
                </a>
              </div>
              <div className=" absolute top-0 lg:-mt-10 mr-3 font-bold ">

                <Link
                  to="/"
                  className="flex justify-center items-center px-4 py-2 bg-[#019D91] gap-2 text-[#EEEEEE] rounded"
                >
                  <FaTentArrowTurnLeft />
                  BACK TO HOME

                </Link>
              </div>
            </form>

            {/* signUp from */}
            <form onSubmit={handleSubmit(onSubmit)} className="sing-up-from">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-field relative">
                <i className="fas fa-user"></i>
                <input
                  {...register("password", { required: true })}
                  type={open ? "password" : "text"}
                  placeholder="Password"
                />
                <span
                  onClick={() => setOpen(!open)}
                  className="absolute top-4 right-3"
                >
                  {open ? (
                    <FaEye className="text-2xl text-[#144248]"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-2xl text-[#144248]"></FaEyeSlash>
                  )}
                </span>
              </div>
              <div className="max-w-[500px] mx-auto">
                <input
                  {...register("image")}
                  type="file"
                  className="input-file my-3"
                />
              </div>
              {success && <p className="text-green-700">{success}</p>}
              <input
                type="submit"
                value={imgLoader ? "Waiting..." : "Sign up"}
                className="btnn solid"
              />

              <div className="divider">OR</div>
              <p className="social-text">Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <IoLogoFacebook />
                </a>
                <a onClick={handleGithubSingIn} href="#" className="social-icon">
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
              <h3 className="font-bold text-[#EEE]"> Sign Up Now !</h3>
              <p className="my-1 text-[#EEE] text-xl font-medium">
              Use strong, unique passwords, enable two-factor authentication, and beware of phishing. Regularly monitor account activity for added security.
              </p>
              <button
                className="btnn transparent"
                onClick={handleSignUpClick}
                id="sing-up-btn"
              >
                Sign up
              </button>
            </div>

            <img src={singupimage} className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content -mt-8">
              <h3 className="font-semibold text-[#EEE]">
                {" "}
                Welcome Back ! Swift Account Access
              </h3>
              <p className="my-2 text-[#EEE]">
              Create a strong password, use a unique email, and consider enabling two-factor authentication for secure and hassle-free sign-ups.
              </p>
              <button
                className="btnn transparent"
                onClick={handleSignInClick}
                id="sing-in-btn"
              >
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
