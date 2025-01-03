import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen border font-Outfit p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 mt-8 md:mt-16">
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
          <h1 className="text-black text-3xl md:text-4xl mb-6">Log in</h1>
          <div className="border-b-2 border-black mb-6">
            <input
              type="email"
              className="w-full mb-2 bg-transparent"
              placeholder="Email*"
            />
          </div>
          <div className="border-b-2 border-black mb-6">
            <input
              type="password"
              className="w-full mb-2 bg-transparent"
              placeholder="Password*"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberme" className="" />
            <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
              Remember Me
            </label>
          </div>
          <div className="font-medium text-pink-800 mb-4">
            <a href="/forget-password">Forget password?</a>
          </div>
          <Link href={'/dashboard'}><button className="bg-black rounded-md text-white w-full md:w-32 h-10 mb-4">Log in</button></Link>
          <div className="flex justify-start items-center gap-2 font-normal mb-4 text-black">
            <hr className="border-t-2 border-black w-10" />
            <p>Or</p>
            <hr className="border-t-2 border-black w-10" />
          </div>
          <div className="flex flex-col sm:flex-row justify-start gap-4 mb-4">
            <button className="bg-white border flex items-center justify-center border-black rounded-md text-black w-full sm:w-28 h-10 gap-2">
              <Image src="/google.png" width={20} height={20} alt="Google" /> Google
            </button>
            <button className="bg-white border flex items-center justify-center border-black rounded-md text-black w-full sm:w-28 h-10 gap-2">
              <Image src="/facebook.png" width={20} height={20} alt="Facebook" /> Facebook
            </button>
          </div>
          <div className="text-center sm:text-left">
            <a className="text-gray-600 block mb-1" href="#">
              Don't have an Account?
            </a>
            <a className="text-black border-b-2 border-black font-semibold" href="/register">
              Create New One
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
