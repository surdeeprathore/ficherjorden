import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Ensure Firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';

const LookingForDriver = (props) => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [driverFound, setDriverFound] = useState(false);
    const navigate = useNavigate(); // Hook for redirection

    const handleSubmitFeedback = async () => {
        if (!feedback.trim()) return alert("Feedback cannot be empty!");

        try {
            await addDoc(collection(db, "feedback"), {
                email: props.userEmail, // Ensure this is passed as a prop
                message: feedback,
                timestamp: new Date()
            });
            setSubmitted(true);
            setFeedback('');
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
    };

    useEffect(() => {
        if (driverFound) {
            // Redirect to "/riding" after 10 seconds
            const timer = setTimeout(() => {
                navigate('/riding');
            }, 10000);

            return () => clearTimeout(timer); // Cleanup timeout on unmount
        }
    }, [driverFound, navigate]);

    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => props.setVehicleFound(false)}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]} </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>

                    {/* Driver Found Confirmation Button */}
                    {!driverFound && (
                        <button 
                            className="bg-green-600 text-white px-4 py-2 rounded-lg mt-3 w-full"
                            onClick={() => setDriverFound(true)}
                        >
                            Driver is found, please confirm
                        </button>
                    )}

                    {driverFound && (
                        <p className="text-green-700 text-center mt-2">✅ Driver Confirmed! Redirecting in 10 seconds...</p>
                    )}
                </div>
            </div>

            {/* Feedback Section */}
            <div className="mt-5 p-3 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Leave Feedback</h3>
                <textarea
                    className="w-full p-2 border rounded-lg"
                    placeholder="Share your experience..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
                <button
                    className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full"
                    onClick={handleSubmitFeedback}
                    disabled={submitted}
                >
                    {submitted ? "Feedback Submitted ✅" : "Submit Feedback"}
                </button>
            </div>
        </div>
    );
};

export default LookingForDriver;
