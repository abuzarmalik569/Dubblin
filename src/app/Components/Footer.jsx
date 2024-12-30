// import React from 'react'
// import Image from "next/image";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <div className=''>
//             {/* img  */}
//             <div className='p-10 w-full'
//                 style={{
//                     backgroundImage: "url('/footer.png')",
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}>
//                 <div className=' flex font-Outfit'>
//                     <div className='  text-white font-bold text-3xl ml-10'>
//                         <h1>JOIN OUR <br />
//                             NEWSLETTER</h1>
//                     </div>

                    
//                     <div
//                         class="relative mx-auto w-[300px] bg-gray-100 rounded-2xl shadow-md p-1.5 "
//                     >

//                         <input
//                             type="text"
//                             class="w-full pl-2 pr-24 py-4 text-xl text-black bg-transparent rounded-lg focus:outline-none"
//                             placeholder="Enter Email"
//                         />
//                         <button
//                             class="absolute right-0 top-0 bottom-0 px-6 bg-red-800 text-white font-medium rounded-xl focus:outline-none "
//                         >
//                             Subscribe
//                         </button>
//                     </div>


//                 </div>
//             </div>
//             {/* main footer  */}
//             <div className=' mt-5 font-Outfit flex flex-wrap justify-between p-2'>
//                 {/* first  */}
//                 <div className=' space-y-8 w-[500px]'>
//                     <Image src="/logo.png" alt="" width={100} height={100}></Image>
//                     <p>Dubblin as a Brand in the industry has flourished as a importer of household products. Over the years since its inception in 2008, the company has focused its activities on importing of household goods.</p>
//                     <h2 className=' border-y-2 border-yellow-700 w-28 text-center text-2xl'>Follow us</h2>
//                     <div className=' flex gap-6 text-4xl'>
//                         <FaFacebook />
//                         <FaInstagram />
//                         <FaTwitter />
//                         <FaYoutube />
//                         <FaLinkedin />
//                     </div>
//                 </div>
//                 {/* second */}
//                 <div className=' flex flex-wrap justify-evenly gap-6'>
//                     {/* 1 ul  */}
//                     <div className=' w-72'>
//                         <h1 className=' mb-8 text-xl'>Usefull Links</h1>
//                         <ul className='space-y-5 list-disc'>
//                             <li><a href="#">FAQs</a></li>
//                             <li><a href="#">Terms & Conditions</a></li>
//                             <li><a href="#">Refund and Returns Policy</a></li>
//                             <li><a href="#">Privacy Policy</a></li>
//                             <li><a href="#">PAYMENT FAQs</a></li>
//                             <li><a href="#">SHIPPING POLICY</a></li>
//                         </ul>
//                     </div>
//                     {/* 2 ul  */}
//                     <div className=' w-72'>
//                         <h1 className=' mb-8 text-xl'>Contact Us</h1>

//                         <ul className='space-y-6 list-disc'>
//                             <p className='text-pink-700'>Sona Enterprises</p>
//                             <li>Phone: +91 9810533519 11:00AM - 5:00PMMon-Sat</li>
//                             <li>info@dubblin.co.in</li>
//                             <li>Sona Enterprises , Sardar Thana Road, Delhi - 110006</li>
//                         </ul>
//                     </div>
//                     {/* 3 ul  */}
//                     <div className=' w-72'>
//                         <h1 className=' mb-8 text-xl'>Online Channel Partner</h1>
//                         <ul className='space-y-4 list-disc'>
//                             <p className=' text-pink-700'>BARIZTA TECHNOLOGIES PRIVATE LIMITED</p>
//                             <li>Phone:+91 7838388836</li>
//                             <li>dubblinofficial@gmail.com</li>
//                             <li>Primary Address - Plot No 568,Udyog Vihar,Phase-5 Gurgaon Gurgaon Hr 122016 In Gurgaon,India</li>
//                             <li>Secondary AddressWZ-90/3, KESHOPUR, Vikaspuri, New Delhi, West Delhi, Delhi, 110018</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer

import React from 'react';
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaChevronDown } from "react-icons/fa";

const ExpandableSection = ({ title, children }) => (
  <details className="group md:hidden">
    <summary className="list-none flex justify-between items-center cursor-pointer">
      <h3 className='text-lg font-semibold'>{title}</h3>
      <FaChevronDown className="transform group-open:rotate-180 transition-transform" />
    </summary>
    <div className="mt-2">
      {children}
    </div>
  </details>
);

const Footer = () => {
  return (
    <footer className='font-Outfit text-black bg-white'>
      {/* Newsletter Section */}
      <div className='p-4 sm:p-10 w-full bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/footer.png')",
        }}>
        <div className='flex flex-col sm:flex-row items-center justify-center max-w-6xl mx-auto'>
          <div className='text-white font-bold text-2xl sm:text-3xl mb-4 sm:mb-0 text-center sm:text-left'>
            <h2>JOIN OUR <br />NEWSLETTER</h2>
          </div>
          
          <div className="relative w-full mx-auto sm:w-[300px] bg-gray-100 rounded-2xl shadow-md p-1.5">
            <input
              type="email"
              className="w-full pl-2 pr-24 py-4 text-base sm:text-xl text-black bg-transparent rounded-lg focus:outline-none"
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
            <div className='flex gap-4 text-2xl'>
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
                {["FAQs", "Terms & Conditions", "Refund and Returns Policy", "Privacy Policy", "PAYMENT FAQs", "SHIPPING POLICY"].map((item, index) => (
                  <li key={index}><a href="#" className="hover:underline">{item}</a></li>
                ))}
              </ul>
            </ExpandableSection>
            <div className="hidden md:block">
              <h3 className='mb-4 text-lg font-semibold'>Useful Links</h3>
              <ul className='space-y-2 list-disc text-sm'>
                {["FAQs", "Terms & Conditions", "Refund and Returns Policy", "Privacy Policy", "PAYMENT FAQs", "SHIPPING POLICY"].map((item, index) => (
                  <li key={index}><a href="#" className="hover:underline">{item}</a></li>
                ))}
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
          <p>Copyright &copy; {new Date().getFullYear()} Dubblin |Developed By Callsmaster Services LLP.</p>
        </div>
    </footer>
  )
}

export default Footer;

