import { Children } from "react";
import getUser from "../utils/getUser";

const ProtectedRoutes = ({ children }) => {
    const user = getUser();
    console.log(user)
    if (user) {
        return children;
    } else {
        return <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">You need to be logged in to access this page.</h1>
        </div>;
    }
}

export default ProtectedRoutes;