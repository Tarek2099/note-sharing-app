import { Link, useNavigate } from "react-router";
import app from "../firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";


// Firebase authentication instance
const auth = getAuth(app);

const logoutHandler = (navigate) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/signin');
    }).catch((error) => {
        // An error happened.
    });
}

export default logoutHandler;