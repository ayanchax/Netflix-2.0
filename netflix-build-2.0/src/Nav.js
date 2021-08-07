import React, { useEffect, useState } from "react";
import "./Nav.css"
import { auth } from "./firebase"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom"
toast.configure();

function Nav() {
    let history = useHistory();
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () =>
            window.removeEventListener("scroll", transitionNavBar)

    }, []);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }
    const signOutUser = (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            history.push("/")
            toast.dark("You are now signed out!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
        }).catch((err) => {
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
        })
    }
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents ">
                <img onClick={(e) => history.push("/")} className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix-Logo" />
                <img onClick={(e) => history.push("profile")} className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                    alt="Netflix-User-Avatar" />
                <button onClick={(e) => signOutUser(e)} className="nav__button">Sign Out</button>
            </div>

        </div>
    )
}

export default Nav
