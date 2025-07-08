import { useState } from "react";
import MyNotes from "./MyNotes";
import SignIn from "./SignIn";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <MyNotes /> : <SignIn setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
};

export default Home;
