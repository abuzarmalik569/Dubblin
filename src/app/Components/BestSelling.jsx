
"use client"
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const BestSelling = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple fade up animation for title
            gsap.from(".best-selling-title", {
                scrollTrigger: {
                    trigger: ".best-selling-title",
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

            // Simple fade up for all images with slight stagger
            gsap.from(".image-container", {
                scrollTrigger: {
                    trigger: ".image-grid",
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="container mx-auto">
            <h1 className="best-selling-title text-black text-center mt-8 md:mt-16 mb-1 text-3xl font-bold font-Cinzel">
                Best Selling
            </h1>
            <p className=' font-Outfit font-medium text-lg text-center mb-10 text-black'>Discover our exciting New Arrivals</p>
            <div className="image-grid flex flex-col items-center lg:flex-row justify-center gap-4">
                {/* First Image */}
                <div className="image-container relative w-full lg:w-auto">
                    <Image 
                        src="/image 15.png" 
                        width={605} 
                        height={595} 
                        alt="Friday the 13th Sale"

                        priority
                    />
                    <div className="absolute font-Outfit text-center bottom-4 md:bottom-8 left-4 md:left-8 text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">FRIDAY</h1>
                        <p className="text-xl md:text-2xl lg:text-3xl text-pink-800 font-bold">THE 13TH SALE</p>
                    </div>
                </div>

                {/* Middle Column */}
                <div className="flex flex-col items-center gap-4 w-full lg:w-auto">
                    {/* Top Image */}
                    <div className="image-container relative">
                        <Image 
                            src="/image 3.png" 
                            alt="Special Offer" 
                            width={350} 
                            height={300}
            
                            priority
                        />
                        <div className="absolute font-Outfit font-bold inset-4 flex flex-col justify-end text-white">
                            <h2 className="text-2xl md:text-3xl">FRIDAY</h2>
                            <p className="text-base md:text-lg">THE 13TH SALE</p>
                        </div>
                    </div>

                    {/* Bottom Image */}
                    <div className="image-container relative">
                        <Image 
                            src="/image 4.png" 
                            alt="New Collection" 
                            width={350} 
                            height={300}
                            priority
                        />
                        <div className="absolute font-Outfit font-bold inset-4 flex flex-col justify-end text-white">
                            <h2 className="text-2xl md:text-3xl">FRIDAY</h2>
                            <p className="text-base md:text-lg">THE 13TH SALE</p>
                        </div>
                    </div>
                </div>

                {/* Last Image */}
                <div className="image-container relative w-full lg:w-auto">
                    <Image 
                        src="/image 2.png" 
                        alt="Limited Edition" 
                        width={605} 
                        height={595}
                       
                        priority
                    />
                    <div className="absolute font-Outfit text-center bottom-4 md:bottom-8 left-4 md:left-8 text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold">FRIDAY</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl text-pink-800 font-bold">THE 13TH SALE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSelling;
