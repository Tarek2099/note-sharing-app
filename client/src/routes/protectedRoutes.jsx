import { Children, useContext } from "react";
import getUser from "../hooks/useGetUser";
import { MyContext } from "../context/MyContext";
import useGetUser from "../hooks/useGetUser";

const ProtectedRoutes = ({ children }) => {

    useGetUser(); // Get user data

    const { state, dispatch } = useContext(MyContext);
    const { user, loading } = state;
    console.log(loading)

    if (!user) {
        return <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">You need to be logged in to access this page.</h1>
        </div>;

    } else {
        return children;
    }
}

export default ProtectedRoutes;