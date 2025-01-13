import React from 'react';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen border font-Outfit p-4">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mt-8 md:mt-16">
        <div className="relative w-full max-w-md md:max-w-lg">
          <Image src="/login.png" width={500} height={500} layout="responsive" alt="Login" />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <h1 className="text-white text-center font-bold text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-white text-center text-sm md:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque, reprehenderit numquam molestias ipsa rerum?
            </p>
          </div>
        </div>
        <div className="w-full max-w-md border border-white p-4">
          <h1 className="text-black text-3xl md:text-4xl mb-6">Create Account</h1>
          <div className="border-b-2 border-black mb-6">
            <input
              type="text"
              className="w-full mb-2 bg-transparent"
              placeholder="First Name*"
            />
          </div>
          <div className="border-b-2 border-black mb-8">
            <input
              type="text"
              className="w-full mb-2 bg-transparent"
              placeholder="Last Name*"
            />
          </div>
          <div className="border-b-2 border-black mb-8">
            <input
              type="email"
              className="w-full mb-2 bg-transparent"
              placeholder="Email*"
            />
          </div>
          <div className="border-b-2 border-black mb-8">
            <input
              type="password"
              className="w-full mb-2 bg-transparent"
              placeholder="Password*"
            />
          </div>
          <button className="bg-black rounded-md text-white w-full md:w-32 h-10">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
