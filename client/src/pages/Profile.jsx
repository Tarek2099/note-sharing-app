import { Link, useNavigate } from "react-router";
import app from "../firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";
import logoutHandler from "../utils/logoutAuth";
import useGetUser from "../hooks/useGetUser";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";


const Profile = () => {
  useGetUser();
  const navigate = useNavigate();
  // const user = useGetUser();
  const { state, dispatch } = useContext(MyContext)
  const { user, loading } = state;

  return (
    <div className="absolute top-20 right-10 h-75 flex flex-col justify-around items-center z-50 p-4 w-60 rounded bg-white text-gray-600 shadow">
      <img src={user.photoURL} alt="User Avatar" className="w-16 h-16 rounded-full mb-2" />
      <h3>{user?.displayName || "N\A"}</h3>
      <Link to="/profile/settings">Settings</Link>
      <button onClick={() => logoutHandler(navigate, loading, user)}>Log Out</button>
    </div>
  );
};

export default Profile;
