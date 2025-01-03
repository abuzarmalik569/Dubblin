'use client'
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { GrDocumentTime } from 'react-icons/gr'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineDashboard } from 'react-icons/md'
import { Dashboard, PersonalInfo, EditAddress, OrderHistory } from '../profile/page'
import Link from 'next/link'

const page = () => {
 

 


  return (
    <div className="font-Outfit">
    {/* Header Section */}
    <header style={{backgroundImage: "url('/profiletop.png')"}} className=' p-32 bg-cover bg-center'>
     
    </header>

    {/* Main Content */}
    <main className="container mx-auto mt-5 ">
      <div className="lg:flex gap-8 ">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-1/6 bg-white   p-4">
         <h2 className="text-2xl  text-black mb-4">My Account</h2>
          <nav>
            <ul className="space-y-2">
              <Link href='/dashboard'><li className="text-gray-700 font-medium hover:bg-gray-300 p-1  rounded-md  flex items-center gap-4 cursor-pointer">
              <MdOutlineDashboard className=' text-xl'/>   Dashboard
              </li></Link>
              <Link href='/personal-info'><li className="text-gray-700 font-medium hover:bg-gray-300 p-1  rounded-md  flex items-center gap-4 cursor-pointer">
               <CiUser className='text-xl'/>  Personal info
              </li></Link>
              <Link href='/address'><li className="text-gray-700 hover:bg-gray-300 p-1  rounded-md  flex items-center gap-4 cursor-pointer" >
                <IoLocationOutline className=' text-xl'/>  Addresses
              </li></Link>
             <Link href='/order-history'> <li className="text-gray-700 hover:bg-gray-300 p-1  rounded-md  flex items-center gap-4 cursor-pointer">
                <GrDocumentTime className=' text-xl'/>
                Order History
              </li></Link>
            </ul>
          </nav>
        </aside>

        {/* Main Dashboard Section */}
         
        <div className=' w-full mt-5 p-4 lg:p-0'>
       <div className='flex justify-between mb-6'><h2 className="text-2xl  text-black">Order History</h2> <button className=' text-black'>LOG OUT</button></div>
        <div className=' md:w-1/2 w-full bg-gray-100 rounded-md h-[50vh] p-4 '>
          <p className=' text-black'>You haven't placed any orders yet.</p>
        </div>
    </div>
         
        
         
      </div>
    </main>

    <div  style={{backgroundImage: "url('/profilebottom.png')"}} className=' h-[80vh] mt-8 flex items-end bg-cover bg-center'>
      <p className=' font-bold text-5xl w-1/2 mb-32 ml-20 text-white'>Lorem Ipsum is simply dummy text of the printing </p>
    </div>
  </div>
  )
}

export default page