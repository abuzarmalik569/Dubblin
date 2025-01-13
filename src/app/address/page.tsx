'use client'

import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { GrDocumentTime } from 'react-icons/gr'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineDashboard } from 'react-icons/md'
import { Dashboard, PersonalInfo, EditAddress, OrderHistory } from '../profile/page'
import Link from 'next/link'

// Define interfaces for form data
interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  province: string;
  postalCode: string;
  phone: string;
  isDefault: boolean;
}

// Define interface for event handlers
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLSelectElement> {
  target: HTMLInputElement | HTMLSelectElement;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    address1: '',
    address2: '',
    city: '',
    country: 'United States',
    province: 'Alabama',
    postalCode: '',
    phone: '',
    isDefault: false,
  });

  const handleChange = (e: InputChangeEvent): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleUpdate = (): void => {
    // Handle update logic here
    console.log('Updated Address:', formData);
  };

  const handleCancel = (): void => {
    // Handle cancel logic here
    console.log('Cancelled');
  };

  return (
    <div className="font-Outfit">
      {/* Header Section */}
      <header style={{backgroundImage: "url('/profiletop.png')"}} className='p-32 bg-cover bg-center'>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-5">
        <div className="lg:flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-1/6 bg-white p-4">
            <h2 className="text-2xl text-black mb-4">My Account</h2>
            <nav>
              <ul className="space-y-2">
                <Link href='/dashboard'>
                  <li className="text-gray-700 font-medium hover:bg-gray-300 p-1 rounded-md flex items-center gap-4 cursor-pointer">
                    <MdOutlineDashboard className='text-xl'/> Dashboard
                  </li>
                </Link>
                <Link href='/personal-info'>
                  <li className="text-gray-700 hover:bg-gray-300 p-1 rounded-md flex items-center gap-4 cursor-pointer">
                    <CiUser className='text-xl'/> Personal Info
                  </li>
                </Link>
                <Link href='/address'>
                  <li className="text-gray-700 hover:bg-gray-300 p-1 rounded-md flex items-center gap-4 cursor-pointer">
                    <IoLocationOutline className='text-xl'/> Addresses
                  </li>
                </Link>
                <Link href='/order-history'>
                  <li className="text-gray-700 hover:bg-gray-300 p-1 rounded-md flex items-center gap-4 cursor-pointer">
                    <GrDocumentTime className='text-xl'/> Order History
                  </li>
                </Link>
              </ul>
            </nav>
          </aside>

          {/* Main Dashboard Section */}
          <div className='w-full mt-5 p-4 lg:p-0'>
            <div className='flex justify-between mb-6'>
              <h2 className="text-2xl text-black">Addresses</h2>
              <button className='text-black hidden lg:block'>LOG OUT</button>
            </div>

            <div className="md:w-1/2 w-full bg-slate-50 px-6 py-2 rounded-md">
              <div className="space-y-3">
                <p className="text-gray-500 text-md">Default</p>
                <p className="text-md text-gray-500">Lalit Joshi</p>
                <p className="text-gray-600 text-md">United States</p>
              </div>
              <div className="flex justify-between mb-6 mt-5 w-1/3">
                <button className="bg-black text-white py-1 text-sm px-5 rounded-sm">Edit</button>
                <button className="bg-red-500 text-white text-sm py-1 px-3 rounded-sm">Delete</button>
              </div>
              <form>
                <h3 className="text-lg text-black font-medium mb-4">Edit Address</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className='text-black text-md'>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border p-2 mt-2 rounded-md w-full"
                    />
                  </div>
                  <div>
                    <label className='text-black text-md'>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border p-2 rounded-md w-full mt-2"
                    />
                  </div>
                  <div>
                    <label className='text-black text-md'>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border p-2 rounded-md w-full mt-2"
                    />
                  </div>
                  <div>
                    <label className='text-black text-md'>Address 1</label>
                    <input
                      type="text"
                      name="address1"
                      value={formData.address1}
                      onChange={handleChange}
                      className="border p-2 rounded-md w-full mt-2"
                    />
                  </div>
                  <div>
                    <label className='text-black text-md'>Address 2</label>
                    <input
                      type="text"
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                      className="border p-2 rounded-md w-full mt-2"
                    />
                  </div>
                  <div>
                    <label className='text-black text-md'>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="border p-2 rounded-md w-full mt-2"
                    />
                  </div>
                  <div>
                    <label className='text-black'>Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="border p-2 rounded-md w-full"
                    >
                      <option value="United States">United States</option>
                      {/* Add other countries as needed */}
                    </select>
                  </div>
                  <div>
                    <label className='text-black'>Province</label>
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="border p-2 rounded-md w-full"
                    >
                      <option value="Alabama">Alabama</option>
                      {/* Add other provinces as needed */}
                    </select>
                  </div>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal/Zip Code"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="border p-2 rounded-md w-full"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border p-2 rounded-md w-full"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="isDefault"
                      checked={formData.isDefault}
                      onChange={handleChange}
                      className="h-4 w-4"
                    />
                    <label htmlFor="isDefault" className="text-sm">
                      Set as default address
                    </label>
                  </div>
                </div>
                <div className="flex mt-6 gap-4">
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-black text-white px-4 py-2 rounded-sm"
                  >
                    Update Address
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-300 px-4 py-2 rounded-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <div style={{backgroundImage: "url('/profilebottom.png')"}} className='h-[80vh] mt-8 flex items-end bg-cover bg-center'>
        <p className='font-bold text-5xl w-1/2 mb-32 ml-20 text-white'>Lorem Ipsum is simply dummy text of the printing</p>
      </div>
    </div>
  )
}

export default Page