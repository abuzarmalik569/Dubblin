import React from 'react'
import Image from 'next/image';
const page = () => {
  return (
    // <div className="w-full">
    //   {/* Hero Section */}
    //   <div className="relative w-full h-[400px]">
    //     <Image
    //       src="/hero-image.jpg" // Replace with the actual image
    //       alt="Hero"
    //       layout="fill"
    //       objectFit="cover"
    //       priority
    //     />
    //     <div className="absolute inset-0 flex items-center justify-center bg-black/30">
    //       <h1 className="text-white text-4xl font-bold">About Us</h1>
    //     </div>
    //   </div>

    //   {/* Content Section */}
    //   <div className="container mx-auto px-4 py-10 space-y-10">
    //     {/* First Row */}
    //     <div className="flex flex-wrap lg:flex-nowrap gap-8">
    //       <div className="w-full lg:w-1/2 space-y-4">
    //         <h2 className="text-2xl font-bold">WHO WE ARE</h2>
    //         <p className="text-gray-600">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s.
    //         </p>
    //         <p className="text-gray-600">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s.
    //         </p>
    //       </div>
    //       <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
    //         <Image
    //           src="/image1.jpg" // Replace with actual images
    //           alt="Image 1"
    //           width={300}
    //           height={200}
    //           className="object-cover rounded-md"
    //         />
    //         <Image
    //           src="/image2.jpg" // Replace with actual images
    //           alt="Image 2"
    //           width={300}
    //           height={200}
    //           className="object-cover rounded-md"
    //         />
    //       </div>
    //     </div>

    //     {/* Second Row */}
    //     <div className="flex flex-wrap lg:flex-nowrap gap-8">
    //       <div className="w-full lg:w-1/3">
    //         <h3 className="text-xl font-semibold">Our Vision</h3>
    //         <p className="text-gray-600">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry.
    //         </p>
    //       </div>
    //       <div className="w-full lg:w-1/3">
    //         <h3 className="text-xl font-semibold">Our Mission</h3>
    //         <p className="text-gray-600">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry.
    //         </p>
    //       </div>
    //       <div className="w-full lg:w-1/3">
    //         <h3 className="text-xl font-semibold">Our History</h3>
    //         <p className="text-gray-600">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry.
    //         </p>
    //       </div>
    //     </div>

    //     {/* Third Row */}
    //     <div className="relative w-full h-[300px]">
    //       <Image
    //         src="/image3.jpg" // Replace with the actual image
    //         alt="Background"
    //         layout="fill"
    //         objectFit="cover"
    //         className="rounded-md"
    //       />
    //       <div className="absolute inset-0 bg-black/30 flex items-center">
    //         <div className="bg-white p-6 rounded-md max-w-md mx-auto">
    //           <h3 className="text-xl font-semibold">What is Lorem Ipsum</h3>
    //           <p className="text-gray-600">
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy
    //             text ever since the 1500s.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
 

    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="About Us Banner"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">ABOUT US</h1>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Person with water bottle"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Person drinking water"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">WHO WE ARE</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-gray-600">
                To become the world's leading sustainable hydration solution
                provider, inspiring people to make environmentally conscious
                choices.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-gray-600">
                To create innovative, high-quality hydration products that enhance
                people's lives while minimizing environmental impact.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Our Values</h3>
              <p className="text-gray-600">
                Sustainability, innovation, quality, and customer satisfaction are
                at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Person with water bottle outdoors"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">What is Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Person with water bottle in snow"
            width={1200}
            height={600}
            className="object-cover w-full h-[400px] rounded-lg"
          />
        </div>
      </section>
    </main>



  );
  
}

export default page


