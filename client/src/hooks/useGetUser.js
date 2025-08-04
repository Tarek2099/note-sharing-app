import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import { use, useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";


const auth = getAuth(app);


const useGetUser = () => {
    const { state, dispatch } = useContext(MyContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                dispatch({ type: "SET_USER", payload: user });
                dispatch({ type: "SET_LOADING", payload: false })
            }
        });
    }, [dispatch])

}

export default useGetUser;