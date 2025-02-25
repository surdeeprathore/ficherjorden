import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SocketContext } from '../context/SocketContext';
import LiveTracking from '../components/LiveTracking';

const Riding = () => {
    const location = useLocation();
    const { ride } = location.state || {}; // Retrieve ride data
    const { socket } = useContext(SocketContext);
    const navigate = useNavigate();

    // State to manage selected payment method
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    socket.on("ride-ended", () => {
        navigate('/home');
    });

    const handlePayment = () => {
        if (!selectedPaymentMethod) {
            toast.error("Please select a payment method!", { position: "top-center" });
            return;
        }

        toast.success(`Payment successful with ${selectedPaymentMethod}!`, { position: "top-center" });

        // Redirect after a short delay
        setTimeout(() => {
            navigate('/home');
        }, 2000);
    };

    return (
        <div className='h-screen'>
            <ToastContainer />
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <LiveTracking />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-12' src="" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                        <img src="https://pngimg.com/d/honda_PNG10352.png" className='h-12' alt="" />
                        <p className='text-sm text-gray-600'>Toyota Camry</p>
                        <p className='text-sm text-gray-600'>UP 80 DF 8795</p>
                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-5'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className="ri-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹456 {ride?.fare} </h3>
                                <p className='text-sm -mt-1 text-gray-600'></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Method Dropdown */}
                <div className='w-full mt-4'>
                    <label className="text-md font-semibold">Choose Payment Mode:</label>
                    <select
                        className="w-full p-2 border rounded-lg mt-2"
                        value={selectedPaymentMethod}
                        onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    >
                        <option value="">-- Select Payment Method --</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="UPI">UPI</option>
                        <option value="Wallet">Wallet</option>
                    </select>
                </div>

                {/* Payment Button */}
                <button
                    className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'
                    onClick={handlePayment}
                >
                    Make a Payment
                </button>
            </div>
        </div>
    );
};

export default Riding;
