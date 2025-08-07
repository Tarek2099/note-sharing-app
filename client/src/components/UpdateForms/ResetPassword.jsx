import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    // Reset Password Function 
    const resetHandler = async (e) => {
        e.preventDefault();
        if (!email) {
            setMessage("Please enter your email");
        }
        try {
            await sendPasswordResetEmail(auth, email)
                .then(() => {
                    setMessage("Password reset email sent");
                    setIsSuccess(true);
                    setEmail("");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorMessage);
                    setIsSuccess(false);
                });
        } catch {
            console.log("Failed to send reset email");
        }
    }
    return (
        <div className="max-w-full md:w-md p-4 rounded shadow">
            <h1 className="text-2xl font-bold text-center">Reset Your Password</h1>
            <form action="submit"
                className="space-y-4 my-5 p-4"
                onSubmit={resetHandler}
            >
                <div>

                    {message && <p className={`p-2 w-full mb-2 text-center ${isSuccess ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>{message}</p>}
                    <label htmlFor="oldPassword" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded outline-none p-2 bg-gray-100"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded cursor-pointer">Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword;