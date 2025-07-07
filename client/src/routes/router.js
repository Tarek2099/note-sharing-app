import { Route, Routes } from "react-router-dom";
import AddNote from "../pages/AddNote";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/singin" element={<SignIn />}/>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/addnote" element={<AddNote />} />
</Routes>