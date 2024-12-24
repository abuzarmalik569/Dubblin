
"use client"

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = [useRef(null), useRef(null), useRef(null)];
  const textRefs = [useRef(null), useRef(null), useRef(null)];

  const banners = [
    {
      image: '/banner1.png',
      title: 'Save The',
      highlight: 'Water',
      description: 'Ideal for serving dry products and refrigerated food',
    },
    {
      image: '/banner2.png',
      title: 'Eco',
      highlight: 'Friendly',
      description: 'Sustainable solutions for a better tomorrow',
    },
    {
      image: '/Banner4.jpeg',
      title: 'Pure',
      highlight: 'Nature',
      description: 'Environmentally conscious choices for your lifestyle',
    },
  ];

  useEffect(() => {
    // Initial animation for the first slide
    animateSlide(0);

    // Set up automatic carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    animateSlide(currentSlide);
  }, [currentSlide]);

  const animateSlide = (index) => {
    // Reset all slides
    slideRefs.forEach((ref, i) => {
      if (ref.current) {
        gsap.set(ref.current, { opacity: i === index ? 1 : 0 });
      }
    });

    // Animate text elements
    if (textRefs[index].current) {
      const textElements = textRefs[index].current.children;
      gsap.fromTo(
        textElements,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }
  };

  return (
    <div className="relative z-10 h-[100vh] overflow-hidden">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          ref={slideRefs[index]}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${banner.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div 
            ref={textRefs[index]}
            className='px-6 font-Outfit text-white container mx-auto h-full flex flex-col justify-center'
          >
            <h1 className='text-4xl md:text-6xl lg:text-6xl'>
              {banner.title}{' '}
              <span className="font-semibold text-5xl md:text-7xl lg:text-8xl block mt-2">
                {banner.highlight}
              </span>
            </h1>
            <p className='mt-4 text-xl md:text-2xl max-w-xl'>
              {banner.description}
            </p>
            <button className='bg-red-700 px-5 py-2 rounded-lg mt-6 w-fit hover:bg-red-800 transition-colors duration-300'>
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
