import { useNavigate } from "react-router";
import app from "../firebase/firebase.config";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GithubAuthProvider();

const githubAuth = () => {
    const navigate = useNavigate();
    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // Navigate to the home page
            navigate("/");
            return { user, token };
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            console.error(`Error during GitHub authentication: ${errorMessage}`);
            throw new Error(errorMessage);
        });
}

export default githubAuth;