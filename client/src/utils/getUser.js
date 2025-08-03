import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);
const getUser = () => {
    const user = onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(user);
            return user;
        } else {
        }
    });
    return user;
}

export default getUser;