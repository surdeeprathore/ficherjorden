import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CapatainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


  const { captain, setCaptain } = React.useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }
  return (
    
        <div className="h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://www.trioangle.com/blog/wp-content/uploads/2024/06/Taxi-Banner-cover.png')]">
          <div className="bg-white p-7 rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="flex flex-col items-center">
            </div>
    
            <form onSubmit={submitHandler}>
              <h3 className="text-lg font-medium mb-2">Enter your name</h3>
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
    
              <h3 className="text-lg font-medium mb-2">Enter your email</h3>
              <input
                required
                className="bg-gray-100 mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email_name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
    
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                required
                className="bg-gray-100 mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
    
              <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
              <div className="flex gap-4 mb-4">
                <input
                  required
                  className="bg-gray-100 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                  type="text"
                  placeholder="Vehicle Color"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                />
                <input
                  required
                  className="bg-gray-100 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                  type="text"
                  placeholder="Vehicle Plate"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                />
              </div>
    
              <div className="flex gap-4 mb-4">
                <input
                  required
                  className="bg-gray-100 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                  type="number"
                  placeholder="Vehicle Capacity"
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                />
                <select
                  required
                  className="bg-gray-100 w-1/2 rounded-lg px-4 py-2 border text-lg"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option value="" disabled>Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="moto">Moto</option>
                </select>
              </div>
    
              <button
                type="submit"
                className="bg-black text-white font-semibold mb-4 rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300"
              >
                Create Driver Account
              </button>
            </form>
    
            <p className="text-center">
              Already have an account?{' '}
              <Link to="/captain-login" className="text-blue-600">
                Login here
              </Link>
            </p>

          </div>
        </div>
     
    
  )
}

export default CaptainSignup