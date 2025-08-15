import { useContext, useState } from "react"
import { MyContext } from "../context/MyContext"
import { Link, useNavigate } from "react-router";
import { FaUserEdit, FaCamera, FaUnlock, FaRegAddressCard } from "react-icons/fa";
import { MdEmail, MdLockReset } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import ChangeName from "../components/UpdateForms/ChangeName";
import ChangeEmail from "../components/UpdateForms/ChangeEmail";
import ImgUpdateForm from "../components/UpdateForms/ImgUpdate";
import { FiLogOut } from 'react-icons/fi';
import logoutHandler from "../utils/logoutAuth";
import ResetPassword from "../components/UpdateForms/ResetPassword"
import ChangePassword from "../components/UpdateForms/ChangePassword";

const ProfileSettings = () => {
    const [activeSection, setActiveSection] = useState(null);
    const { state } = useContext(MyContext);
    const { user } = state;
    const navigate = useNavigate();

    return (
        <div className="settings flex flex-col md:flex-row gap-12 max-w-7xl mx-auto mt-4">
            <div className="options max-w-full md:w-[25%] h-[calc(100vh-6rem)] p-4 shadow rounded">
                <div className="flex flex-col gap-2 items-center">
                    <img src={user?.photoURL} alt="Profile" className="w-32 h-32 rounded-full mb-2" />
                    <h3 className="font-bold">{user?.displayName || "N\A"}</h3>
                </div>
                <div className="flex flex-col gap-4 mt-5 text-left p-6 text-gray-600">
                    <button className="btn-profile-update" onClick={() => setActiveSection("name")}><FaUserEdit className="inline mr-2" />Edit Your Name</button>
                    <button className="btn-profile-update" onClick={() => setActiveSection("email")}><MdEmail className="inline mr-2" />Change Your Email</button>
                    <button className="btn-profile-update" onClick={() => setActiveSection("photo")}><FaCamera className="inline mr-2" />Change Your Photo</button>
                    <button className="btn-profile-update" onClick={() => setActiveSection("password")}><RiLockPasswordLine className="inline mr-2" />Change Your Password</button>
                    <button className="btn-profile-update" onClick={() => setActiveSection("resetPassword")}><FaUnlock className="inline mr-2" />Forget Password</button>
                    <button className="btn-profile-update" onClick={() => setActiveSection("dept")}><MdLockReset className="inline mr-2" />Edit Your Department</button>
                    <button className="btn-profile-update" onClick={() => setActiveSection("about")}><FaRegAddressCard className="inline mr-2" />About</button>
                    <button className="btn-profile-update" onClick={() => logoutHandler(navigate)}><FiLogOut className="inline mr-2" />Log Out</button>
                </div>
            </div>
            <div className="changeForm max-w-full md:w-[75%]">
                {activeSection === "name" && <ChangeName />}
                {activeSection === "email" && <ChangeEmail />}
                {activeSection === "photo" && <ImgUpdateForm />}
                {activeSection === "resetPassword" && <ResetPassword />}
                {activeSection === "password" && <ChangePassword />}
            </div>
        </div>
    )
}

export default ProfileSettings;