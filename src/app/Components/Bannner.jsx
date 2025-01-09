// 'use client'

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { splitText } from './Utils/splitText';

// gsap.registerPlugin(ScrollTrigger);

// const Banner = () => {
//   const bannerRef = useRef(null);
//   const bgRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);

//   useEffect(() => {
//     if (!bannerRef.current || !bgRef.current || !titleRef.current || !subtitleRef.current) return;

//     const banner = bannerRef.current;
//     const bg = bgRef.current;
//     const title = titleRef.current;
//     const subtitle = subtitleRef.current;

//     // Split text
//     title.innerHTML = splitText(title.textContent || '');
//     subtitle.innerHTML = splitText(subtitle.textContent || '');

//     const titleChars = title.querySelectorAll('span');
//     const subtitleChars = subtitle.querySelectorAll('span');

//     // Background reveal animation
//     gsap.fromTo(bg, 
//       { clipPath: 'inset(100% 0 0 0)' },
//       {
//         clipPath: 'inset(0% 0 0 0)',
//         duration: 1.5,
//         ease: 'power4.inOut',
//         scrollTrigger: {
//           trigger: banner,
//           start: 'top center',
//           end: 'center center',
//           scrub: 1,
//         }
//       }
//     );

//     // Text animation
//     gsap.fromTo(titleChars, 
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         stagger: 0.03,
//         ease: 'back.out(1.7)',
//         scrollTrigger: {
//           trigger: banner,
//           start: 'top center+=100',
//           end: 'center center',
//           scrub: 1,
//         }
//       }
//     );

//     gsap.fromTo(subtitleChars, 
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         stagger: 0.02,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: banner,
//           start: 'top center',
//           end: 'center center-=100',
//           scrub: 1,
//         }
//       }
//     );

//     // Clean up
//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   return (
//     <div 
//       ref={bannerRef}
//       className="relative mt-20 overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]"
//     >
//       <div 
//         ref={bgRef}
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/banner2.png')",
//         }}
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50" />
//       <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
//         <div className="text-center text-white font-Outfit max-w-4xl">
//           <h1 
//             ref={titleRef}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
//           >
//             Save The Water
//           </h1>
//           <p 
//             ref={subtitleRef}
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide"
//           >
//             <span className='text-pink-400 font-semibold'>DURABLE </span>, RELIABLE, AND READY FOR ANYTHING
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;




'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current || !bgRef.current || !titleRef.current || !subtitleRef.current) return;

    const banner = bannerRef.current;
    const bg = bgRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    // Background fade-in animation
    gsap.fromTo(bg, 
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: banner,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        }
      }
    );

    // Title animation
    gsap.fromTo(title, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: banner,
          start: 'top center+=100',
          end: 'center center',
          scrub: 1,
        }
      }
    );

    // Subtitle animation
    gsap.fromTo(subtitle, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: banner,
          start: 'top center',
          end: 'center center-=100',
          scrub: 1,
        }
      }
    );

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={bannerRef}
      className="relative mt-20 overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]"
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner2.png')",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white font-Outfit max-w-4xl">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
          >
            Save The Water
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide"
          >
            <span className='text-pink-400 font-semibold'>DURABLE</span>, RELIABLE, AND READY FOR ANYTHING
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

