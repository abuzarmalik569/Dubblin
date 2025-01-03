import React from 'react'
import Image from 'next/image';
import dash1 from '../../../public/dash1.png'
import dash2 from '../../../public/dash2.png'
import dash3 from '../../../public/dash3.png'
import { MdOutlineDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";




const page = () => {
  const dashboardItems = [
    { title: "Lorem Ipsum", image: dash1 },
    { title: "Lorem Ipsum", image: dash2 },
    { title: "Lorem Ipsum", image: dash3 },
  ];
  return (
    <div className="min-h-screen bg-gray-100 font-Outfit">
    {/* Header Section */}
    <header style={{backgroundImage: "url('/profiletop.png')"}} className=' p-32 bg-cover bg-center'>
     
    </header>

    {/* Main Content */}
    <main className="container mx-auto border">
      <div className="lg:flex gap-8 border">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-1/4 bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold text-black mb-4">My Account</h2>
          <nav>
            <ul className="space-y-2">
              <li className="text-gray-700 font-medium hover:bg-gray-300 p-1 w-1/2 rounded-md  flex items-center gap-4">
              <MdOutlineDashboard className=' text-xl'/>   Dashboard
              </li>
              <li className="text-gray-700 hover:bg-gray-300 p-1 w-1/2 rounded-md  flex items-center gap-4">
                <CiUser className=' text-xl'/>    Personal Info
              </li>
              <li className="text-gray-700 hover:bg-gray-300 p-1 w-1/2 rounded-md  flex items-center gap-4">
                <IoLocationOutline className=' text-xl'/>  Addresses
              </li>
              <li className="text-gray-700 hover:bg-gray-300 p-1 w-1/2 rounded-md  flex items-center gap-4">
                <GrDocumentTime className=' text-xl'/>
                Order History
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Dashboard Section */}
        <div className="flex-1 py-4">
          <h2 className="text-2xl font-semibold text-black mb-6">Dashboard</h2>

          {/* Dashboard Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {dashboardItems.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="responsive"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Account Details Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-xl font-semibold mb-4">Account Details</h3>
              <p className="text-gray-700">Lalit</p>
              <p className="text-gray-700">lalit@example.com</p>
              <p className="text-gray-700">United States</p>
              <button className="text-blue-600 mt-2 hover:underline">
                Reset password
              </button>
            </div>

            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-xl font-semibold mb-4">Most Recent Order</h3>
              <p className="text-gray-700">
                You haven’t placed any orders yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default page

