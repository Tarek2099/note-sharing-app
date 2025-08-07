import { useState } from "react"
import { getAuth, updatePassword } from "firebase/auth";
import app from "../../firebase/firebase.config";

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const auth = getAuth(app);

    // Current User
    const user = auth.currentUser;

    // Change passeword
    const passwordChangeHandler = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage("Password is not matched, try again");
        }
        try {
            // Update password
            await updatePassword(user, newPassword)
                .then(() => {
                    console.log("Password updated successfully");
                }).catch((error) => {
                    console.log("Something went wrong");

                });
        } catch {
            console.log("Something went wrong");

        }

    }
    return (
        <div className="max-w-full md:w-md p-4 rounded shadow">
            <h1 className="text-2xl font-bold text-center">Change Your Password</h1>
            <form action="submit"
                className="space-y-4 my-5 p-4" onSubmit={passwordChangeHandler}>
                <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium mb-2">New Password</label>
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full rounded outline-none p-2 bg-gray-100"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full rounded outline-none p-2 bg-gray-100"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded cursor-pointer">Change Password</button>
            </form>
        </div>
    )
}

export default ChangePassword;