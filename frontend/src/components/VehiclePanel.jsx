import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehiclePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Ride</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('car')
            }} 
            
            className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Imperial Class<span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Executive,compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹879{props.fare.car}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('moto')
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://www.pngarts.com/files/3/Blue-Audi-PNG-Image.png" alt="" />
                <div className='-ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Signature Class<span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Prestige,Elite Comfort</p>
                </div>
                <h2 className='text-lg font-semibold'>₹576 {props.fare.moto}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('auto')
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://t3.ftcdn.net/jpg/05/83/04/44/360_F_583044458_ZOx8uOu2pXLvXRGwJYG0JyR6nlG405Uc.jpg" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Basic Comfort<span><i className="ri-user-3-fill"></i>6</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable,Basic Comfort</p>
                </div>
                <h2 className='text-lg font-semibold'>₹445  {props.fare.auto}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel