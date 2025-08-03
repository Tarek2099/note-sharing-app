import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import githubAuth from "../utils/githubAuth";
import { useNavigate } from "react-router-dom";

const LoginProvider = () => {
    const navigate = useNavigate();
    // Function to handle Github login
    const handleGithubLogin = async () => {
        try {
            await githubAuth();
            navigate("/mynotes");
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="flex gap-2 justify-between py-4">
            <div className="google">
                <button className="bg-red-500 text-white flex px-2 py-1 rounded">
                    <span>
                        <FaGoogle className="inline mr-2" />
                    </span>
                    Google
                </button>
            </div>
            <div className="facebook mb-2">
                <button className="bg-blue-600 text-white flex px-2 py-1 rounded">
                    <span>
                        <FaFacebook className="inline mr-2" />
                    </span>
                    Facebook
                </button>
            </div>
            <div className="github">
                <button onClick={handleGithubLogin} className="bg-gray-800 text-white flex px-2 py-1 rounded">
                    <span>
                        <FaGithub className="inline mr-2" />
                    </span>
                    GitHub
                </button>
            </div>
        </div>
    )
}

export default LoginProvider;