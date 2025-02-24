import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CapatainContext'

const Captainlogin = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }

    setEmail('')
    setPassword('')
  }
  return (

        <div className="h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://www.trioangle.com/blog/wp-content/uploads/2024/06/Taxi-Banner-cover.png')]">
          <div className="bg-white p-7 rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="flex flex-col items-center">
             
            </div>
    
            <form onSubmit={submitHandler}>
              <h3 className="text-lg font-medium mb-2">What's your email?</h3>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email@example.com"
              />
    
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                required
                className="bg-gray-100 mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
    
              <button
                type="submit"
                className="bg-black text-white font-semibold mb-4 rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
              >
                Login
              </button>
            </form>
    
            <p className="text-center">
              Join a us?{' '}
              <Link to="/captain-signup" className="text-blue-600">
                Register as a Driver
              </Link>
            </p>
    
            <Link
              to="/login"
              className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mt-5 rounded-lg px-4 py-2 w-full text-lg hover:bg-[#c5515c] transition duration-300"
            >
              Sign in as User
            </Link>
          </div>
        </div>
     
    
  )
}

export default Captainlogin