import React from 'react'
import { Navbar } from '../Components/Navbar'
import par from "../assets/images/parth.jpg"
import pri from "../assets/images/priyank.jpeg"
import mnv from "../assets/images/manav.jpg"
import akn from "../assets/123.jpeg"
import pja from "../assets/images/puja.jpeg"
import { BsLinkedin } from 'react-icons/bs';
export const AboutUs = () => {
  const members =[
    {
        id: 1,
        name:"Parth",
        lname:"Sood",
        work:"Frontend and Api's",
        linkedin:"",
    },
    {
        id: 2,
        name:"Priyank",
        lname:"Vaidya",
        work:"Backend",
        linkedin:"https://www.linkedin.com/in/priyank-vaidya/",
    },
    {
        id: 3,
        name:"Manav",
        lname:"Surti",
        work:"Algorithms",
        linkedin:"https://www.linkedin.com/in/manav-surti-b53130223/",
    },
    {
        id: 4,
        name:"Pooja",
        lname:"Mavadhiya",
        work:"Algorithms and frontend",
        linkedin:"https://www.linkedin.com/in/parth-sood/",
    },
    {
        id: 5,
        name:"Akanksha",
        lname:"Sharma",
        work:"Documentation",
        linkedin:"https://www.linkedin.com/in/parth-sood/",
    },

  ]
   const img = [par,pri,mnv,pja,akn];
  const memb_list = members.map((members)=>{

   return(

    <div key={members.id} className=" p-5 mt-6  rounded-lg flex flex-row">
       {/* <div classNameName=' bg-[#ffeaea]  rounded-l-2xl text-centre w-1/5 border-2 border-[#ffeaea]  font-bold text-[30px]'> <img src={img[members.id -1]} alt={members.name} classNameName="rounded-l-2xl opacity-98"></img></div>
       <div classNameName='bg-[#8c4545] bg-opacity-60 text-[#ffeaea] border-2 border-[#ffeaea] border-l-0 text-[30px] rounded-r-2xl text-left  w-full lg:p-14 sm:p-6'>{members.work}</div> */}

       
<section   className=" font-Gloock bg-[#19191c] flex font-medium items-center justify-center ">

<section className="w-64 mx-auto bg-[#2a2a2e] rounded-2xl px-6 py-6 shadow-lg">
    <div className="flex items-center justify-between">
        {/* <span className="text-gray-400 text-sm">2d ago</span> */}
        <span className="text-red-600 cursor-pointer" >
            <a href={members.linkedin} target="_blank"><BsLinkedin /></a>
            
          
        </span>
    </div>
    <div className="mt-6 w-fit mx-auto hover:scale-125 duration-700">
        <img src={img[members.id-1]} className="rounded-full w-full p-6 " alt="profile picture" srcset=""/>
    </div>

    <div className="mt-8 ">
        <h2 className="text-white font-bold text-2xl tracking-wide">{members.name} <br/> {members.lname}</h2>
    </div>
    {/* <p className="text-red-600 font-medium mt-2.5" >
        {members.work}
    </p> */}

    

</section>


</section>

    </div>
   )
   

  })


  return (
<div className='about_us bg-[#19191c] font-Gloock'>
        <Navbar/>
    <div>
        <div className='text-white text-[60px] text-center p-10'>
            Our Team
        </div>
        {/* here i'll be putting the members */}
        <div className='members bg-[#19191c] items-center flex  '>{memb_list}</div>
       
    </div>
</div>
  )
}
