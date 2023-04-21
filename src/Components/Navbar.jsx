import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {AiFillRobot} from 'react-icons/ai'
 
// import {Icon} from "@iconify/react"

export const Navbar = () => {
 


  const [open,notOpen] = useState(false);
  const [algOpen,algNotOpen] = useState(false);
  
  const handleAlgo = () =>{
    algNotOpen(!algOpen);
  }
  const handleClickHamb = () =>{
    notOpen(!open);
    
  } 
  return (
    
    <div className='bg-[#131316] z-50 text-slate-300 font-Gloock text-centre md:flex text-center gap-20 m-0 sticky top-0 items-end'>
        <div className='navbar-menu  cursor-pointer  text-[40px] justify-between p-6 ml-10 bg-[#131316]'>
          <Link to="/">
         OS-Project
         </Link>
        </div>
        <div className="hidden md:flex justify-between duration-300 p-7 ml-auto text-[20px] lg:gap-10 lg:text-[22px]  z-40 ">                  
            <div className='p-3 cursor-pointer hover:text-red-600 ' onClick={algOpen}><Link to="/">Home</Link></div>
            <div className='p-3 cursor-pointer hover:text-red-600' onClick={handleAlgo}>Algorithms
            </div>
            <div className='p-3 cursor-pointer hover:text-red-600'><Link to="/about">About us</Link></div>
            {/* I have modified with the link below please check again */}
            <div className='p-3 cursor-pointer hover:text-red-600 mt-2' ><Link to="/chatbot"><AiFillRobot/></Link></div>
        </div>
        <div className='navbar bg-[#131316] md:hidden p-2 cursor-pointer' onClick={handleClickHamb}>
        ▼
        </div>
         <div className={`text-[25px] absolute  w-1/5 bg-[#131316] pt-4 transition-transform duration-500 ease-in  ${algOpen ? "translate-x-[345%]  translate-y-[85%]  ": " duration-1000 hidden translate-y-[-85%]  translate-x-[375%]"} `}>
            <div className='hover:text-red-600'><Link to="/roundrobin"> Round Robin</Link></div>
            <div className='hover:text-green-600'><Link to="/bankersAlgorithm"> Banker's</Link></div>
            <div className='hover:text-blue-600'> <Link to="/scan-cscan">SCAN-CSCAN</Link></div>
            <div className='hover:text-yellow-600'><Link to="/MRU">MRU</Link> </div>
            


         </div>



        <div className={` text-[25px] absolute w-full bg-[#131316]  pt-3 transition-transform duration-500 ease-in  ${open ? "translate-y-0": "translate-y-[-200%]"} `}>                  
            <div className='p-3 cursor-pointer duration-300 hover:text-red-600'><Link to="/">Home</Link></div>
            <div className='p-3 cursor-pointer duration-300 hover:text-red-600'>Algorithms</div>
            <div className='p-3 cursor-pointer duration-300 hover:text-red-600'><Link to="/about">About us</Link></div>
            <div className='p-3 flex justify-center'><Link to="/chatB"><AiFillRobot/></Link></div>
        </div>
    </div>  
     
  )
}
