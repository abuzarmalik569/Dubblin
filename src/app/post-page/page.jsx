// import React from 'react'
// import { CalendarDays } from 'lucide-react';
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import Image from 'next/image';

// const page = () => {
//   return (
//     <div className='font-Outfit  text-black w-5/12 text-left mx-auto mt-10'>
//         <div>
//         <h1 className='text-4xl font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
//         </div>
//         <div className=' mt-8 text-sm flex items-center justify-between'>
//             <div className=' flex font-light items-center justify-start gap-3'>
//             <CalendarDays />
//                 <h3>Nov,23,2025</h3>
//             </div>
//             <div className=' flex items-center justify-end gap-3'>
//                 <h3>Share:</h3>
//                 <FaFacebook />
//                 <FaInstagram />
//             </div>
//         </div>
//         <hr className=' mt-8 border-t-2' />
//         <div className='mt-8  text-slate-500 text-base'>
//             <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
//             <Image className=' mt-8 mb-8' src="/postimg.png" alt="post image" width={700} height={500} />
//             <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
//             <h1 className=' mt-8 text-black font-semibold text-2xl mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
//             <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
//             <h1 className=' mt-8 text-black font-semibold text-2xl mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
//             <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
//             <h1 className=' mt-8 text-black font-semibold text-2xl mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
//             <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
//             <h1 className=' mt-8 text-black font-semibold text-2xl mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
//             <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
//             <h1 className=' mt-8 text-black font-semibold text-2xl mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
//             <p className=' mb-14'>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
//         </div>
//     </div>
//   )
// }

// export default page

import React from 'react';
import { CalendarDays } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';

const Page = () => {
  return (
    <div className="font-Outfit text-black w-full px-4 md:px-6 lg:px-8 max-w-2xl mx-auto mt-6 md:mt-10">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h1>
      </div>
      
      <div className="mt-6 md:mt-8 text-sm flex flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="flex font-light items-center justify-start gap-3">
          <CalendarDays className="h-4 w-4" />
          <h3>Nov,23,2025</h3>
        </div>
        <div className="flex items-center justify-end gap-3">
          <h3>Share:</h3>
          <FaFacebook className="h-4 w-4 hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="h-4 w-4 hover:text-pink-600 cursor-pointer" />
        </div>
      </div>

      <hr className="mt-6 md:mt-8 border-t-2" />

      <div className="mt-6 md:mt-8 text-slate-500 text-sm md:text-base">
        <p>
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
        </p>

        <div className="relative w-full aspect-video mt-6 md:mt-8 mb-6 md:mb-8">
          <Image 
            src="/postimg.png" 
            alt="post image" 
            fill
            className="object-cover"
          />
        </div>

        <p>
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        </p>

        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index}>
            <h2 className="mt-6 md:mt-8 text-black font-semibold text-xl md:text-2xl mb-6 md:mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
            <p className={index === 5 ? 'mb-14' : ''}>
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;