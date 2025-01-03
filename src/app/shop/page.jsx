"use client"
import React from 'react'

import Image from 'next/image';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';





const page = () => {

  const productsRef = useRef(null);

  const products = [
    { id: 1, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 2, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 3, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 4, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 5, name: 'Fridge Bottle', category: 'fridge-bottle', image: '/image 8.png', price: 599, oldPrice: 999, colors: ['clear', 'blue', 'green'], sizes: ['500ml', '1L', '2L'] },
    { id: 6, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 7, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 8, name: 'Lunch Box', category: 'lunch-box', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 9, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 10, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 11, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 12, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 13, name: 'Fridge Bottle', category: 'fridge-bottle', image: '/image 8.png', price: 599, oldPrice: 999, colors: ['clear', 'blue', 'green'], sizes: ['500ml', '1L', '2L'] },
    { id: 14, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 15, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 16, name: 'Lunch Box', category: 'lunch-box', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 17, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 18, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 19, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 20, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 21, name: 'Fridge Bottle', category: 'fridge-bottle', image: '/image 8.png', price: 599, oldPrice: 999, colors: ['clear', 'blue', 'green'], sizes: ['500ml', '1L', '2L'] },
    { id: 22, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 23, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 24, name: 'Lunch Box', category: 'lunch-box', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
  ];

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
      <div className='flex justify-evenly'>
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
      <div className=' w-3/4'>
        {/* banner  */}
        <h1 className='font-medium text-2xl mb-5'>Feature product(9)</h1>
        <div className=' flex'>
         
          <div className='items-center '>
          
            <Image src="/rightbanner.png" width={614} height={300} />
          </div>
          <div>
            <Image src="/leftbanner.png" width={535} height={300}/>
          </div>
        </div>
<div className=' flex justify-end items-center gap-5 mt-5'>
  <p className=' text-pink-800'>Shot by:</p>
  <p>best selling</p>
  <ChevronDown />
</div>
        {/* product  */}
        <div>
  <div ref={productsRef} className="grid  font-Outfit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-5 mb-16">
        {products.map(product => (
          <div 
            key={product.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
            onClick={() => openProductSelection(product)}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {product.badge && (
                <div className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                  {product.badge}
                </div>
              )}
            </div>
            
            <div className="p-4 bg-white">
              <h3 className="text-lg font-medium mb-2 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                &#8377;{product.price.toFixed(2)}
                </span>
                <span className="text-pink-700 line-through text-sm">
                &#8377;{product.oldPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page