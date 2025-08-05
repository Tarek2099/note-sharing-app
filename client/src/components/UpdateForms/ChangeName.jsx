import { useState } from "react";
import useUpdateUser from "../../hooks/useUpdateUser";

const ChangeName = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Function to update the name
    const updateName = async (e) => {
        e.preventDefault();
        // Here Update the name in the database or Firebase
        await useUpdateUser({
            displayName: `${firstName} ${lastName}`,
        })
    }
    return (
        <div className="md:max-w-3xl">
            <form className="space-y-4 max-w-md shadow p-4">
                <div>
                    <label className="block text-sm font-medium">First Name</label>
                    <input type="text" className="w-full border rounded p-2" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label className="block text-sm font-medium">Last Name</label>
                    <input type="text" className="w-full border rounded p-2" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={updateName}>
                    Update
                </button>
            </form>
        </div>
    );
}

export default ChangeName;