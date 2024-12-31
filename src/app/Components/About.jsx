

import React from 'react';
import Image from "next/image";
import aboutImage from '../../../public/aboutimage.png';
// import tearImage from '../../../public/tearimage.png';
import core from '../../../public/CORE11.png';
import core7 from '../../../public/CORE7.png';
import core8 from '../../../public/CORE8.png';
import core9 from '../../../public/CORE9.png';
import core10 from '../../../public/CORE10.png';

const About = () => {
  return (
    <div 
      className='w-full' 
      style={{
        backgroundImage: "url('/backbackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='container text-black font-Outfit mx-auto flex flex-wrap lg:flex-nowrap justify-around py-10'>
        {/* Left Image Section */}
        <div className='w-full p-3 bg-white lg:w-2/6 flex justify-center mb-8 lg:mb-0'>
          <Image src={aboutImage} className='w-full h-auto' />
        </div>

        {/* Right Content Section */}
        <div className='w-full lg:w-1/2 flex flex-col justify-between'>
          {/* Info Section */}
          <div 
            className='pb-24 px-5 lg:px-8' 
            style={{
              backgroundImage: "url('/Whitebg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className='space-y-6 mt-5'>
              <h1 className='text-lg lg:text-2xl font-semibold'>HEALTH, HAPPINESS, & SUSTAINABILITY</h1>
              <p className='flex items-center gap-4 text-sm lg:text-xl '>
                <Image src={core7} className='w-6 lg:w-8' />
                Wide Mouth Bottles To Clean Easily.
              </p>
              <p className='flex items-center gap-4 text-sm lg:text-xl '>
                <Image src={core8} className='w-6 lg:w-8' />
                Variation In Sizes, Styles, And Material
              </p>
              <p className='flex items-center gap-4 text-sm lg:text-xl '>
                <Image src={core9} className='w-6 lg:w-8' />
                Insulated Bottles For Hot And Cold Technology
              </p>
              <p className='flex items-center gap-4 text-sm lg:text-xl'>
                <Image src={core10} className='w-6 lg:w-8' />
                Made In India To Serve Authenticity
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className='flex justify-between mt-6 px-5 lg:px-0'>
            {['Secure payment', 'Fast Delivery', 'Great Value'].map((feature, index) => (
              <div key={index} className='flex flex-col items-center w-1/3'>
                <div className='flex justify-center items-center bg-white p-3 lg:py-2 lg:px-2 w-16 h-16 lg:w-24 lg:h-24 rounded-full'>
                  <Image src={core} className='w-3/4' />
                </div>
                <p className='mt-2 lg:mt-4 text-xs lg:text-lg font-semibold text-center'>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
