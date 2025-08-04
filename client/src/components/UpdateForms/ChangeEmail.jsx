const ChangeEmail = () => {
    return (
        <form className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full border rounded p-2" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Update
            </button>
        </form>
    );
}

export default ChangeEmail;