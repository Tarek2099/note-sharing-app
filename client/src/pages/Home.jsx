import { useContext, useState } from "react";
import MyNotes from "./MyNotes";
import SignIn from "./SignIn";
import { MyContext } from "../context/MyContext";

const Home = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { state, dispatch } = useContext(MyContext);
  const { isLoggedIn, user, loading } = state;


  return (
    <div>
      {user ? <MyNotes /> : <SignIn />}
    </div>
  );
};

export default Home;
