import { Link } from "react-router";

const Profile = () => {
  return (
    <div className="fixed top-20 right-10 h-75 flex flex-col justify-around items-center z-50 p-4 w-60 rounded bg-white text-gray-600">
      <h3>example@gmail.com</h3>
      <Link>Settings</Link>
      <Link>Log Out</Link>
    </div>
  );
};

export default Profile;
