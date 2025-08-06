import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import LoginProvider from "../components/LoginProvider";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the username, email, and password to your server
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        // Verify the user email
        sendEmailVerification(user)
          .then(() => {
            console.log("Email verification sent");
          }).catch((error) => console.log("Error sending email verification:", error));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    setUsername("");
    setEmail("");
    setPassword("");
    // Redirect to the sign-in page 
    navigate("/signin");


  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/`);
        console.log("Data fetched:", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mt-10">Sign Up</h1>
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            ></label>
            <required />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-2">Or sign up with</p>
        <LoginProvider />
        <p className="text-center">
          Have already an account?{" "}
          <Link to="/signin" className="text-blue-600 font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
