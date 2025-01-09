'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'

const images = [
  '/ImageB.png',
  '/ImageC.png',
  '/ImageD.png',
  '/ImageE.png',
  '/ImageB.png',
  '/ImageC.png',
  '/ImageD.png',
  '/ImageE.png',
  '/ImageB.png',
  '/ImageC.png',
  '/ImageD.png',
  '/ImageE.png',
]

const InstagramReels = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)
  const reelsRef = useRef(null)

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width < 640) setVisibleCount(1)
      else if (width < 768) setVisibleCount(2)
      else if (width < 1024) setVisibleCount(3)
      else setVisibleCount(4)
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)

    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1)
      animateSlide('right')
    }
  }

  const handleNext = () => {
    if (startIndex < images.length - visibleCount) {
      setStartIndex((prevIndex) => prevIndex + 1)
      animateSlide('left')
    }
  }

  const animateSlide = (direction) => {
    if (reelsRef.current) {
      gsap.fromTo(
        reelsRef.current,
        { x: direction === 'left' ? 0 : -20, opacity: 0.5 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
    }
  }

  const visibleImages = images.slice(startIndex, startIndex + visibleCount)

  return (
    <div className="relative max-w-7xl mx-auto my-10 px-4">
      <div
        ref={reelsRef}
        className={`grid gap-4 overflow-hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
        style={{
          gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
        }}
      >
        {visibleImages.map((src, index) => (
          
          <div key={index} className="relative aspect-[9/16] overflow-hidden rounded-lg group">
         
            <Image
              src={src}
              alt={`Instagram Reel ${startIndex + index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
        
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div> */}
           
          </div>
         
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-black p-2 rounded-full shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 z-10"
        onClick={handlePrev}
        disabled={startIndex === 0}
        aria-label="Previous images"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-black p-2 rounded-full shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 z-10"
        onClick={handleNext}
        disabled={startIndex >= images.length - visibleCount}
        aria-label="Next images"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

export default InstagramReels

