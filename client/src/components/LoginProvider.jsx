import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import githubAuth from "../utils/githubAuth";

const LoginProvider = () => {
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
                <button onClick={githubAuth} className="bg-gray-800 text-white flex px-2 py-1 rounded">
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