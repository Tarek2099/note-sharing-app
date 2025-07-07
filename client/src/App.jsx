import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { MyContext } from "./context/MyContext";
import initialState from "./Dummy";
import reducer from "./hooks/Reducer";
import AddNote from "./pages/AddNote";
import Home from "./pages/Home";
import MyNotes from "./pages/MyNotes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addnote" element={<AddNote />} />
      </Routes>
    </MyContext>
  );
};

export default App;
