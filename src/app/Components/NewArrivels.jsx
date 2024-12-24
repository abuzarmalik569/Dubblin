
// import React from 'react';
// import Image from 'next/image';

// const NewArrivals = () => {
//   return (
//     <div className="px-4 py-8 font-Outfit">
//       <h1 className="text-3xl font-bold text-center mt-10 mb-16">New Arrivals</h1>
//       <div className=' flex flex-wrap justify-center text-xl gap-8'>
//         <div>
//             <Image src="/image 9.png" alt="" width={300} height={250}></Image>
//             <h1>Custom Eco-friendly Water<br />
//             bottle</h1>
//             {/* stars  */}
//             <div className=' flex justify-between mt-5'>
//                 <h1>Rs.599.00</h1>
//                 <h1 className=' line-through text-pink-800'>Rs.999.00</h1>
//             </div>
//         </div>
//         <div>
//             <Image src="/image 10.png" alt="" width={300} height={250}></Image>
//             <h1>Custom Eco-friendly Water<br />
//             bottle</h1>
//             {/* stars  */}
//             <div className=' flex justify-between mt-5'>
//                 <h1>Rs.599.00</h1>
//                 <h1 className=' line-through text-pink-800'>Rs.999.00</h1>
//             </div>
//         </div>
//         <div>
//             <Image src="/image 11.png" alt="" width={300} height={250}></Image>
//             <h1>Custom Eco-friendly Water<br />
//             bottle</h1>
//             {/* stars  */}
//             <div className=' flex justify-between mt-5'>
//                 <h1>Rs.599.00</h1>
//                 <h1 className=' line-through text-pink-800'>Rs.999.00</h1>
//             </div>
//         </div>
//         <div>
//             <Image src="/image 12.png" alt="" width={300} height={250}></Image>
//             <h1>Custom Eco-friendly Water<br />
//             bottle</h1>
//             {/* stars  */}
//             <div className=' flex justify-between mt-5'>
//                 <h1>Rs.599.00</h1>
//                 <h1 className=' line-through text-pink-800'>Rs.999.00</h1>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewArrivals;


import React from 'react';
import Image from 'next/image';

const NewArrivals = () => {
  const products = [
    { id: 1, image: '/image 9.png', name: 'Custom Eco-friendly Water Bottle', price: 'Rs.599.00', oldPrice: 'Rs.999.00' },
    { id: 2, image: '/image 10.png', name: 'Custom Eco-friendly Water Bottle', price: 'Rs.599.00', oldPrice: 'Rs.999.00' },
    { id: 3, image: '/image 11.png', name: 'Custom Eco-friendly Water Bottle', price: 'Rs.599.00', oldPrice: 'Rs.999.00' },
    { id: 4, image: '/image 12.png', name: 'Custom Eco-friendly Water Bottle', price: 'Rs.599.00', oldPrice: 'Rs.999.00' },
  ];

  return (
    <div className="px-4 py-8 font-Outfit">
      <h1 className="text-3xl font-bold text-center mt-10 mb-16">New Arrivals</h1>
      <div className="flex flex-wrap justify-center text-xl gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <Image src={product.image} alt={product.name} width={300} height={250} />
            <h1>{product.name}</h1>
            
<div class="flex items-center mt-3">
    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
</div>

            <div className="flex justify-between mt-5">
              <h1>{product.price}</h1>
              <h1 className="line-through text-pink-800">{product.oldPrice}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
