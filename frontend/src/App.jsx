// import React, { useContext } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Start from './pages/Start'
// import UserLogin from './pages/UserLogin'
// import UserSignup from './pages/UserSignup'
// import Captainlogin from './pages/Captainlogin'
// import CaptainSignup from './pages/CaptainSignup'
// import Home from './pages/Home'
// import UserProtectWrapper from './pages/UserProtectWrapper'
// import UserLogout from './pages/UserLogout'
// import CaptainHome from './pages/CaptainHome'
// import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
// import CaptainLogout from './pages/CaptainLogout'
// import Riding from './pages/Riding'
// import CaptainRiding from './pages/CaptainRiding'
// import 'remixicon/fonts/remixicon.css'

// const App = () => {

//   return (
//     <div>
//       <Routes>
//         {/* <Route path='/' element={<Start />} /> */}
//         <Route path='/login' element={<UserLogin />} />
//         <Route path='/riding' element={<Riding />} />
//         <Route path='/captain-riding' element={<CaptainRiding />} />

//         <Route path='/signup' element={<UserSignup />} />
//         <Route path='/captain-login' element={<Captainlogin />} />
//         <Route path='/captain-signup' element={<CaptainSignup />} />
//         <Route path='/'element={
//       //  <UserProtectWrapper>
//               <Home />
//             // </UserProtectWrapper>
//           } />
//         <Route path='/user/logout'
//           element={<UserProtectWrapper>
//             <UserLogout />
//           </UserProtectWrapper>
//           } />
//         <Route path='/captain-home' element={
//           <CaptainProtectWrapper>
//             <CaptainHome />
//           </CaptainProtectWrapper>

//         } />
//         <Route path='/captain/logout' element={
//           <CaptainProtectWrapper>
//             <CaptainLogout />
//           </CaptainProtectWrapper>
//         } />
//       </Routes>

       
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import CaptainSignup from './pages/CaptainSignup';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainLogout from './pages/CaptainLogout';
import UserProtectWrapper from './pages/UserProtectWrapper';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}>
      <Routes>
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/' element={<Home />} />
        <Route path='/user/logout' element={<UserProtectWrapper><UserLogout /></UserProtectWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>} />
        <Route path='/captain/logout' element={<CaptainProtectWrapper><CaptainLogout /></CaptainProtectWrapper>} />
      </Routes>

      {/* Dark Mode Toggle Button */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className='fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all'>
        {darkMode ? <i className='ri-sun-line text-xl'></i> : <i className='ri-moon-line text-xl'></i>}
      </button>
    </div>
  );
};

export default App;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBgWLfFIf9dZUlfIipmuWGPk73ir7HfenY",
//   authDomain: "ficherjorden.firebaseapp.com",
//   projectId: "ficherjorden",
//   storageBucket: "ficherjorden.firebasestorage.app",
//   messagingSenderId: "30539065024",
//   appId: "1:30539065024:web:7c8b0dd979f168f135af25",
//   measurementId: "G-FZK7GXQ5VC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);