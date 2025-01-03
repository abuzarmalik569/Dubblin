'use client'
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { GrDocumentTime } from 'react-icons/gr'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineDashboard } from 'react-icons/md'
import { Dashboard, PersonalInfo, EditAddress, OrderHistory } from '../profile/page'
// import { Link } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  const dashboardItems = [
    { title: "Lorem Ipsum", image: '/dash1.png'},
    { title: "Lorem Ipsum", image: '/dash2.png' },
    { title: "Lorem Ipsum", image: '/dash3.png' },
  ];
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
              <Link href='/personal-info'><li className="te</Link>  text-gray-700 hover:bg-gray-300 p-1  rounded-md  flex items-center gap-4 cursor-pointer" >
                <CiUser className=' text-xl'/>    Personal Info
              </li> </Link>  
              <Link href='/address'>   <li className="text-gray-700 hover:bg-gray-300 p-1  rounded-md  flex items-center gap-4 cursor-pointer" >
                <IoLocationOutline className=' text-xl'/>  Addresses
              </li> </Link> 
              <Link href='order-history'><li className="text-gray-700 hover:bg-gray-300 p-1  rounded-md  flex items-center gap-4 cursor-pointer" >
                <GrDocumentTime className=' text-xl'/>
                Order History
              </li></Link>
            </ul>
          </nav>
        </aside>

        {/* Main Dashboard Section */}
         
          {/* {component} */}
          <div className="flex flex-col w-full py-4 p-4 lg:p-0 mt-4">
    <div className='flex justify-between  mb-6'><h2 className="text-2xl  text-black">Dashboard</h2> <button className=' text-black hidden lg:block'>LOG OUT</button></div>

    {/* Dashboard Cards */}
    <div className="flex md:flex-row flex-col gap-6 mb-8">
      {dashboardItems.map((item, index) => (
        <div
          key={index}
          className=" md:w-1/3 w-full h-52 flex items-end justify-center rounded-md "
          style={{backgroundImage:`url(${item.image})`,
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover'
        }}
        >
          <p className=' text-4xl font-bold mb-6'>Lorem Ipsum</p>
        </div>
      ))}
    </div>

    {/* Account Details Section */}
    <div className="flex flex-col gap-4">
      <div className="bg-gray-100 md:w-1/2 w-full shadow-md rounded-md p-6">
        <h3 className="text-xl text-black font-semibold mb-4">Account Details</h3>
       <div className=' flex justify-between'>
        <div className='space-y-3'>
        <p className="text-gray-700">Yash</p>
        <p className="text-gray-700">yash@example.com</p>
        {/* <p className="text-gray-700">United States</p> */}
        <button className="text-black hover:underline">
          Reset password
        </button>
        </div>
        <div className='space-y-3'>
        <p className="text-gray-700">Rajput</p>
        <p className="text-gray-700">United States</p>
        <p className="text-gray-700">View Address</p>
        </div>
       </div>
      </div>

      <div className="bg-gray-100 md:w-1/2 w-full shadow-md rounded-md p-6">
        <h3 className="text-xl text-black font-semibold mb-4">Most Recent Order</h3>
        <p className="text-gray-700">
          You haven’t placed any orders yet.
        </p>
      </div>
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