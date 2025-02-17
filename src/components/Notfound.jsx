import React from 'react'
import not from "../assets/not.png";
import { Routes, Route } from "react-router-dom";

function Notfound() {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div>
        <p className='text-center'>The page you are looking for can't be found.
         </p>
          <div>
            <img src={not} alt="" />
          </div>
        </div>
    
       <Routes>
       <Route path="*" element={<Notfound/>} />
       </Routes>
    </div>
  )
}

export default Notfound