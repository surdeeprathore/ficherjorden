import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }
  return (
    
    
 
        <div className="h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://www.trioangle.com/blog/wp-content/uploads/2024/06/Taxi-Banner-cover.png')]">
          <div className="bg-white p-7 rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="flex flex-col items-center">
            </div>
    
            <form onSubmit={submitHandler}>
              <h3 className="text-lg font-medium mb-2">What's your name?</h3>
              <div className="flex gap-4 mb-4">
                <input
                  required
                  className="bg-gray-100 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  required
                  className="bg-gray-100 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
    
              <h3 className="text-lg font-medium mb-2">What's your email?</h3>
              <input
                required
                className="bg-gray-100 mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
    
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                required
                className="bg-gray-100 mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
    
              <button 
                type="submit"
                className="bg-black text-white font-semibold mb-4 rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
              >Create Account</button>
            </form>
    
            <p className="text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600">
                Login here
              </Link>
            </p>
    
          
          </div>
        </div>

    
  )
}

export default UserSignup