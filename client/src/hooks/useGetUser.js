import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import { use, useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";


const auth = getAuth(app);


const useGetUser = () => {
    const { state, dispatch } = useContext(MyContext)
    const { user } = state;
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(user);

                dispatch({ type: "SET_USER", payload: user })
            } else {
            }
        });
    }, [dispatch])

}

export default useGetUser;