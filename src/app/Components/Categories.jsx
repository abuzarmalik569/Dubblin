
"use client"
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import ProductEach from './ProductEach';
import { X, ChevronRight, Check, Trash2, ShoppingCart } from 'lucide-react';
import { cartContext } from '../cartContext';

const Categories = () => {
  const categories = [
    { 
      id: 'all', 
      name: 'All Products', 
      icon: '/icon14.png',
      activeIcon: '/core1.png' 
    },
    { 
      id: 'sports-bottle', 
      name: 'Sports Bottle', 
      icon: '/icon8.png',
      activeIcon: '/core2.png'
    },
    { 
      id: 'mugs', 
      name: 'Mugs', 
      icon: '/icon9.png',
      activeIcon: '/core3.png'
    },
    { 
      id: 'lunch-box', 
      name: 'Lunch Box', 
      icon: '/icon11.png',
      activeIcon: '/core4.png'
    },
    { 
      id: 'kettles', 
      name: 'Kettles', 
      icon: '/icon12.png',
      activeIcon: '/core5.png'
    },
    { 
      id: 'fridge-bottle', 
      name: 'Fridge Bottle & Jugs', 
      icon: '/icon13.png',
      activeIcon: '/core6.png'
    },
  ];

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

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProduct, setActiveProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const { setCartlist } = useContext(cartContext);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
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

  const filteredProducts = products.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 text-black">
      <div className="text-center mt-8 md:mt-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Cinzel">
          Discover Our Categories
        </h2>
        <p className='font-Outfit font-medium text-lg text-center text-black'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="flex overflow-x-auto overflow-y-hidden justify-start md:justify-center gap-0 md:gap-6 mt-3">
        {categories.map(category => (
          <button
            key={category.id}
            className={`flex flex-col font-Outfit items-center justify-center p-4 transition-all duration-300 ${
              activeCategory === category.id ? 'text-pink-700 font-semibold' : ''
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="relative w-12 h-12 md:w-10 md:h-16">
              <Image
                src={activeCategory === category.id ? category.activeIcon : category.icon}
                alt={category.name}
                fill
                className="object-contain transition-opacity duration-300"
                sizes="(max-width: 768px) 48px, 64px"
              />
            </div>
            <span className="mt-2 text-sm md:text-base text-center">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      <hr />

      <div className="grid font-Outfit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12 mb-16">
        {filteredProducts.map(product => (
          <div 
            key={product.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
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

export default Categories;

