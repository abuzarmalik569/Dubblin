// import React from 'react';
// import Image from "next/image";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaChevronDown } from "react-icons/fa";

// const ExpandableSection = ({ title, children }) => (
//   <details className="group md:hidden">
//     <summary className="list-none flex justify-between items-center cursor-pointer">
//       <h3 className='text-lg font-semibold'>{title}</h3>
//       <FaChevronDown className="transform group-open:rotate-180 transition-transform" />
//     </summary>
//     <div className="mt-2">
//       {children}
//     </div>
//   </details>
// );

// const Footer = () => {
//   return (
//     <footer className='font-Outfit border text-black bg-white'>
//       {/* Newsletter Section */}
//       <div className='p-4 sm:p-10 w-full bg-cover bg-center bg-no-repeat'
//         style={{
//           backgroundImage: "url('/footer.png')",
//         }}>
//         <div className='flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto'>
//           <div className='text-white font-semibold text-2xl sm:text-3xl mb-4 sm:mb-0 text-center sm:text-left'>
//             <h2>JOIN OUR <br />NEWSLETTER</h2>
//           </div>
          
//           <div className="relative w-full  sm:w-[500px] bg-gray-100 rounded-2xl shadow-md p-1.5">
//             <input
//               type="email"
//               className="w-full pl-2  py-4 text-base sm:text-xl text-black bg-transparent rounded-lg focus:outline-none"
//               placeholder="Enter Email"
//             />
//             <button
//               className="absolute right-0 top-0 bottom-0 px-4 sm:px-6 bg-red-800 text-white font-medium rounded-xl focus:outline-none text-sm sm:text-base"
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className='mt-5 max-w-7xl mx-auto '>
//         <div className='grid px-4 sm:px-6 lg:px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24'>
//           {/* Company Info */}
//           <div className='space-y-6'>
//             <Image src="/logo.png" alt="Dubblin Logo" width={100} height={100} />
//             <p className='text-sm'>Dubblin as a Brand in the industry has flourished as an importer of household products. Over the years since its inception in 2008, the company has focused its activities on importing of household goods.</p>
//             <h2 className='border-y-2 border-yellow-700 w-28 text-center text-xl'>Follow us</h2>
//             <div className='flex gap-4 text-3xl'>
//               <FaFacebook className="hover:text-blue-600 cursor-pointer" />
//               <FaInstagram className="hover:text-pink-600 cursor-pointer" />
//               <FaTwitter className="hover:text-blue-400 cursor-pointer" />
//               <FaYoutube className="hover:text-red-600 cursor-pointer" />
//               <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
//             </div>
//           </div>

//           {/* Useful Links */}
//           <div>
//   <ExpandableSection title="Useful Links">
//     <ul className='space-y-2 list-disc text-sm'>
//     <li><a href="/shop" className="hover:underline">Shop</a></li>
//       <li><a href="/faqs" className="hover:underline">FAQs</a></li>
//       <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
//       <li><a href="/return-policy" className="hover:underline">Refund and Returns Policy</a></li>
//       <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
//       <li><a href="/shipping-policy" className="hover:underline">Shipping Policy</a></li>
//     </ul>
//   </ExpandableSection>
//   <div className="hidden md:block">
//     <h3 className='mb-4 text-lg font-semibold'>Useful Links</h3>
//     <ul className='space-y-2 list-disc text-sm'>
//     <li><a href="/shop" className="hover:underline">Shop</a></li>
//       <li><a href="/faqs" className="hover:underline">FAQs</a></li>
//       <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
//       <li><a href="/return-policy" className="hover:underline">Refund and Returns Policy</a></li>
//       <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>

//       <li><a href="/shipping-policy" className="hover:underline">Shipping Policy</a></li>
//     </ul>
//   </div>
// </div>


//           {/* Contact Us */}
//           <div>
//             <ExpandableSection title="Contact Us">
//               <p className='text-pink-700 mb-2'>Sona Enterprises</p>
//               <ul className=' list-disc space-y-2 text-sm'>
//                 <li>Phone: +91 9810533519</li>
//                 <li>11:00AM - 5:00PM Mon-Sat</li>
//                 <li>info@dubblin.co.in</li>
//                 <li>Sona Enterprises, Sardar Thana Road, Delhi - 110006</li>
//               </ul>
//             </ExpandableSection>
//             <div className="hidden md:block">
//               <h3 className='mb-4 text-lg font-semibold'>Contact Us</h3>
//               <p className='text-pink-700 mb-2'>Sona Enterprises</p>
//               <ul className='space-y-2 list-disc text-sm'>
//                 <li>Phone: +91 9810533519</li>
//                 <li>11:00AM - 5:00PM Mon-Sat</li>
//                 <li>info@dubblin.co.in</li>
//                 <li>Sona Enterprises, Sardar Thana Road, Delhi - 110006</li>
//               </ul>
//             </div>
//           </div>

//           {/* Online Channel Partner */}
//           <div>
//             <ExpandableSection title="Online Channel Partner">
//               <p className='text-pink-700 mb-2'>BARIZTA TECHNOLOGIES PRIVATE LIMITED</p>
//               <ul className='space-y-2 list-disc text-sm'>
//                 <li>Phone: +91 7838388836</li>
//                 <li>dubblinofficial@gmail.com</li>
//                 <li>Primary Address: Plot No 568, Udyog Vihar, Phase-5 Gurgaon, Haryana 122016, India</li>
//                 <li>Secondary Address: WZ-90/3, KESHOPUR, Vikaspuri, New Delhi, West Delhi, Delhi, 110018</li>
//               </ul>
//             </ExpandableSection>
//             <div className="hidden md:block">
//               <h3 className='mb-4 text-lg font-semibold'>Online Channel Partner</h3>
//               <p className='text-pink-700 mb-2'>BARIZTA TECHNOLOGIES PRIVATE LIMITED</p>
//               <ul className='space-y-2 list-disc text-sm'>
//                 <li>Phone: +91 7838388836</li>
//                 <li>dubblinofficial@gmail.com</li>
//                 <li>Primary Address: Plot No 568, Udyog Vihar, Phase-5 Gurgaon, Haryana 122016, India</li>
//                 <li>Secondary Address: WZ-90/3, KESHOPUR, Vikaspuri, New Delhi, West Delhi, Delhi, 110018</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='mt-4 py-4 bg-black text-white text-center text-sm border-t'>
//           <p>Copyright &copy; {new Date().getFullYear()} Dubblin |Developed By Aarvy Technologies.</p>
//         </div>
//     </footer>
//   )
// }

// export default Footer;

'use client'

import React, { useState } from 'react';
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaChevronDown } from "react-icons/fa";

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        className="w-full text-left py-2 text-lg font-semibold flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        <FaChevronDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      {isExpanded && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='font-Outfit  text-black bg-white'>
      {/* Newsletter Section */}
      <div className='p-4 sm:p-10 w-full bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/footer.png')",
        }}>
        <div className='flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto'>
          <div className='text-white font-semibold text-2xl sm:text-3xl mb-4 sm:mb-0 text-center sm:text-left'>
            <h2>JOIN OUR <br />NEWSLETTER</h2>
          </div>
          
          <div className="relative w-full  sm:w-[500px] bg-gray-100 rounded-2xl shadow-md p-1.5">
            <input
              type="email"
              className="w-full pl-2  py-4 text-base sm:text-xl text-black bg-transparent rounded-lg focus:outline-none"
              placeholder="Enter Email"
            />
            <button
              className="absolute right-0 top-0 bottom-0 px-4 sm:px-6 bg-red-800 text-white font-medium rounded-xl focus:outline-none text-sm sm:text-base"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='mt-5 max-w-7xl mx-auto '>
        <div className='grid px-4 sm:px-6 lg:px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24'>
          {/* Company Info */}
          <div className='space-y-6'>
            <Image src="/logo.png" alt="Dubblin Logo" width={100} height={100} />
            <p className='text-sm'>Dubblin as a Brand in the industry has flourished as an importer of household products. Over the years since its inception in 2008, the company has focused its activities on importing of household goods.</p>
            <h2 className='border-y-2 border-yellow-700 w-28 text-center text-xl'>Follow us</h2>
            <div className='flex gap-4 text-3xl'>
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-600 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <ExpandableSection title="Useful Links">
              <ul className='space-y-2 list-disc text-sm'>
                <li><a href="/shop" className="hover:underline">Shop</a></li>
                <li><a href="/faqs" className="hover:underline">FAQs</a></li>
                <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="/return-policy" className="hover:underline">Refund and Returns Policy</a></li>
                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/shipping-policy" className="hover:underline">Shipping Policy</a></li>
              </ul>
            </ExpandableSection>
            <div className="hidden md:block">
              <h3 className='mb-4 text-lg font-semibold'>Useful Links</h3>
              <ul className='space-y-2 list-disc text-sm'>
                <li><a href="/shop" className="hover:underline">Shop</a></li>
                <li><a href="/faqs" className="hover:underline">FAQs</a></li>
                <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="/return-policy" className="hover:underline">Refund and Returns Policy</a></li>
                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/shipping-policy" className="hover:underline">Shipping Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <ExpandableSection title="Contact Us">
              <p className='text-pink-700 mb-2'>Sona Enterprises</p>
              <ul className=' list-disc space-y-2 text-sm'>
                <li>Phone: +91 9810533519</li>
                <li>11:00AM - 5:00PM Mon-Sat</li>
                <li>info@dubblin.co.in</li>
                <li>Sona Enterprises, Sardar Thana Road, Delhi - 110006</li>
              </ul>
            </ExpandableSection>
            <div className="hidden md:block">
              <h3 className='mb-4 text-lg font-semibold'>Contact Us</h3>
              <p className='text-pink-700 mb-2'>Sona Enterprises</p>
              <ul className='space-y-2 list-disc text-sm'>
                <li>Phone: +91 9810533519</li>
                <li>11:00AM - 5:00PM Mon-Sat</li>
                <li>info@dubblin.co.in</li>
                <li>Sona Enterprises, Sardar Thana Road, Delhi - 110006</li>
              </ul>
            </div>
          </div>

          {/* Online Channel Partner */}
          <div>
            <ExpandableSection title="Online Channel Partner">
              <p className='text-pink-700 mb-2'>BARIZTA TECHNOLOGIES PRIVATE LIMITED</p>
              <ul className='space-y-2 list-disc text-sm'>
                <li>Phone: +91 7838388836</li>
                <li>dubblinofficial@gmail.com</li>
                <li>Primary Address: Plot No 568, Udyog Vihar, Phase-5 Gurgaon, Haryana 122016, India</li>
                <li>Secondary Address: WZ-90/3, KESHOPUR, Vikaspuri, New Delhi, West Delhi, Delhi, 110018</li>
              </ul>
            </ExpandableSection>
            <div className="hidden md:block">
              <h3 className='mb-4 text-lg font-semibold'>Online Channel Partner</h3>
              <p className='text-pink-700 mb-2'>BARIZTA TECHNOLOGIES PRIVATE LIMITED</p>
              <ul className='space-y-2 list-disc text-sm'>
                <li>Phone: +91 7838388836</li>
                <li>dubblinofficial@gmail.com</li>
                <li>Primary Address: Plot No 568, Udyog Vihar, Phase-5 Gurgaon, Haryana 122016, India</li>
                <li>Secondary Address: WZ-90/3, KESHOPUR, Vikaspuri, New Delhi, West Delhi, Delhi, 110018</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 py-4 bg-black text-white text-center text-sm border-t'>
          <p>Copyright &copy; {new Date().getFullYear()} Dubblin |Developed By Aarvy Technologies.</p>
        </div>
    </footer>
  )
}

export default Footer;

