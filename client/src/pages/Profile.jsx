import { Link, useNavigate } from "react-router";
import app from "../firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();
  // Firebase authentication instance
  const auth = getAuth(app);

  const logoutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/signin');
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="fixed top-20 right-10 h-75 flex flex-col justify-around items-center z-50 p-4 w-60 rounded bg-white text-gray-600">
      <h3>example@gmail.com</h3>
      <Link>Settings</Link>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
};

export default Profile;
