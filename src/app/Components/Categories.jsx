"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Categories = () => {
  // Register GSAP plugins
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', icon: '/icon14.png' },
    { id: 'sports-bottle', name: 'Sports Bottle', icon: '/icon8.png' },
    { id: 'mugs', name: 'Mugs', icon: '/icon9.png' },
    { id: 'lunch-box', name: 'Lunch Box', icon: '/icon11.png' },
    { id: 'kettles', name: 'Kettles', icon: '/icon12.png' },
    { id: 'fridge-bottle', name: 'Fridge Bottle & Jugs', icon: '/icon13.png' },
  ];

  const products = [
    { id: 1, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999 },
    { id: 2, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999 },
    { id: 3, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999 },
    { id: 4, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999 },
    { id: 5, name: 'Fridge Bottle', category: 'fridge-bottle', image: '/image 8.png', price: 599, oldPrice: 999 },
    { id: 6, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 5.png', price: 599, oldPrice: 999 },
    { id: 7, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 6.png', price: 599, oldPrice: 999 },
    { id: 8, name: 'Lunch Box', category: 'lunch-box', image: '/image 7.png', price: 599, oldPrice: 999 },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const headingRef = useRef(null);
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  useEffect(() => {
    // Wait for DOM to be ready
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Categories animation
      const categoryItems = categoriesRef.current.children;
      gsap.fromTo(categoryItems,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top bottom",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Products animation
      const productItems = productsRef.current.children;
      gsap.fromTo(productItems,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top bottom",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  // Animate products when category changes
  useEffect(() => {
    const productItems = productsRef.current.children;
    gsap.fromTo(productItems,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power1.out"
      }
    );
  }, [activeCategory]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
      {/* Heading */}
      <div ref={headingRef} className="text-center mt-8 md:mt-14 font-Outfit">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Discover Our Categories
        </h2>
        <p className="text-base md:text-lg font-light mt-4 md:mt-6 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Categories */}
      <div 
        ref={categoriesRef}
        className="flex flex-wrap justify-center gap-0 md:gap-6"
      >
        {categories.map(category => (
          <button
            key={category.id}
            className={`flex flex-col font-Outfit items-center justify-center p-4  ${
              activeCategory === category.id 
                ? '  text-pink-700 font-semibold' 
                : ''
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className="relative w-12 h-12 md:w-10 md:h-16">
              <Image
                src={category.icon}
                alt={category.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 48px, 64px"
              />
            </div>
            <span className="mt-2 text-sm md:text-base text-center">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* Products */}
      <div 
        ref={productsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12 mb-16"
      >
        {filteredProducts.map(product => (
          <div 
            key={product.id}
            className="group "
          >
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            
            <h3 className="text-lg font-medium mb-2 line-clamp-2">
              {product.name}
            </h3>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-300' : 'text-gray-300'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">
                Rs.{product.price.toFixed(2)}
              </span>
              <span className="text-pink-700 line-through text-sm">
                Rs.{product.oldPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;