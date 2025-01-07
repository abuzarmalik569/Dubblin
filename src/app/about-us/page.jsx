import React from 'react'
import Image from 'next/image';
import about1 from '../../../public/about1.png'
import about2 from '../../../public/about2.png'
import about3 from '../../../public/about3.png'
import about4 from '../../../public/about4.png'
import about5 from '../../../public/about5.png'
import about6 from '../../../public/about6.png'
// const page = () => {
//   return (
//    <main className="min-h-screen bg-white font-Outfit">
//       {/* Hero Section */}
//       <div className="h-[60vh] bg-gray-900 flex justify-center items-center"
//       style={{backgroundImage:'url("/about1.png")',
//         backgroundSize:'cover',
//         backgroundRepeat:'no-repeat'
//       }}>
       
         
        
//         <div>
//           <h1 className="text-3xl md:text-4xl font-semibold text-white">About Us</h1>
//         </div>
//       </div>

//       {/* Who We Are Section */}
//       <section className="container mx-auto flex mt-14 px-4">
        
//           <div className="flex gap-4 w-3/5">
//             <Image
//               src={about2}
//               alt="Person with water bottle"
//               className=' w-[45%]'
//             />
//            <div className=' w-1/2 flex flex-col gap-4'>
//            <Image
//               src={about3}
//               alt="Person drinking water"
           
//             />
//              <Image
//               src={about4}
//               alt="Person drinking water"
             
//             />
//            </div>
//           </div>
//           <div className="w-1/2 p-4 pl-7">
//            <div className='space-y-4  w-10/12'>
//            <h2 className="text-3xl font-bold text-black">WHO WE ARE</h2>
//             <p className="text-gray-600">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br />
//             <br />
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br /> <br />
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
//             </p>
//            </div>
            
//           </div>
        
//       </section>

//       {/* Our Values Section */}
//      <section className=' container mx-auto flex px-4 mt-14'>
//         <div className=' w-1/2 space-y-6'>
//            <div className=' space-y-2 w-10/12'>
//             <h1 className=' font-semibold text-2xl text-black '>Our Vision</h1>
//             <p className=' text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
//            </div>
//            <div className=' space-y-3 w-10/12'>
//             <h1 className=' font-semibold text-2xl text-black '>Our Mission</h1>
//             <p className=' text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
//            </div>
//            <div className=' space-y-3 w-10/12'>
//            <h1 className=' font-semibold text-2xl text-black '>Our History</h1>
//            <p className=' text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
//            </div>
//         </div>
//         <div className='w-1/2 '>
//           <Image src={about5}/>
//         </div>
//      </section>

     

//       {/* Final Image Section */}
//       <section className=" h-[90vh] mt-14" style={{backgroundImage:'url("/about6.png")',
//         backgroundSize:'cover',
//         backgroundRepeat:'no-repeat'
//       }}>
//        <div className=' container mx-auto flow-root'>
//        <div className='w-[37%] mt-24 bg-white rounded-xl text-black space-y-4 pl-6 pr-12 pt-6 pb-16 '>
//           <h1 className=' text-xl font-semibold'>What is Lorem Ipsum</h1>
//           <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
//         </div>
//        </div>
//       </section>
//     </main>



//   );
  
// }

// export default page

export default function page() {
  return (
    <div className='font-Outfit'>
      {/* Hero Section */}
      <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] bg-gray-900 flex justify-center items-center"
        style={{
          backgroundImage: 'url("/about1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">About Us</h1>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="container mx-auto flex flex-col md:flex-row mt-8 md:mt-14 px-4">
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-3/5 md:w-1/2 mb-8 md:mb-0">
          <Image
            src={about2}
            alt="Person with water bottle"
            className="w-full md:w-[45%] h-"
          />
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <Image
              src={about3}
              alt="Person drinking water"
              className="w-full h-auto"
            />
            <Image
              src={about4}
              alt="Person drinking water"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:p-4 md:pl-7">
          <div className="space-y-4 w-full lg:w-10/12">
            <h2 className="text-2xl md:text-3xl font-bold text-black">WHO WE ARE</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br className="hidden md:inline" />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br className="hidden md:inline" /> <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="container mx-auto flex flex-col md:flex-row px-4 mt-8 md:mt-14">
        <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
          <div className="space-y-2 w-full md:w-10/12">
            <h1 className="font-semibold text-xl md:text-2xl text-black">Our Vision</h1>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
          </div>
          <div className="space-y-3 w-full md:w-10/12">
            <h1 className="font-semibold text-xl md:text-2xl text-black">Our Mission</h1>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
          </div>
          <div className="space-y-3 w-full md:w-10/12">
            <h1 className="font-semibold text-xl md:text-2xl text-black">Our History</h1>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={about5} alt="Our Values" className="w-full h-auto" />
        </div>
      </section>

      {/* Final Image Section */}
      <section className="h-[60vh] sm:h-[70vh] md:h-[90vh] mt-8 md:mt-14" style={{
        backgroundImage: 'url("/about6.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto flow-root">
          <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[37%] mt-8 sm:mt-12 md:mt-20 mx-auto md:ml-5 bg-white rounded-xl text-black space-y-4 p-6">
            <h1 className="text-lg sm:text-xl font-semibold">What is Lorem Ipsum</h1>
            <p className="text-sm sm:text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
          </div>
        </div>
      </section>
    </div>
  )
}