import { Children, useContext } from "react";
import getUser from "../hooks/useGetUser";
import { MyContext } from "../context/MyContext";

const ProtectedRoutes = ({ children }) => {
    const { state, dispatch } = useContext(MyContext);
    const { user } = state;
    console.log(state);
    if (user) {
        return children;
    } else {
        return <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">You need to be logged in to access this page.</h1>
        </div>;
    }
}

export default ProtectedRoutes;