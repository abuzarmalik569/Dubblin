import Image from 'next/image'
import React from 'react'
import blogimg1 from '../../../public/blogimg1.png'
import blogimg2 from '../../../public/blogimg2.png'
import blogimg3 from '../../../public/blogimg3.png'
import blogimg4 from '../../../public/blogimg4.png'
import blogimg5 from '../../../public/blogimg5.png'
import blogimg6 from '../../../public/blogimg6.png'
import blog7 from '../../../public/blog7.png'
import blog8 from '../../../public/blog8.png'
import blog9 from '../../../public/blog9.png'
import blog10 from '../../../public/blog10.png'
import blog11 from '../../../public/blog11.png'
import blog12 from '../../../public/blog12.png'
import bloglast2 from '../../../public/bloglast2.png'
import bloglast3 from '../../../public/bloglast3.png'

const Page = () => {
  const posts = [
    { id: 1, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", image: blogimg3, desc:'when an unknown printer took a galley of type and scrambled it to make a type sbut also the leap into electronic typesetting, remaining essentially unchanged. ' },
    { id: 2, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", image: blogimg4, desc:'not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
    { id: 3, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", image: blogimg5, desc:'when an unknown printer took a galley of type and scrambled it to make a type sbut also the leap into electronic typesetting, remaining essentially unchanged. ' },
  ];

  const trendpost = [
    { id: 1, title: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived", image: blog7 },
    { id: 2, title: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived", image: blog8 },
    { id: 3, title: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived", image: blog9 },
    { id: 4, title: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived", image: blog10 },
    { id: 5, title: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived", image: blog11 },
    { id: 6, title: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived", image: blog12 }
  ]

  return (
    <div className='font-Outfit'>
      <div className='h-[90vh] font-Outfit bg-cover bg-center bg-no-repeat' style={{backgroundImage:'url("/blogheader.png")'}}>
        <div className='flex h-full container mx-auto relative justify-center items-center px-4 sm:px-6 lg:px-8'>
          <div className='space-y-4 mt-28 text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
              Lorem Ipsum is simply dummy text of the
            </h1>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Lorem Ipsum is simply dummy text of the</h2>
          </div>
          <div className='w-1/4 p-2 bg-white absolute top-9 right-0 hidden md:block'>
            <Image src={blogimg1} alt="Blog image 1" className='w-full h-auto'/>
          </div>
          <div className='w-1/6 p-2 bg-white absolute bottom-11 left-3 hidden md:block'>
            <Image src={blogimg1} alt="Blog image 1" className='w-full h-auto'/>
          </div>
        </div>
      </div>

      {/* Popular section */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-3 mt-12'>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-black">Popular Post</h2>
          <p className="text-center text-base sm:text-lg text-gray-500">Lorem Ipsum is simply dummy text of the printing industry.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="w-full md:w-1/2 p-4 space-y-2">
            <Image src={blogimg2} alt="Main Post" className="w-full h-auto rounded" />
            <h3 className="mt-2 text-xl text-black font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <p className="text-gray-500">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-1/2 p-4">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-3">
                <Image src={post.image} alt={post.title} className="rounded w-full sm:w-44 h-auto sm:h-44" />
                <div className='space-y-2'>
                  <h4 className="font-bold text-black text-lg sm:text-xl">{post.title}</h4>
                  <p className="text-gray-500 text-sm">{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* banner section */}
      <div className='mt-10 w-full h-[80vh] bg-cover bg-center bg-no-repeat' 
        style={{backgroundImage:'linear-gradient( to left, #D9D9D900, #AA0A2F), url("/blogimg6.png")'}}>
        <div className='h-full w-full container mx-auto font-Outfit flex items-center px-4 sm:px-6 lg:px-8'>
          <div className='w-full md:w-2/5 space-y-4'>
            <h1 className='font-bold text-2xl sm:text-3xl'>Lorem Ipsum is simply dummy </h1>
            <p className='text-sm sm:text-base'>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
        </div>
      </div>

      {/* trending post section */}
      <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Trending Post</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 container mx-auto font-Outfit">
          {trendpost.map((post) => (
            <div
              key={post.id}
              className="flex flex-col justify-center gap-3 items-center w-full sm:w-[48%] md:w-[32%] mt-6"
            >
              <Image
                src={post.image}
                alt="Post Image"
                className="w-full h-auto"
              />
              <p className='text-black pl-2 text-sm sm:text-base'>{post.title}</p>
            </div>
          ))}
        </div>
      </div>    

      <div className='container mx-auto my-5 px-4 sm:px-6 lg:px-8'>
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Trending Post</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
          <div className='w-full md:w-1/2 h-64 md:h-auto flex items-center bg-cover bg-center bg-no-repeat rounded-md' style={{backgroundImage:'url("/bloglast1.png")'}}>
            <p className='w-full md:w-1/2 text-base sm:text-lg ml-4 md:ml-10 mt-4 md:mt-36'>when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>
          <div className='w-full sm:w-1/2 md:w-[20%]'>
            <Image src={bloglast2} alt="Blog last 2" className='w-full h-auto'/>
          </div>
          <div className='w-full sm:w-1/2 md:w-[20%]'>
            <Image src={bloglast3} alt="Blog last 3" className='w-full h-auto'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

