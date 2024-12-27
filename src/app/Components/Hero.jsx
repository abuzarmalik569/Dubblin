

"use client"

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          ref={slideRefs[index]}
          className={`absolute inset-0 transition-opacity  duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${banner.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div 
            ref={textRefs[index]}
            className='px-20 md:px-16 lg:px-32 font-Outfit text-white  container mx-auto h-full flex flex-col justify-center items-start'
          >
            <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {banner.title}{' '}
              <span className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block mt-2">
                {banner.highlight}
              </span>
            </h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {banner.description}
            </p>
            <button className="bg-red-700 px-3 py-1 sm:px-4 sm:py-2 rounded-lg mt-3 sm:mt-4 md:mt-6 w-fit hover:bg-red-800 transition-colors duration-300 text-xs sm:text-sm md:text-base">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 md:top-1/2 lg:top-1/2 transform -translate-y-1/2 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-20 h-20" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 md:top-1/2 lg:top-1/2 transform -translate-y-1/2 text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-20 h-20" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white w-4 sm:w-6 md:w-8'
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



