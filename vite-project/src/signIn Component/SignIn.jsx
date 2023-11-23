import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth, provider } from "./firebase/firebase-config";

const SignIn = ({ menu, setMenu }) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({
    formIsValid: true,
    errMsg: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
  });

  // const [photoUrl, setPhotoUrl] = useState("");

  // console.log(formData);

  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const bgColor = signUp ? "White" : "#F6F6F6";
  const bgColors = signIn ? "White" : "#F6F6F6";
  const styles1 = {
    background: bgColor,
  };
  const styles2 = {
    background: bgColors,
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function addUser(e) {
    e.preventDefault();
    const form = document.querySelector(".form");
    const email = form.email.value;
    const password = form.password.value;
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsValid((prev) => {
          return {
            ...prev,
            formIsValid: true,
          };
        });
        console.log("User added successfully");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message) {
          setIsValid((prev) => {
            return {
              formIsValid: false,
              errMsg: err.message,
            };
          });
        }
      });
    form.reset();
    setSignUp(false);
    setSignIn(true);
  }

  function signInWithGoogle() {
    signInWithPopup(auth, provider).then((results) => {
      // console.log(results.user.photoURL);
      // setPhotoUrl(results.user.photoURL);
      navigate("/");
    });
  }

  function LogIn(e) {
    e.preventDefault();
    // const form = document.querySelector(".form");
    // const email = form.email.value;
    // const password = form.password.value;
    const email = document.getElementById("emailIn").value;
    const password = document.getElementById("passwordIn").value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsValid((prev) => {
          return {
            ...prev,
            formIsValid: true,
          };
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message) {
          setIsValid((prev) => {
            return {
              formIsValid: false,
              errMsg: err.message,
            };
          });
        }
      });
    form.reset();
  }

  return (
    <>
      {/* <Navbar photoURL={photoUrl} menu={menu} setMenu={setMenu} />
      {menu && <Menu photoURL={photoUrl}/>} */}
      <div className=" bg-signInBG min-h-screen">
        <Nav />
        <div className="grid grid-cols-1 place-items-center grid-row-1">
          <div className="flex flex-col justify-center items-center m-4 relative bg-white h-fit p-2">
            <div className="flex absolute top-0 left-0 right-0">
              <div
                style={styles1}
                className="bg-white font-semibold text-lg p-2 md:p-4 w-1/2 flex justify-center items-center cursor-pointer "
                onClick={() => {
                  setSignIn(false);
                  setSignUp(true);
                }}
              >
                Sign Up
              </div>
              <div
                style={styles2}
                className="bg-signInBG p-2 md:p-4 w-1/2 text-gray-500 text-lg font-semibold flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setSignIn(true);
                  setSignUp(false);
                }}
              >
                Sign In
              </div>
            </div>

            {signUp ? (
              <>
                <div className="sm:text-4xl text-3xl font-semibold text-center mt-16">
                  Create your account.
                </div>
                <div className="p-6 text-center">
                  Build skills for today, tomorrow, and beyond. Education to
                  future-proof your career.
                </div>
                <div
                  className="p-2 w-86 border-gray-300 border-2 mt-2 rounded-lg cursor-pointer"
                  onClick={signInWithGoogle}
                >
                  <span className="text-red-600">
                    <FontAwesomeIcon icon={faGoogle} />+
                  </span>{" "}
                  Sign up with Google
                </div>
                <div className="text-xl text-gray-500">or</div>
                {!isValid.formIsValid && (
                  <div className="p-2 rounded-lg bg-red-300 w-86">
                    <span>
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="text-red-600 mr-2"
                      />
                    </span>
                    {isValid.errMsg.substring(10, 50)}
                  </div>
                )}
                <form action="" method="get" className="form flex flex-col">
                  <div>
                    <label htmlFor="fname"></label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="First Name"
                      onChange={(e) => handleChange(e)}
                      value={formData.fname}
                      className="p-2 m-2 sm:w-96 w-72 border-gray-300 border-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="lname"></label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="Last Name"
                      onChange={(e) => handleChange(e)}
                      value={formData.lname}
                      className="p-2 m-2 sm:w-96 w-72 border-gray-300 border-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      onChange={(e) => handleChange(e)}
                      value={formData.email}
                      className="p-2 m-2 sm:w-96 w-72 border-gray-300 border-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="password"></label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => handleChange(e)}
                      value={formData.password}
                      className="p-2 m-2 sm:w-96 w-72 border-gray-300 border-2 rounded-lg"
                    />
                  </div>
                </form>
                <div className="text-xs">
                  By clicking "Sign up," you agree to our Terms of Use and our
                  Privacy Policy.
                </div>
                <div
                  className="bg-blue p-2 mt-4 text-white font-bold text-xl rounded-md cursor-pointer"
                  onClick={addUser}
                >
                  Sign up{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="sm:text-4xl text-center text-3xl font-semibold mt-16 mb-2">
                  Sign in to your account.
                </div>
                <div className="mt-2 w-3/5 text-center">
                  Build skills for today, tomorrow, and beyond. Education to
                  future-proof your career.
                </div>
                <div
                  className="p-2 w-86 border-gray-300 border-2 mt-2 rounded-lg cursor-pointer"
                  onClick={signInWithGoogle}
                >
                  <span className="text-red-600">
                    <FontAwesomeIcon icon={faGoogle} />+
                  </span>{" "}
                  Sign in with Google
                </div>
                <div className="text-xl text-gray-500">or</div>
                {!isValid.formIsValid && (
                  <div className="p-2 rounded-lg bg-red-300 w-86">
                    <span>
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="text-red-600 mr-2"
                      />
                    </span>
                    {isValid.errMsg.substring(10, 50)}
                  </div>
                )}
                <form action="" method="get" className="flex flex-col">
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      name="emailIn"
                      id="emailIn"
                      placeholder="Email Address"
                      className="p-2 m-2 sm:w-96 w-72 border-gray-300 border-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="password"></label>
                    <input
                      type="password"
                      name="passwordIn"
                      id="passwordIn"
                      placeholder="Password"
                      className="p-2 m-2 sm:w-96 w-72 border-gray-300 border-2 rounded-lg"
                    />
                  </div>
                </form>
                <div className="text-xs">
                  By clicking "Sign in," you agree to our Terms of Use and our
                  Privacy Policy.
                </div>
                <div
                  className="bg-blue p-2 mt-4 text-white font-bold text-xl rounded-md cursor-pointer"
                  onClick={LogIn}
                >
                  Sign in{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
