const ChangeName = () => {
    return (
        <div className="md:max-w-3xl">
            <form className="space-y-4 max-w-md shadow p-4">
                <div>
                    <label className="block text-sm font-medium">First Name</label>
                    <input type="text" className="w-full border rounded p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Last Name</label>
                    <input type="text" className="w-full border rounded p-2" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Update
                </button>
            </form>
        </div>
    );
}

export default ChangeName;