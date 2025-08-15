import React, { useContext } from "react";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { MyContext } from "../context/MyContext";

const AboutPage = () => {
    const { state, dispatch } = useContext(MyContext);
    const { user } = state;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-4">
                <img
                    src={user?.photoURL}
                    alt={`${user.name}'s Avatar`}
                    className="w-20 h-20 rounded-full border-2 border-gray-300"
                />
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <FaUser /> {user.name}
                    </h1>
                    <p className="text-gray-500">{user.role}</p>
                </div>
            </div>

            {/* Info Section */}
            <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                    <FaEnvelope className="text-blue-500" />
                    <span>{user.email}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{user.location}</span>
                </div>

                <div className="flex items-start gap-3 text-gray-700">
                    <MdInfo className="text-green-500 mt-1" />
                    <p>{user.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
