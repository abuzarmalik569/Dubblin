'use client'
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import bottle1 from '../../../public/bottle3.png'
import bottle2 from '../../../public/bottle4.png'
import { RiDeleteBin6Line } from "react-icons/ri";

import Link from 'next/link';
import Image from 'next/image';


const BillingPage = () => {

    const[show ,setShow]=useState('hidden')
    const[check ,setCheck]=useState(false)
    const handleForm=()=>{
        
        check===false?setShow('block'):setShow('hidden')
        setCheck(true)
    }

    const [cartItems, setCartItems] = useState([
        {
          id: 1,
          name: "Custom Eco-friendly Water Bottle",
          size: "500ml",
          price: 930,
          quantity: 1,
          image: bottle1, // Replace with actual image path
        },
        {
          id: 2,
          name: "Custom Eco-friendly Water Bottle",
          size: "500ml",
          price: 930,
          quantity: 1,
          image: bottle2, // Replace with actual image path
        },
        {
            id: 3,
            name: "Custom Eco-friendly Water Bottle",
            size: "500ml",
            price: 830,
            quantity: 1,
            image: bottle2, // Replace with actual image path
          },
      ]);
    
      const [discountCode, setDiscountCode] = useState("");
      const [appliedDiscount, setAppliedDiscount] = useState(0);
    
      const handleQuantityChange = (id, type) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: type === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                }
              : item
          )
        );
      };
    
      const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      };
    
      const handleApplyDiscount = () => {
        if (discountCode === "SAVE10") {
          setAppliedDiscount(10); // Flat ₹10 discount
        } else {
          setAppliedDiscount(0); // Invalid code
        }
      };
    
      const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
      const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal - appliedDiscount;
      };
    
  return (
    <div className=' flex font-Outfit'>
        
    <div className="w-1/2 flex flex-col items-center py-10 pl-24 pr-12 ">
      <div className="w-full">
        <div className="flex justify-center mb-8">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Dublin Logo"
            className=" w-28"
          />
        </div>
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Shipping address</h2>
        <form className="space-y-6">
          <div className=' border-gray-300 border p-1 rounded-lg'>
            <label htmlFor="country" className="block text-xs font-medium text-gray-700">
              Country/Region
            </label>
            <select
              id="country"
              placeholder="Country"
              name="country"
              className="block w-full border-gray-300 sm:text-md"
            >
              {/* <option disabled selected>Country/Region</option> */}
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
         
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder='First Name'
                className="mt-1 py-3 px-2 block w-full border-gray-300 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-1/2">
             
              <input
                type="text"
                id="last-name"
                placeholder='Last Name'
                name="last-name"
                className="mt-1 block py-3 px-2 w-full border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className='border-gray-300 border rounded-md flex items-center'>
            
            <input
              type="text"
              id="address"
              name="address"
              placeholder='Address'
              className="mt-1 block h-full py-3 px-2 w-full  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <IoIosSearch className=' text-xl text-gray-400 m-2'/>
          </div>

          <div>
            {/* <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
              Apartment, suite, etc. (optional)
            </label> */}
            <input
              type="text"
              id="apartment"
              name="apartment"
              placeholder='Apartment, suite, etc. (optional)'
              className="mt-1 py-3 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/3">
              {/* <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label> */}
              <input
                type="text"
                id="city"
                name="city"
                placeholder='City'
                className="mt-1 py-3 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-1/3 border border-gray-300 px-1 pt-1 rounded-md">
              <label htmlFor="state" className="block text-[10px] font-medium text-gray-700">
                State
              </label>
              <select
                id="state"
                name="state"
                className="mt-1 block w-full text-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Haryana</option>
                <option>Delhi</option>
                <option>Punjab</option>
              </select>
            </div>
            <div className="w-1/3 border border-gray-300 p-1 rounded-md">
              <label htmlFor="pin-code" className="block text-[10px] font-medium text-gray-700">
                Pin code
              </label>
              <input
                type="text"
                id="pin-code"
                name="pin-code"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                placeholder="000000"
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label> */}
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder='Phone'
              className="mt-1 py-3 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

         
        </form>
      </div>

      {/* Billing Adress */}
      <div className=' w-full mt-14'>
        <h1 className=' text-lg font-semibold mb-6 text-gray-800'>Billing Address</h1>
        <div className=' space-y-4'>
            <div className=' flex border border-gray-300 rounded-md py-3 px-2 gap-8'>
                <input type="checkbox" />
                <p className=' text-gray-400'>Same as Shipping Address</p>
            </div>
            <div>
               <div className=' flex border border-gray-300 rounded-md py-3 px-2 gap-8'>
                <input type="checkbox" onChange={handleForm} checked={check}/>
                <p className=' text-gray-400'>Use a different Billing Address</p>
               </div>
               <form className={` space-y-6 ${show}`}>
          <div className=' border-gray-300 border p-1 rounded-lg'>
            <label htmlFor="country" className="block text-xs font-medium text-gray-700">
              Country/Region
            </label>
            <select
              id="country"
              placeholder="Country"
              name="country"
              className="block w-full border-gray-300 sm:text-md"
            >
              {/* <option disabled selected>Country/Region</option> */}
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
         
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder='First Name'
                className="mt-1 py-3 px-2 block w-full border-gray-300 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-1/2">
             
              <input
                type="text"
                id="last-name"
                placeholder='Last Name'
                name="last-name"
                className="mt-1 block py-3 px-2 w-full border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className='border-gray-300 border rounded-md flex items-center'>
            
            <input
              type="text"
              id="address"
              name="address"
              placeholder='Address'
              className="mt-1 block h-full py-3 px-2 w-full  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <IoIosSearch className=' text-xl text-gray-400 m-2'/>
          </div>

          <div>
            {/* <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
              Apartment, suite, etc. (optional)
            </label> */}
            <input
              type="text"
              id="apartment"
              name="apartment"
              placeholder='Apartment, suite, etc. (optional)'
              className="mt-1 py-3 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/3">
              {/* <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label> */}
              <input
                type="text"
                id="city"
                name="city"
                placeholder='City'
                className="mt-1 py-3 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-1/3 border border-gray-300 px-1 pt-1 rounded-md">
              <label htmlFor="state" className="block text-[10px] font-medium text-gray-700">
                State
              </label>
              <select
                id="state"
                name="state"
                className="mt-1 block w-full text-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Haryana</option>
                <option>Delhi</option>
                <option>Punjab</option>
              </select>
            </div>
            <div className="w-1/3 border border-gray-300 p-1 rounded-md">
              <label htmlFor="pin-code" className="block text-[10px] font-medium text-gray-700">
                Pin code
              </label>
              <input
                type="text"
                id="pin-code"
                name="pin-code"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                placeholder="000000"
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label> */}
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder='Phone'
              className="mt-1 py-3 px-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

         
               </form>
            </div>
        </div>
        <Link href={''} className=' flex items-center gap-2 mt-5 '> <FaAngleLeft className=' text-red-800 text-sm'/> <p className=' text-red-800 text-sm'> Return to Cart</p> </Link>
      </div>
    </div>
    
        <div className='w-1/2 bg-slate-50 py-10'>
        <div className="p-4">
      <div className=" w-11/12 mx-auto p-6 bg-slate-50">
        {/* <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1> */}
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-around  mb-4 ">
           <div className='w-1/4 '> <Image src={item.image} alt={item.name} className=" w-full h-full rounded" /></div>
            <div className="flex-grow  w-1/2 flex justify-between px-3 py-2">
             <div>
             <h2 className="font-medium text-gray-700">{item.name}</h2>
              <p className="text-xs text-gray-500">{item.size}</p>
              <p className="text-sm font-semibold text-gray-700">₹{item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleQuantityChange(item.id, "decrement")}
                  className="px-2 py-1 border border-gray-300 text-gray-700 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-300 text-gray-700">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, "increment")}
                  className="px-2 py-1 border border-gray-300 rounded-r text-gray-700"
                >
                  +
                </button>
              </div>
             </div>
          <div>
          <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-500 hover:text-red-700 text-lg py-1"
            >
              <RiDeleteBin6Line/>
            </button>
          </div>
            </div>
           <div className=' w-1/6 h-28 text-end py-2 '>
           <p className="font-medium text-gray-700">₹{item.price * item.quantity}</p>
           </div>
          </div>
        ))}

        <div className="border-t mt-4 pt-4">
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Discount code or gift card"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="flex-grow border rounded px-4 py-2"
            />
            <button
              onClick={handleApplyDiscount}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Apply
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <p className=' text-gray-700'>Subtotal</p>
              <p className=' text-gray-400'>₹{calculateSubtotal()}</p>
            </div>
            <div className="flex justify-between">
              <p className=' text-gray-700'>Discount</p>
              <p className=' text-gray-400'>₹{appliedDiscount}</p>
            </div>
            <div className="flex justify-between">
              <p className=' text-gray-700'>Shipping</p>
              <p className=' text-gray-400'>Enter shipping address</p>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold">
            <p className='text-gray-700'>Total</p>
            <p className='text-gray-400'>₹{calculateTotal()}</p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 mt-6 rounded">
          Pay Now
        </button>
      </div>
    </div>
        </div>
    </div>
  )
}

export default BillingPage