import React from 'react'
import "./ProfileScreen.css"
import { useSelector } from 'react-redux'
import { selectUser } from "../features/userSlice"
import Nav from "../Nav"
import { auth } from "../firebase"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom"
import PlansScreen from './PlansScreen'
toast.configure();
function ProfileScreen() {
    const user = useSelector(selectUser)
    let history = useHistory();
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
        <div className="profileScreen">

            <Nav />
            <div className="profileScreen__body">

                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                        alt="Netflix-User-Avatar" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <PlansScreen/>
                            <button onClick={(e) => signOutUser(e)} className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>

         
        </div>
    )
}

export default ProfileScreen
