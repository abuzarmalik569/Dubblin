"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ProductEach from './ProductEach';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronRight, Check, Trash2, ShoppingCart } from 'lucide-react';

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
    { id: 1, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'New', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 2, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 3, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 4, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 5, name: 'Fridge Bottle', category: 'fridge-bottle', image: '/image 8.png', price: 599, oldPrice: 999, colors: ['clear', 'blue', 'green'], sizes: ['500ml', '1L', '2L'] },
    { id: 6, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 7, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 8, name: 'Lunch Box', category: 'lunch-box', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'New', colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const headingRef = useRef(null);
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);
  const popupRef = useRef(null);
  const cartIconRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: headingRef.current, start: "top bottom", end: "bottom center", toggleActions: "play none none reverse" } }
      );

      gsap.fromTo(categoriesRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: categoriesRef.current, start: "top bottom", end: "bottom center", toggleActions: "play none none reverse" } }
      );

      gsap.fromTo(productsRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: productsRef.current, start: "top bottom-=100", end: "bottom center", toggleActions: "play none none reverse" } }
      );

      gsap.fromTo('.bg-pink-500',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, delay: 0.2, stagger: 0.05, ease: "back.out(1.7)", scrollTrigger: { trigger: productsRef.current, start: "top bottom-=100", end: "bottom center", toggleActions: "play none none reverse" } }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleCategoryClick = (categoryId) => {
    gsap.to(categoriesRef.current.children, {
      scale: 0.95,
      opacity: 0.7,
      duration: 0.2,
      stagger: 0.05,
    });

    setActiveCategory(categoryId);

    gsap.to(categoriesRef.current.children, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      delay: 0.2,
      stagger: 0.05,
      ease: "back.out(1.7)",
    });
  };

  const openProductSelection = (product) => {
    setActiveProduct(product);
    gsap.to(popupRef.current, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" });
  };

  const closeProductSelection = () => {
    gsap.to(popupRef.current, { 
      autoAlpha: 0, 
      y: 20, 
      duration: 0.3, 
      ease: "power2.in",
      onComplete: () => {
        setActiveProduct(null);
      }
    });
  };

  const addToCart = (product, color, size, quantity) => {
    const newItem = {
      ...product,
      selectedColor: color,
      selectedSize: size,
      quantity: quantity,
      uniqueId: Date.now()
    };
    setSelectedProducts(prev => [...prev, newItem]);
    closeProductSelection();

    // GSAP animation for adding to cart
    gsap.to(cartIconRef.current, {
      scale: 1.5,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
  };

  const removeFromCart = (uniqueId) => {
    setSelectedProducts(prev => prev.filter(item => item.uniqueId !== uniqueId));
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
      <div ref={headingRef} className="text-center mt-8 md:mt-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Cinzel">
          Discover Our Categories
        </h2>
        <p className="text-base md:text-lg font-normal mt-2 tracking-wide md:mt-4 max-w-2xl mx-auto font-Outfit">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div ref={categoriesRef} className="flex overflow-x-auto overflow-y-hidden justify-center gap-0 md:gap-6 mt-8">
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

< hr />

{/* 
      <div className="mt-8 mb-4 flex justify-end items-center">
        <button
          ref={cartIconRef}
          onClick={() => setShowCart(true)}
          className="bg-pink-500 text-white px-4 py-2 rounded-full flex items-center"
        >
          <ShoppingCart size={20} className="mr-2" />
          <span>{selectedProducts.length}</span>
        </button>
      </div> */}

      <div ref={productsRef} className="grid font-Outfit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12 mb-16">
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

      {/* Selection Popup */}
      {activeProduct && (
        <div 
          ref={popupRef}
          className="fixed inset-0 font-Outfit flex items-center justify-center bg-black bg-opacity-50 z-50 invisible"
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

      {/* Cart Popup */}
      {showCart && (
        <div className="fixed inset-0 font-Outfit bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {selectedProducts.map(item => (
              <div key={item.uniqueId} className="flex items-center justify-between border-b py-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Color: {item.selectedColor}, Size: {item.selectedSize}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div>
                  <p className="font-bold">&#8377;{(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.uniqueId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <p className="text-xl font-bold">Total: &#8377;{selectedProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
              <button
                onClick={() => setShowCart(false)}
                className="bg-pink-500 text-white px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;

