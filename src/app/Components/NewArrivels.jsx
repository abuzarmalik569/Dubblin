"use client"
import React, { useState, useRef, useContext } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ProductEach from './ProductEach';
import { cartContext } from '../cartContext';

const NewArrivals = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const { setCartlist } = useContext(cartContext);
  const scrollContainerRef = useRef(null);

 
  const products = [
    { 
      id: 1, 
      name: 'Custom Eco-friendly Water Bottle', 
      category: 'sports-bottle', 
      image: '/image 8.png', 
      price: 599, 
      oldPrice: 999, 
      badge: 'New', 
      colors: [
        { name: 'Buttercup', colorCode: 'bg-yellow-400', priceMultiplier: 1, outlinecolor:'outline-yellow-400' },
        { name: 'Red', colorCode: 'bg-red-500', priceMultiplier: 1.1, outlinecolor:'outline-red-500' },
        { name: 'Pink', colorCode: 'bg-pink-300', priceMultiplier: 1.05, outlinecolor:'outline-pink-300' },
        { name: 'Brown', colorCode: 'bg-amber-800', priceMultiplier: 1.15, outlinecolor:'outline-amber-800' },
      ], 
      sizes:['150ml', '800ml', '500ml', '600ml'],
      variations: [
        '/image 8.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png'
      ]
    },
    { 
      id: 2, 
      name: 'Custom Eco-friendly Mug', 
      category: 'mugs', 
      image: '/image 3.png', 
      price: 599, 
      oldPrice: 999, 
      badge: 'most ordered', 
      colors: [
        { name: 'Buttercup', colorCode: 'bg-yellow-400', priceMultiplier: 1, outlinecolor:'outline-yellow-400' },
        { name: 'Red', colorCode: 'bg-red-500', priceMultiplier: 1.1, outlinecolor:'outline-red-500' },
        { name: 'Pink', colorCode: 'bg-pink-300', priceMultiplier: 1.05, outlinecolor:'outline-pink-300' },
        { name: 'Brown', colorCode: 'bg-amber-800', priceMultiplier: 1.15, outlinecolor:'outline-amber-800' },
        { name: 'Green', colorCode: 'bg-green-500', priceMultiplier: 1.2, outlinecolor:'outline-green-500' },
        { name: 'Blue', colorCode: 'bg-blue-500', priceMultiplier: 1.2, outlinecolor:'outline-blue-500' },
      ], 
      sizes:['800ml', '500ml', '600ml', '1000ml'],
      variations: [
        '/image 3.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
      ]
    },
    { 
      id: 3, 
      name: 'Custom Eco-friendly Mug', 
      category: 'mugs', 
      image: '/image 4.png', 
      price: 599, 
      oldPrice: 999, 
      badge: 'most ordered', 
      colors: [
        { name: 'Buttercup', colorCode: 'bg-yellow-400', priceMultiplier: 1, outlinecolor:'outline-yellow-400' },
        { name: 'Red', colorCode: 'bg-red-500', priceMultiplier: 1.1, outlinecolor:'outline-red-500' },
        { name: 'Pink', colorCode: 'bg-pink-300', priceMultiplier: 1.05, outlinecolor:'outline-pink-300' },
        { name: 'Brown', colorCode: 'bg-amber-800', priceMultiplier: 1.15, outlinecolor:'outline-amber-800' },
        { name: 'Green', colorCode: 'bg-green-500', priceMultiplier: 1.2, outlinecolor:'outline-green-500' },
        { name: 'Blue', colorCode: 'bg-blue-500', priceMultiplier: 1.2, outlinecolor:'outline-blue-500' },
      ], 
      sizes:['800ml', '500ml', '600ml', '1000ml'],
      variations: [
        '/image 4.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
      ]
    },
    { 
      id: 4, 
      name: 'Custom Eco-friendly Mug', 
      category: 'mugs', 
      image: '/image 5.png', 
      price: 599, 
      oldPrice: 999, 
      badge: 'most ordered', 
      colors: [
        { name: 'Buttercup', colorCode: 'bg-yellow-400', priceMultiplier: 1, outlinecolor:'outline-yellow-400' },
        { name: 'Red', colorCode: 'bg-red-500', priceMultiplier: 1.1, outlinecolor:'outline-red-500' },
        { name: 'Pink', colorCode: 'bg-pink-300', priceMultiplier: 1.05, outlinecolor:'outline-pink-300' },
        { name: 'Brown', colorCode: 'bg-amber-800', priceMultiplier: 1.15, outlinecolor:'outline-amber-800' },
        { name: 'Green', colorCode: 'bg-green-500', priceMultiplier: 1.2, outlinecolor:'outline-green-500' },
        { name: 'Blue', colorCode: 'bg-blue-500', priceMultiplier: 1.2, outlinecolor:'outline-blue-500' },
      ], 
      sizes:['800ml', '500ml', '600ml', '1000ml'],
      variations: [
        '/image 5.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
      ]
    },
    { 
      id: 5, 
      name: 'Custom Eco-friendly Mug', 
      category: 'lunch-box', 
      image: '/image 8.png', 
      price: 599, 
      oldPrice: 999, 
      badge: 'most ordered', 
      colors: [
        { name: 'Buttercup', colorCode: 'bg-yellow-400', priceMultiplier: 1, outlinecolor:'outline-yellow-400' },
        { name: 'Red', colorCode: 'bg-red-500', priceMultiplier: 1.1, outlinecolor:'outline-red-500' },
        { name: 'Pink', colorCode: 'bg-pink-300', priceMultiplier: 1.05, outlinecolor:'outline-pink-300' },
        { name: 'Brown', colorCode: 'bg-amber-800', priceMultiplier: 1.15, outlinecolor:'outline-amber-800' },
        { name: 'Green', colorCode: 'bg-green-500', priceMultiplier: 1.2, outlinecolor:'outline-green-500' },
        { name: 'Blue', colorCode: 'bg-blue-500', priceMultiplier: 1.2, outlinecolor:'outline-blue-500' },
      ], 
      sizes:['800ml', '500ml', '600ml', '1000ml'],
      variations: [
        '/image 8.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
      ]
    },
    { 
      id: 6, 
      name: 'Custom Eco-friendly Mug', 
      category: 'lunch-box', 
      image: '/image 3.png', 
      price: 599, 
      oldPrice: 999, 
      badge: 'most ordered', 
      colors: [
        { name: 'Buttercup', colorCode: 'bg-yellow-400', priceMultiplier: 1, outlinecolor:'outline-yellow-400' },
        { name: 'Red', colorCode: 'bg-red-500', priceMultiplier: 1.1, outlinecolor:'outline-red-500' },
        { name: 'Pink', colorCode: 'bg-pink-300', priceMultiplier: 1.05, outlinecolor:'outline-pink-300' },
        { name: 'Brown', colorCode: 'bg-amber-800', priceMultiplier: 1.15, outlinecolor:'outline-amber-800' },
        { name: 'Green', colorCode: 'bg-green-500', priceMultiplier: 1.2, outlinecolor:'outline-green-500' },
        { name: 'Blue', colorCode: 'bg-blue-500', priceMultiplier: 1.2, outlinecolor:'outline-blue-500' },
      ], 
      sizes:['800ml', '500ml', '600ml', '1000ml'],
      variations: [
        '/image 3.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
      ]
    },
    { 
      id: 7, 
      name: 'Custom Eco-friendly Mug', 
      category: 'kettles', 
      image: '/image 4.png', 
      price: 599, 
      oldPrice: 999, 
      badge: 'most ordered', 
      colors: [
        { name: 'Buttercup', colorCode: 'bg-yellow-400', priceMultiplier: 1, outlinecolor:'outline-yellow-400' },
        { name: 'Red', colorCode: 'bg-red-500', priceMultiplier: 1.1, outlinecolor:'outline-red-500' },
        { name: 'Pink', colorCode: 'bg-pink-300', priceMultiplier: 1.05, outlinecolor:'outline-pink-300' },
        { name: 'Brown', colorCode: 'bg-amber-800', priceMultiplier: 1.15, outlinecolor:'outline-amber-800' },
        { name: 'Green', colorCode: 'bg-green-500', priceMultiplier: 1.2, outlinecolor:'outline-green-500' },
        { name: 'Blue', colorCode: 'bg-blue-500', priceMultiplier: 1.2, outlinecolor:'outline-blue-500' },
      ], 
      sizes:['800ml', '500ml', '600ml', '1000ml'],
      variations: [
        '/image 4.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
      ]
    },
    { 
      id: 8, 
      name: 'Custom Eco-friendly Mug', 
      category: 'fridge-bottle', 
      image: '/image 5.png', 
      price: 599, 
      oldPrice: 999, 
      badge: 'most ordered', 
      colors: [
        { name: 'Buttercup', colorCode: 'bg-yellow-400', priceMultiplier: 1, outlinecolor:'outline-yellow-400' },
        { name: 'Red', colorCode: 'bg-red-500', priceMultiplier: 1.1, outlinecolor:'outline-red-500' },
        { name: 'Pink', colorCode: 'bg-pink-300', priceMultiplier: 1.05, outlinecolor:'outline-pink-300' },
        { name: 'Brown', colorCode: 'bg-amber-800', priceMultiplier: 1.15, outlinecolor:'outline-amber-800' },
        { name: 'Green', colorCode: 'bg-green-500', priceMultiplier: 1.2, outlinecolor:'outline-green-500' },
        { name: 'Blue', colorCode: 'bg-blue-500', priceMultiplier: 1.2, outlinecolor:'outline-blue-500' },
      ], 
      sizes:['800ml', '500ml', '600ml', '1000ml'],
      variations: [
        '/image 5.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
        '/image 10.png',
      ]
    }
    
  ];

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openProductSelection = (product) => {
    setActiveProduct(product);
  };

  const closeProductSelection = () => {
    setActiveProduct(null);
  };

  const addToCart = (product, color, size, quantity) => {
    const newItem = {
      ...product,
      selectedColor: color,
      selectedSize: size,
      quantity: quantity,
      uniqueId: Date.now()
    };
    setCartlist((prev) => [...prev, newItem]);
    closeProductSelection();
  };

  const buyNow = (product, color, size, quantity) => {
    addToCart(product, color, size, quantity);
    setShowCart(true);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-8 font-Outfit text-black">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Cinzel text-center">
        New Arrivals
      </h2>
      <p className='font-Outfit font-medium text-lg text-center mb-5 text-black'>Discover our exciting New Arrivals</p>
    
      <div className="relative mt-12 mb-16">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map(product => (
            <div 
              key={product.id}
              className="flex-none w-64 mr-6 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              onClick={() => openProductSelection(product)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-white">
                <h3 className="text-lg font-medium mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                  &#8377;{product.price.toFixed(2)}
                  </span>
                  <span className="text-pink-700 line-through text-sm">
                  &#8377;{product.oldPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {activeProduct && (
        <div 
          className="fixed inset-0 font-Outfit flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeProductSelection}
        >
          <ProductEach 
            product={activeProduct}
            onAddToCart={addToCart}
            onBuyNow={buyNow}
            onClose={closeProductSelection}
          />
        </div>
      )}
    </div>
  );
};

export default NewArrivals;

