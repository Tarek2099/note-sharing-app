import { useState } from "react"

const ResetPassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    return (
        <div className="max-w-full md:w-md p-4 rounded shadow">
            <h1 className="text-2xl font-bold text-center">Reset Your Password</h1>
            <form action="submit" className="space-y-4 my-5 p-4">
                <div>
                    <label htmlFor="oldPassword" className="block text-sm font-medium mb-2">Old Password</label>
                    <input type="password" placeholder="Old Password" className="w-full rounded outline-none p-2 bg-gray-100" value={oldPassword} />
                </div>
                <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium mb-2">New Password</label>
                    <input type="password" placeholder="New Password" className="w-full rounded outline-none p-2 bg-gray-100" value={newPassword} />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded cursor-pointer">Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword;