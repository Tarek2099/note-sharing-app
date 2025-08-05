import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";


const useUpdateUser = (userData) => {

    const auth = getAuth(app);

    if (auth.currentUser) {
        updateProfile(auth.currentUser, {
            displayName: userData.displayName,
        })
            .then(() => console.log("User profile updated successfully"))
            .catch((error) => console.error("Error updating user profile:", error));
    }
}
export default useUpdateUser;