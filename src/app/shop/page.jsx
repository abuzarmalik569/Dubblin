import React from 'react'
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';




const page = () => {
  return (
    <div className=' text-black font-Outfit'>
      <div className='w-full h-56 mb-20' style={{
        backgroundImage: "url('/top.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} >
        <div className=' text-white p-20'>
          <div className='flex '>
            <h3> home </h3><ChevronRight /><h3> Product</h3>
          </div>
          <div className='text-4xl'>Feature product</div>
        </div>
      </div>
      {/* next  */}
      <div className=' justify-evenly flex'>
        {/* left  */}
      <div className='text-left mb-20 w-64'>
        {/* categories  */}
        <div>
          <h1 className=' text-2xl'>Categories</h1>
          <div className='w-60 h-60 space-y-4 overflow-y-auto'>
            <div className=' flex mt-5 justify-start '>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                Remember Me
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                Remember Me
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                Remember Me
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                Remember Me
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                Remember Me
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                Remember Me
              </label>
              <p>(23)</p>
            </div>
          </div>
        </div>

        <hr className='mt-5 w-60 border-t-2' />

        <div className=' w-60  mt-5'>
          <h1 className=' text-2xl'>Filter</h1>
          <p className=' text-lg'>10 Product</p>
        </div>

        <hr className='mt-5 w-60 border-t-2' />

        <div className=' mt-5 w-60 h-36 overflow-y-auto'>
          <h1 className=' text-2xl'>Availablity</h1>
          <div className='flex justify-between mt-2'>
            <p>0 selected</p>
            <p>Reset</p>
          </div>
          <div className=' space-y-4 mt-2'>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                Remember Me
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                Remember Me
              </label>
              <p>(23)</p>
            </div>
          </div>
        </div>

        <hr className='mt-5 w-60 border-t-2' />

        <div className='w-60 mt-5'>
          <h1 className='  text-2xl'>Availablity</h1>
          <div className='flex mt-5 text-sm justify-between '>
            <p>The highest price is ₹589.00</p>
            <p>Reset</p>
          </div>
          <hr className='mt-5 border-t-2 border-pink-800' />
          <div className='flex w-60 mt-5 justify-between'>
            {/* from  */}
            <div >
              <h1>from</h1>
              <button className=' flex w-20 justify-between p-1 border-black border '><p>₹</p> <p>0</p></button>
            </div>
            <div>
              <h1>to</h1>
              <button className=' flex w-20 justify-between p-1 border-black border '><p>₹</p> <p>523</p></button>
            </div>
          </div>
        </div>

        <hr className='mt-5 w-60 border-t-2' />

        <div className='w-60 mt-5'>
          <h1 className='text-2xl'>Color</h1>
          <div className=' mt-5 flex justify-center gap-2 flex-wrap'>
            <button className=' h-5 w-10 rounded-md bg-pink-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-red-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-yellow-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-green-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-black border'></button>
            <button className=' h-5 w-10 rounded-md bg-amber-300 border'></button>
            <button className=' h-5 w-10 rounded-md bg-orange-500 border'></button>
            <button className=' h-5 w-10 rounded-md bg-lime-400 border'></button>
            <button className=' h-5 w-10 rounded-md bg-pink-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-pink-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-pink-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-pink-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-pink-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-pink-700 border'></button>
            <button className=' h-5 w-10 rounded-md bg-pink-700 border'></button>

          </div>
        </div>

        <hr className='mt-5 w-60 border-t-2' />

        <div className=' mt-5 w-60  overflow-y-auto'>
          <h1 className=' text-2xl'>Size</h1>
          <div className='flex justify-between mt-2'>
            <p>0 selected</p>
            <p>Reset</p>
          </div>
          <div className=' space-y-4 mt-5'>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                100ml
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                250ml
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                500ml
              </label>
              <p>(23)</p>
            </div>
            <div className=' flex justify-start'>
              <input type="checkbox" id="rememberme" className="" />
              <label htmlFor="rememberMe" className="ml-2 text-sm md:text-base text-black">
                750ml
              </label>
              <p>(23)</p>
            </div>
          </div>
        </div>
        
        <hr className='mt-5 w-60 border-t-2' />

        <div className='h-60  w-60 border mt-5'>
          <div className=' absolute'>
            <Image src="/lunch.png" width={250} height={300} />
          </div>
          <div className='relative text-center top-48'>
            <h2 className='text-2xl  font-bold text-pink-800'>Lunch Box</h2>
            <h2 className='text-xl  font-bold text-white'>Shop Now</h2>
          </div>
        </div>

      </div>
      {/* right  */}
      <div>
        {/* banner  */}
        <div className=' flex'>
          <div className=' border'>
            <Image src="/rightbanner.png" width={570} height={300} />
          </div>
          <div>
            <Image src="/leftbanner.png" width={500} height={300}/>
          </div>
        </div>
        <div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default page