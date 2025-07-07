import { useState } from "react";
import Navbar from "../components/Navbar";
import MyNotes from "./MyNotes";
import SignIn from "./SignIn";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar />
      {isLoggedIn ? <MyNotes /> : <SignIn setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
};

export default Home;
