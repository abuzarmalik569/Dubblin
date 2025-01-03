
// "use client"

// import React, { useState, useRef } from 'react'
// import Image from 'next/image'
// import { ChevronRight, ChevronDown, Menu, X } from 'lucide-react'
// import { SlidersHorizontal } from 'lucide-react';

// const Page = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const productsRef = useRef(null)
  

//   const products = [
//         { id: 1, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
//         { id: 2, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
//        { id: 3, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
//        { id: 4, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
//        { id: 5, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
//        { id: 6, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
//         { id: 7, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
//        { id: 8, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
//        { id: 10, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
//        { id: 11, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
//        { id: 12, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
//        { id: 13, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
//        { id: 14, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
//        { id: 15, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
//        { id: 16, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
//        { id: 17, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
//        { id: 18, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
//        { id: 19, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
//        { id: 20, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
//        { id: 21, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
//        { id: 22, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
//        { id: 23, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
//        { id: 24, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
//        { id: 25, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
//        // ... (other products)
//      ]

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

//   return (
//     <div className='text-black font-Outfit'>
//       {/* Top banner */}
//       <div className='w-full h-32 sm:h-40 md:h-56 mb-4 sm:mb-8 md:mb-20' style={{
//         backgroundImage: "url('/top.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}>
//         <div className='text-white p-4 sm:p-8 md:p-20'>
//           <div className='flex items-center text-sm sm:text-base'>
//             <h3>home</h3><ChevronRight size={16} /><h3>Product</h3>
//           </div>
//           <div className='text-xl sm:text-2xl md:text-4xl mt-2'>Feature product</div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className='flex flex-col lg:flex-row justify-between relative  max-w-7xl mx-auto'>
//         {/* Sidebar */}
//         <div className={`${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:static left-0  top-0 h-full lg:h-auto z-40 bg-white lg:bg-gray-50 overflow-y-auto lg:overflow-visible w-screen md:w-72  lg:p-4 shadow-lg lg:shadow-none`}>
//           {/* Sidebar content */}
//           <div className='text-left mb-20 w-full lg:w-full '>
//             {/* Categories - Fixed at the top */}
//             <div className="sticky top-0  bg-white lg:bg-gray-50 h-20 z-20   flex justify-between items-center">
//               <h2 className='text-2xl font-semibold p-4 text-gray-800'>Filter</h2>
//               <button onClick={toggleSidebar} className="lg:hidden p-4">
//                 <X size={24} />
//               </button>
//             </div>
            
//             {/* Scrollable content */}
//             <div className='w-full  space-y-2 overflow-y-auto p-4'>
//             <h2 className='text-2xl font-semibold mb-2 text-gray-800'>Categories</h2>
//               {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'].map((category, index) => (
//                 <div key={index} className='flex items-center justify-between'>
//                   <label className="inline-flex items-center">
//                     <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" />
//                     <span className="ml-2 text-gray-700">{category}</span>
//                   </label>
//                   <span className="text-sm text-gray-500">(23)</span>
//                 </div>
//               ))}

//               <hr className='mt-5 w-full border-t-2' />

//               {/* Filter */}
//               <div className='w-full'>
//                 <h2 className='text-2xl font-semibold mb-2 text-gray-800'>Filter</h2>
//                 <p className='text-lg text-gray-600'>10 Products</p>
//               </div>

//               <hr className='mt-5 w-full border-t-2' />

//               {/* Availability */}
//               <div className='w-full'>
//                 <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Availability</h2>
//                 <div className='flex justify-between items-center mb-4'>
//                   <p className='text-gray-600'>0 selected</p>
//                   <button className='text-pink-600 hover:text-pink-700 transition-colors duration-200'>Reset</button>
//                 </div>
//                 <div className='space-y-2'>
//                   {['In stock', 'Out of stock'].map((option, index) => (
//                     <div key={index} className='flex items-center justify-between'>
//                       <label className="inline-flex items-center">
//                         <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" />
//                         <span className="ml-2 text-gray-700">{option}</span>
//                       </label>
//                       <span className="text-sm text-gray-500">(23)</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <hr className='mt-5 w-full border-t-2' />

//               {/* Price Range */}
//               <div className='w-full'>
//                 <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Price Range</h2>
//                 <div className='flex justify-between items-center mb-4'>
//                   <p className='text-sm text-gray-600'>The highest price is ₹589.00</p>
//                   <button className='text-pink-600 hover:text-pink-700 transition-colors duration-200'>Reset</button>
//                 </div>
//                 <div className='w-full h-2 bg-gray-200 rounded-full mb-4'>
//                   <div className='w-2/3 h-full bg-pink-600 rounded-full'></div>
//                 </div>
//                 <div className='flex justify-between items-center'>
//                   <div>
//                     <label htmlFor="min-price" className="block text-sm font-medium text-gray-700 mb-1">From</label>
//                     <div className='relative'>
//                       <span className='absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600'>₹</span>
//                       <input type="number" id="min-price" className='form-input pl-7 w-24 rounded-md border-gray-300' placeholder="0" />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="max-price" className="block text-sm font-medium text-gray-700 mb-1">To</label>
//                     <div className='relative'>
//                       <span className='absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600'>₹</span>
//                       <input type="number" id="max-price" className='form-input pl-7 w-24 rounded-md border-gray-300' placeholder="589" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <hr className='mt-5 w-full border-t-2' />

//               {/* Color */}
//               <div className='w-full'>
//                 <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Color</h2>
//                 <div className='flex flex-wrap gap-2'>
//                   {['pink', 'red', 'yellow', 'green', 'black', 'blue', 'purple', 'gray'].map((color, index) => (
//                     <button key={index} className={`w-8 h-8 rounded-full bg-${color}-500 border-2 border-gray-200 hover:border-gray-400 transition-colors duration-200`}></button>
//                   ))}
//                 </div>
//               </div>

//               <hr className='mt-5 w-full border-t-2' />

//               {/* Size */}
//               <div className='w-full'>
//                 <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Size</h2>
//                 <div className='flex justify-between items-center mb-4'>
//                   <p className='text-gray-600'>0 selected</p>
//                   <button className='text-pink-600 hover:text-pink-700 transition-colors duration-200'>Reset</button>
//                 </div>
//                 <div className='space-y-2'>
//                   {['100ml', '250ml', '500ml', '750ml'].map((size, index) => (
//                     <div key={index} className='flex items-center justify-between'>
//                       <label className="inline-flex items-center">
//                         <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" />
//                         <span className="ml-2 text-gray-700">{size}</span>
//                       </label>
//                       <span className="text-sm text-gray-500">(23)</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <hr className='mt-5 w-full border-t-2' />

//               {/* Promo banner */}
//               <div className='h-72 w-full rounded-lg overflow-hidden relative shadow-md'>
//                 <Image src="/lunch.png" layout="fill" objectFit="cover" alt="Lunch Box" />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
//                 <div className='absolute inset-0 flex flex-col items-center justify-end p-6 text-center'>
//                   <h2 className='text-3xl font-bold text-white mb-2'>Lunch Box</h2>
//                   <button className='bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-200'>Shop Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main content */}
//         <div className='w-full lg:w-3/4  lg:mt-0'>
//           {/* Feature product heading with toggle button */}
//           <div className='flex h-20 bg-white sticky top-0 z-20 justify-between items-center mb-5'>
//           <button
//               className='lg:hidden text-black '
//               onClick={toggleSidebar}
//             >
//               {isSidebarOpen ? <X size={24} /> : <SlidersHorizontal size={24} />}
//             </button>
//             <h1 className='font-medium text-2xl'>Feature product(9)</h1>
            
//           </div>

//           {/* Banners */}
//           <div className='flex px-4 flex-col mx-auto md:flex-row mb-5'>
//   <div
//     className='relative text-white h-60 w-full  bg-cover bg-center'
//     style={{ backgroundImage: "url('/rightbanner.png')" }}
//   >
//     <div className='absolute inset-0 flex flex-col justify-center p-4 md:p-8'>
//       <p className='text-xs sm:text-sm md:text-base font-medium'>Up to 30% off</p>
//       <h1 className='text-lg sm:text-xl md:text-2xl font-bold mt-2 max-w-xs'>
//         Lorem Ipsum is simply dummy text of the
//       </h1>
//       <button className="bg-red-700 px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium mt-3 sm:mt-4 md:mt-6 w-fit hover:bg-red-800 transition-colors duration-300 text-xs sm:text-sm md:text-base">
//         Shop Now
//       </button>
//     </div>
//   </div>
//   <div
//     className='bg-cover h-60 w-full  bg-center'
//     style={{ backgroundImage: "url('/leftbanner.png')" }}
//   >
//     <div className='h-full w-full'></div>
//   </div>
// </div>


//           {/* Sort options */}
//           <div className='flex justify-end items-center gap-5 mt-5'>
//             <p className='text-pink-800'>Sort by:</p>
//             <p>best selling</p>
//             <ChevronDown />
//           </div>

//           {/* Products grid */}
//           <div ref={productsRef} className="grid px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-5 mb-16">
//             {products.map(product => (
//               <div 
//                 key={product.id}
//                 className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
//               >
//                 <div className="relative aspect-square overflow-hidden">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-300 group-hover:scale-105"
//                   />
//                   {product.badge && (
//                     <div className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
//                       {product.badge}
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="p-3 sm:p-4 bg-white">
//                   <h3 className="text-sm sm:text-base font-medium mb-2 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center justify-between">
//                     <span className="text-base sm:text-lg font-semibold">
//                       ₹{product.price.toFixed(2)}
//                     </span>
//                     <span className="text-pink-700 line-through text-xs sm:text-sm">
//                       ₹{product.oldPrice.toFixed(2)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Overlay for small screens when sidebar is open */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       <div className='w-32 h-20 border mx-auto'>
// <p></p>
//       </div>
//     </div>
//   )
// }

// export default Page

"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronRight, ChevronDown, Menu, X, ChevronLeft } from 'lucide-react'
import { SlidersHorizontal } from 'lucide-react';

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const productsRef = useRef(null)

  const products = [
    { id: 1, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 2, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 3, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 4, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 5, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 6, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 7, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 8, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 10, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 11, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 12, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 13, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 14, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 15, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 16, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 17, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 18, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 19, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 20, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 21, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 22, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 23, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 24, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 25, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    // ... (other products)
  ]

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className='text-black font-Outfit'>
      {/* Top banner */}
      <div className='w-full h-32 sm:h-40 md:h-56 mb-4 sm:mb-8 md:mb-20' style={{
        backgroundImage: "url('/top.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className='text-white p-4 sm:p-8 md:p-20'>
          <div className='flex items-center text-sm sm:text-base'>
            <h3>home</h3><ChevronRight size={16} /><h3>Product</h3>
          </div>
          <div className='text-xl sm:text-2xl md:text-4xl mt-2'>Feature product</div>
        </div>
      </div>

      {/* Main content */}
      <div className='flex flex-col lg:flex-row justify-between relative  max-w-7xl mx-auto'>
        {/* Sidebar */}
        <div className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:static left-0  top-0 h-full lg:h-auto z-40 bg-white lg:bg-gray-50 overflow-y-auto lg:overflow-visible w-screen md:w-72  lg:p-4 shadow-lg lg:shadow-none`}>
          {/* Sidebar content */}
          <div className='text-left mb-20 w-full lg:w-full '>
            {/* Categories - Fixed at the top */}
            <div className="sticky top-0  bg-white lg:bg-gray-50 h-20 z-20   flex justify-between items-center">
              <h2 className='text-2xl font-semibold p-4 text-gray-800'>Filter</h2>
              <button onClick={toggleSidebar} className="lg:hidden p-4">
                <X size={24} />
              </button>
            </div>
            
            {/* Scrollable content */}
            <div className='w-full  space-y-2 overflow-y-auto p-4'>
            <h2 className='text-2xl font-semibold mb-2 text-gray-800'>Categories</h2>
              {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'].map((category, index) => (
                <div key={index} className='flex items-center justify-between'>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                  <span className="text-sm text-gray-500">(23)</span>
                </div>
              ))}

              <hr className='mt-5 w-full border-t-2' />

              {/* Filter */}
              <div className='w-full'>
                <h2 className='text-2xl font-semibold mb-2 text-gray-800'>Filter</h2>
                <p className='text-lg text-gray-600'>10 Products</p>
              </div>

              <hr className='mt-5 w-full border-t-2' />

              {/* Availability */}
              <div className='w-full'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Availability</h2>
                <div className='flex justify-between items-center mb-4'>
                  <p className='text-gray-600'>0 selected</p>
                  <button className='text-pink-600 hover:text-pink-700 transition-colors duration-200'>Reset</button>
                </div>
                <div className='space-y-2'>
                  {['In stock', 'Out of stock'].map((option, index) => (
                    <div key={index} className='flex items-center justify-between'>
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" />
                        <span className="ml-2 text-gray-700">{option}</span>
                      </label>
                      <span className="text-sm text-gray-500">(23)</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className='mt-5 w-full border-t-2' />

              {/* Price Range */}
              <div className='w-full'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Price Range</h2>
                <div className='flex justify-between items-center mb-4'>
                  <p className='text-sm text-gray-600'>The highest price is ₹589.00</p>
                  <button className='text-pink-600 hover:text-pink-700 transition-colors duration-200'>Reset</button>
                </div>
                <div className='w-full h-2 bg-gray-200 rounded-full mb-4'>
                  <div className='w-2/3 h-full bg-pink-600 rounded-full'></div>
                </div>
                <div className='flex justify-between items-center'>
                  <div>
                    <label htmlFor="min-price" className="block text-sm font-medium text-gray-700 mb-1">From</label>
                    <div className='relative'>
                      <span className='absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600'>₹</span>
                      <input type="number" id="min-price" className='form-input pl-7 w-24 rounded-md border-gray-300' placeholder="0" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="max-price" className="block text-sm font-medium text-gray-700 mb-1">To</label>
                    <div className='relative'>
                      <span className='absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600'>₹</span>
                      <input type="number" id="max-price" className='form-input pl-7 w-24 rounded-md border-gray-300' placeholder="589" />
                    </div>
                  </div>
                </div>
              </div>

              <hr className='mt-5 w-full border-t-2' />

              {/* Color */}
              <div className='w-full'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Color</h2>
                <div className='flex flex-wrap gap-2'>
                  {['pink', 'red', 'yellow', 'green', 'black', 'blue', 'purple', 'gray'].map((color, index) => (
                    <button key={index} className={`w-8 h-8 rounded-full bg-${color}-500 border-2 border-gray-200 hover:border-gray-400 transition-colors duration-200`}></button>
                  ))}
                </div>
              </div>

              <hr className='mt-5 w-full border-t-2' />

              {/* Size */}
              <div className='w-full'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Size</h2>
                <div className='flex justify-between items-center mb-4'>
                  <p className='text-gray-600'>0 selected</p>
                  <button className='text-pink-600 hover:text-pink-700 transition-colors duration-200'>Reset</button>
                </div>
                <div className='space-y-2'>
                  {['100ml', '250ml', '500ml', '750ml'].map((size, index) => (
                    <div key={index} className='flex items-center justify-between'>
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" />
                        <span className="ml-2 text-gray-700">{size}</span>
                      </label>
                      <span className="text-sm text-gray-500">(23)</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <hr className='mt-5 w-full border-t-2' />

              {/* Promo banner */}
              <div className='h-72 w-full rounded-lg overflow-hidden relative shadow-md'>
                <Image src="/lunch.png" layout="fill" objectFit="cover" alt="Lunch Box" />
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-end p-6 text-center'>
                  <h2 className='text-3xl font-bold text-white mb-2'>Lunch Box</h2>
                  <button className='bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-200'>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className='w-full lg:w-3/4  lg:mt-0'>
          {/* Feature product heading with toggle button */}
          <div className='flex h-20 bg-white sticky top-0 z-20 justify-between items-center mb-5'>
          <button
              className='lg:hidden text-black '
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <X size={24} /> : <SlidersHorizontal size={24} />}
            </button>
            <h1 className='font-medium text-2xl'>Feature product(9)</h1>
            
          </div>

          {/* Banners */}
          <div className='flex px-4 flex-col mx-auto md:flex-row mb-5'>
  <div
    className='relative text-white h-60 w-full  bg-cover bg-center'
    style={{ backgroundImage: "url('/rightbanner.png')" }}
  >
    <div className='absolute inset-0 flex flex-col justify-center p-4 md:p-8'>
      <p className='text-xs sm:text-sm md:text-base font-medium'>Up to 30% off</p>
      <h1 className='text-lg sm:text-xl md:text-2xl font-bold mt-2 max-w-xs'>
        Lorem Ipsum is simply dummy text of the
      </h1>
      <button className="bg-red-700 px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium mt-3 sm:mt-4 md:mt-6 w-fit hover:bg-red-800 transition-colors duration-300 text-xs sm:text-sm md:text-base">
        Shop Now
      </button>
    </div>
  </div>
  <div
    className='bg-cover h-60 w-full  bg-center'
    style={{ backgroundImage: "url('/leftbanner.png')" }}
  >
    <div className='h-full w-full'></div>
  </div>
</div>


          {/* Sort options */}
          <div className='flex justify-end items-center gap-5 mt-5'>
            <p className='text-pink-800'>Sort by:</p>
            <p>best selling</p>
            <ChevronDown />
          </div>

          {/* Products grid */}
          <div ref={productsRef} className="grid px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-5 mb-16">
            {products.map(product => (
              <div 
                key={product.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                      {product.badge}
                    </div>
                  )}
                </div>
                
                <div className="p-3 sm:p-4 bg-white">
                  <h3 className="text-sm sm:text-base font-medium mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-semibold">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <span className="text-pink-700 line-through text-xs sm:text-sm">
                      ₹{product.oldPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for small screens when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Page changer */}
      <div className="flex justify-center items-center space-x-4 mt-8 mb-8">
        <button 
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-lg font-semibold">{currentPage}</span>
        <button 
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default Page

