import React, {useState} from "react";
import img from '../../assets/logo.png'
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


const Navbar = () => {

    const [user] = useAuthState(auth);
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const signOut = () => {
        auth.signOut();
    };
    return (
        <>
            <div className="nav_height">
                <div className="navbar_box">
                    <div className="logo_box">
                        <img src={img} alt=""/>
                    </div>
                    <div className="navbar_link">
                        {user ? (
                            <button onClick={signOut} className="sign-out" type="button">
                                Sign Out
                            </button>
                        ) : (
                            <button className="sign-in" onClick={googleSignIn} type="button">
                                Sign in
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar