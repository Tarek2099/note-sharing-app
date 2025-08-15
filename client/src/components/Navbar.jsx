import { useContext, useState } from "react";
import Profile from "../pages/Profile";
import Search from "./Search";
import { FaUser } from 'react-icons/fa';
import { MyContext } from "../context/MyContext";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [isProfile, setIsProfile] = useState(false);
  const { state } = useContext(MyContext);
  const { user } = state;
  const navigate = useNavigate()
  // Profile Toggle Hnadler
  // const handleToggle = () => {
  //   setIsProfile(!isProfile);
  // };

  // Handle Profile Click
  const profileHandler = () => {
    user ? navigate("/profile/settings") : navigate("/signin");
  }
  return (
    <div className="max-w-full shadow">
      <div className="navbar max-w-7xl flex items-center justify-between mx-auto bg-light p-4">
        <div className="brand">
          <Link className="text-2xl font-bold" to="/">NoteJS</Link>
        </div>
        <Link to="/addnote" className="cursor-pointer font-bold">Add Note</Link>
        <nav>
          {
            user ? <img src={user?.photoURL} className="w-8 h-8 rounded-full mb-2" onClick={profileHandler} /> : <FaUser size={20} color="#333" onClick={profileHandler} />
          }

          {/* <button onClick={handleToggle}>Profile</button>
          {isProfile ? <Profile /> : null} */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
