const ChangePassword = () => {
    return (
        <form className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium">Current Password</label>
                <input type="password" className="w-full border rounded p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium">New Password</label>
                <input type="password" className="w-full border rounded p-2" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Change Password
            </button>
        </form>
    );
}

export default ChangePassword;