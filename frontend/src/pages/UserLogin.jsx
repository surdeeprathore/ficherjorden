import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ userData, setUserData ] = useState({})

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }

  return (
    
  
        <div className="h-screen flex items-center justify-center bg-cover bg-center bg-[url(https://www.trioangle.com/blog/wp-content/uploads/2024/06/Taxi-Banner-cover.png)]">
          <div className="bg-white p-7 rounded-lg shadow-lg max-w-md w-full mx-4">
            <img className="w-16 mb-5" src="" alt="" />
    
            <form onSubmit={submitHandler}>
              <h3 className="text-lg font-medium mb-2">What's your email</h3>
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
    
            <Link
              to="/captain-login"
              className="bg-blue-600 flex items-center justify-center text-white font-semibold rounded-lg px-4 py-2 w-full text-lg mt-5 hover:bg-green-700 transition duration-300"
            >
              Sign in as Driver
            </Link>
          </div>
        </div>
      )
}

export default UserLogin