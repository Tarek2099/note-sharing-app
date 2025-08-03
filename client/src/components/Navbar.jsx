import { useState } from "react";
import Profile from "../pages/Profile";
import Search from "./Search";

const Navbar = () => {
  const [isProfile, setIsProfile] = useState(false);
  // Profile Toggle Hnadler
  const handleToggle = () => {
    setIsProfile(!isProfile);
  };
  return (
    <div className="max-w-full shadow">
      <div className="navbar max-w-7xl flex items-center justify-between mx-auto bg-light p-4">
        <div className="brand">
          <h2 className="text-2xl font-bold">Note</h2>
        </div>
        <Search />
        <nav>
          <button onClick={handleToggle}>Profile</button>
          {isProfile ? <Profile /> : null}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
