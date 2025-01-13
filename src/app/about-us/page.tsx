// 'use client'

// import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'
// import about1 from '../../../public/about1.png'
// import about2 from '../../../public/about2.png'
// import about3 from '../../../public/about3.png'
// import about4 from '../../../public/about4.png'
// import about5 from '../../../public/about5.png'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// export default function Page() {
//   const heroRef = useRef(null)
//   const whoWeAreRef = useRef(null)
//   const ourValuesRef = useRef(null)
//   const finalImageRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Hero Section Animation
//       gsap.from(heroRef.current.querySelector('h1'), {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top 80%',
//         },
//       })

//       // Who We Are Section Animation
//       const whoWeAreImages = whoWeAreRef.current.querySelectorAll('img')
//       const whoWeAreTitle = whoWeAreRef.current.querySelector('h2')
//       const whoWeAreText = whoWeAreRef.current.querySelector('p')

//       gsap.from(whoWeAreImages, {
//         opacity: 0,
//         x: -50,
//         stagger: 0.2,
//         duration: 1,
//         scrollTrigger: {
//           trigger: whoWeAreRef.current,
//           start: 'top 70%',
//         },
//       })

//       gsap.from(whoWeAreTitle, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         scrollTrigger: {
//           trigger: whoWeAreRef.current,
//           start: 'top 70%',
//         },
//       })

//       gsap.from(whoWeAreText, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         delay: 0.3,
//         scrollTrigger: {
//           trigger: whoWeAreRef.current,
//           start: 'top 70%',
//         },
//       })

//       // Our Values Section Animation
//       const ourValuesItems = ourValuesRef.current.querySelectorAll('.space-y-3, .space-y-2')
//       const ourValuesImage = ourValuesRef.current.querySelector('img')

//       ourValuesItems.forEach((item, index) => {
//         const title = item.querySelector('h1')
//         const text = item.querySelector('p')

//         gsap.from(title, {
//           opacity: 0,
//           y: 30,
//           duration: 1,
//           scrollTrigger: {
//             trigger: item,
//             start: 'top 80%',
//           },
//         })

//         gsap.from(text, {
//           opacity: 0,
//           y: 30,
//           duration: 1,
//           delay: 0.2,
//           scrollTrigger: {
//             trigger: item,
//             start: 'top 80%',
//           },
//         })
//       })

//       gsap.from(ourValuesImage, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ourValuesRef.current,
//           start: 'top 70%',
//         },
//       })

//       // Final Image Section Animation
//       const finalImageContent = finalImageRef.current.querySelector('div')
//       const finalImageTitle = finalImageContent.querySelector('h1')
//       const finalImageText = finalImageContent.querySelector('p')

//       gsap.from(finalImageContent, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         scrollTrigger: {
//           trigger: finalImageRef.current,
//           start: 'top 70%',
//         },
//       })

//       gsap.from(finalImageTitle, {
//         opacity: 0,
//         y: 20,
//         duration: 1,
//         delay: 0.5,
//         scrollTrigger: {
//           trigger: finalImageRef.current,
//           start: 'top 70%',
//         },
//       })

//       gsap.from(finalImageText, {
//         opacity: 0,
//         y: 20,
//         duration: 1,
//         delay: 0.7,
//         scrollTrigger: {
//           trigger: finalImageRef.current,
//           start: 'top 70%',
//         },
//       })
//     })

//     return () => ctx.revert() // Cleanup animations on component unmount
//   }, [])

//   return (
//     <div className='font-Outfit'>
//       {/* Hero Section */}
//       <div ref={heroRef} className="h-[40vh] sm:h-[50vh] md:h-[60vh] bg-gray-900 flex justify-center items-center"
//         style={{
//           backgroundImage: 'url("/about1.png")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}>
//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">About Us</h1>
//         </div>
//       </div>

//       {/* Who We Are Section */}
//       <section ref={whoWeAreRef} className="container mx-auto flex flex-col md:flex-row mt-8 md:mt-14 px-4">
//         <div className="flex flex-col md:flex-row gap-4 w-full lg:w-3/5 md:w-1/2 mb-8 md:mb-0">
//           <Image
//             src={about2}
//             alt="Person with water bottle"
//             className="w-full md:w-[45%] h-auto"
//           />
//           <div className="w-full md:w-1/2 flex flex-col gap-4">
//             <Image
//               src={about3}
//               alt="Person drinking water"
//               className="w-full h-auto"
//             />
//             <Image
//               src={about4}
//               alt="Person drinking water"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 md:p-4 md:pl-7">
//           <div className="space-y-4 w-full lg:w-10/12">
//             <h2 className="text-2xl md:text-3xl font-bold text-black">WHO WE ARE</h2>
//             <p className="text-gray-600">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br className="hidden md:inline" />
//               <br />
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br className="hidden md:inline" /> <br />
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Values Section */}
//       <section ref={ourValuesRef} className="container mx-auto flex flex-col md:flex-row px-4 mt-8 md:mt-14">
//         <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
//           <div className="space-y-2 w-full md:w-10/12">
//             <h1 className="font-semibold text-xl md:text-2xl text-black">Our Vision</h1>
//             <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
//           </div>
//           <div className="space-y-3 w-full md:w-10/12">
//             <h1 className="font-semibold text-xl md:text-2xl text-black">Our Mission</h1>
//             <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
//           </div>
//           <div className="space-y-3 w-full md:w-10/12">
//             <h1 className="font-semibold text-xl md:text-2xl text-black">Our History</h1>
//             <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2">
//           <Image src={about5} alt="Our Values" className="w-full h-auto" />
//         </div>
//       </section>

//       {/* Final Image Section */}
//       <section ref={finalImageRef} className="h-[60vh] sm:h-[70vh] md:h-[90vh] mt-8 md:mt-14" style={{
//         backgroundImage: 'url("/about6.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}>
//         <div className="container mx-auto flow-root">
//           <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[37%] mt-8 sm:mt-12 md:mt-20 mx-auto md:ml-5 bg-white rounded-xl text-black space-y-4 p-6">
//             <h1 className="text-lg sm:text-xl font-semibold">What is Lorem Ipsum</h1>
//             <p className="text-sm sm:text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

'use client'

import React, { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import about1 from '../../../public/about1.png'
import about2 from '../../../public/about2.png'
import about3 from '../../../public/about3.png'
import about4 from '../../../public/about4.png'
import about5 from '../../../public/about5.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Define interfaces for section refs
interface SectionRefs {
  current: HTMLDivElement | null;
}

const Page: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const whoWeAreRef = useRef<HTMLDivElement>(null)
  const ourValuesRef = useRef<HTMLDivElement>(null)
  const finalImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelector('h1'), {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
          },
        })
      }

      // Who We Are Section Animation
      if (whoWeAreRef.current) {
        const whoWeAreImages = whoWeAreRef.current.querySelectorAll('img')
        const whoWeAreTitle = whoWeAreRef.current.querySelector('h2')
        const whoWeAreText = whoWeAreRef.current.querySelector('p')

        gsap.from(whoWeAreImages, {
          opacity: 0,
          x: -50,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: whoWeAreRef.current,
            start: 'top 70%',
          },
        })

        gsap.from(whoWeAreTitle, {
          opacity: 0,
          y: 30,
          duration: 1,
          scrollTrigger: {
            trigger: whoWeAreRef.current,
            start: 'top 70%',
          },
        })

        gsap.from(whoWeAreText, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: whoWeAreRef.current,
            start: 'top 70%',
          },
        })
      }

      // Our Values Section Animation
      if (ourValuesRef.current) {
        const ourValuesItems = ourValuesRef.current.querySelectorAll('.space-y-3, .space-y-2')
        const ourValuesImage = ourValuesRef.current.querySelector('img')

        ourValuesItems.forEach((item) => {
          const title = item.querySelector('h1')
          const text = item.querySelector('p')

          gsap.from(title, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          })

          gsap.from(text, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          })
        })

        gsap.from(ourValuesImage, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          scrollTrigger: {
            trigger: ourValuesRef.current,
            start: 'top 70%',
          },
        })
      }

      // Final Image Section Animation
      if (finalImageRef.current) {
        const finalImageContent = finalImageRef.current.querySelector('div')
        const finalImageTitle = finalImageContent?.querySelector('h1')
        const finalImageText = finalImageContent?.querySelector('p')

        if (finalImageContent && finalImageTitle && finalImageText) {
          gsap.from(finalImageContent, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
              trigger: finalImageRef.current,
              start: 'top 70%',
            },
          })

          gsap.from(finalImageTitle, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
              trigger: finalImageRef.current,
              start: 'top 70%',
            },
          })

          gsap.from(finalImageText, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.7,
            scrollTrigger: {
              trigger: finalImageRef.current,
              start: 'top 70%',
            },
          })
        }
      }
    })

    return () => ctx.revert() // Cleanup animations on component unmount
  }, [])

  return (
    <div className='font-Outfit'>
      {/* Hero Section */}
      <div ref={heroRef} className="h-[40vh] sm:h-[50vh] md:h-[60vh] bg-gray-900 flex justify-center items-center"
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
      <section ref={whoWeAreRef} className="container mx-auto flex flex-col md:flex-row mt-8 md:mt-14 px-4">
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-3/5 md:w-1/2 mb-8 md:mb-0">
          <Image
            src={about2}
            alt="Person with water bottle"
            className="w-full md:w-[45%] h-auto"
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
      <section ref={ourValuesRef} className="container mx-auto flex flex-col md:flex-row px-4 mt-8 md:mt-14">
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
      <section ref={finalImageRef} className="h-[60vh] sm:h-[70vh] md:h-[90vh] mt-8 md:mt-14" style={{
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

export default Page