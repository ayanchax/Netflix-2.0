import React, { useRef, useState } from 'react'
import "./SignUpScreen.css"
import { auth } from "../firebase"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [signUpButtonPressed, setSignUpButtonPressed] = useState(false)
    const register = (e) => {
        e.preventDefault();
        setSignUpButtonPressed(true)
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((authUser) => {
            toast.dark("You are now registered and signed in", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });

        }).catch((err) => {
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
            setSignUpButtonPressed(false)
        })
    }
    const signIn = (e) => {
        e.preventDefault();
        setSignUpButtonPressed(true)
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((authUser) => {
            toast.dark("You are now signed in", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
        }).catch((err) => {
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
            setSignUpButtonPressed(false)
        })

    }
    return (
        <div className="signUpScreen">
            <form onSubmit={(e) => signIn(e)}>
                <h2>Sign In</h2>
                <input id="email" ref={emailRef} type="email" placeholder="Email" />
                <input id="current-password" ref={passwordRef} type="password" placeholder="Password" />
                <button className={`${signUpButtonPressed && "disabled"}`} type="submit">Sign In</button>
                <h4>
                    <span className="signUpScreen__gray">New to Netflix?</span>
                    &nbsp; <span onClick={(e) => register(e)} className={`signUpScreen__link ${signUpButtonPressed && "disabled"}`} >Sign Up now.</span></h4>
            </form>


        </div>
    )
}

export default SignUpScreen
