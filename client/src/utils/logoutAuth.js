import { Link, useNavigate } from "react-router";
import app from "../firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";


// Firebase authentication instance
const auth = getAuth(app);

const logoutHandler = (navigate, loading) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/signin');
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_USER", payload: null })
    }).catch((error) => {
        // An error happened.
    });
}

export default logoutHandler;