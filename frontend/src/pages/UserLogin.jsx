import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { auth } from "../firebase"; // Ensure Firebase is correctly imported
import { signInWithEmailAndPassword } from "firebase/auth";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Authenticate user with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        setUser({ email: user.email, uid: user.uid });
        navigate("/home"); // ✅ Redirect to home if login is successful
      }
    } catch (error) {
      setError("Invalid email or password.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-[url(https://www.trioangle.com/blog/wp-content/uploads/2024/06/Taxi-Banner-cover.png)]">
      <div className="bg-white p-7 rounded-lg shadow-lg max-w-md w-full mx-4">
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <button
            type="submit"
            className="bg-black text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          New here? <Link to="/signup" className="text-blue-600">Create new Account</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
