// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { X, ChevronRight, Check, Trash2 } from 'lucide-react';

// const Categories = () => {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       gsap.registerPlugin(ScrollTrigger);
//     }
//   }, []);

//   const categories = [
//     { id: 'all', name: 'All Products', icon: '/icon14.png' },
//     { id: 'sports-bottle', name: 'Sports Bottle', icon: '/icon8.png' },
//     { id: 'mugs', name: 'Mugs', icon: '/icon9.png' },
//     { id: 'lunch-box', name: 'Lunch Box', icon: '/icon11.png' },
//     { id: 'kettles', name: 'Kettles', icon: '/icon12.png' },
//     { id: 'fridge-bottle', name: 'Fridge Bottle & Jugs', icon: '/icon13.png' },
//   ];

//   const products = [
//     { id: 1, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'new', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
//     { id: 2, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
//     { id: 3, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
//     { id: 4, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'new', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
//     { id: 5, name: 'Fridge Bottle', category: 'fridge-bottle', image: '/image 8.png', price: 599, oldPrice: 999, colors: ['clear', 'blue', 'green'], sizes: ['500ml', '1L', '2L'] },
//     { id: 6, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
//     { id: 7, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
//     { id: 8, name: 'Lunch Box', category: 'lunch-box', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'new', colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
//   ];

//   const [activeCategory, setActiveCategory] = useState('all');
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [activeProduct, setActiveProduct] = useState(null);
//   const [selectionStep, setSelectionStep] = useState(0); // 0: closed, 1: color, 2: size
//   const headingRef = useRef(null);
//   const categoriesRef = useRef(null);
//   const productsRef = useRef(null);
//   const popupRef = useRef(null);

//   const filteredProducts = activeCategory === 'all'
//     ? products
//     : products.filter(product => product.category === activeCategory);

//   const openProductSelection = (product) => {
//     setActiveProduct(product);
//     setSelectionStep(1);
//     gsap.to(popupRef.current, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" });
//   };

//   const closeProductSelection = () => {
//     gsap.to(popupRef.current, { 
//       autoAlpha: 0, 
//       y: 20, 
//       duration: 0.3, 
//       ease: "power2.in",
//       onComplete: () => {
//         setActiveProduct(null);
//         setSelectionStep(0);
//       }
//     });
//   };

//   const handleColorSelect = (color) => {
//     setActiveProduct(prev => ({ ...prev, selectedColor: color }));
//     setSelectionStep(2);
//   };

//   const handleSizeSelect = (size) => {
//     const updatedProduct = { ...activeProduct, selectedColor: activeProduct.selectedColor, selectedSize: size };
//     setSelectedProducts(prev => {
//       const existingIndex = prev.findIndex(p => p.id === updatedProduct.id);
//       if (existingIndex !== -1) {
//         const newSelected = [...prev];
//         newSelected[existingIndex] = updatedProduct;
//         return newSelected;
//       }
//       return [...prev, updatedProduct];
//     });
//     closeProductSelection();
//   };

//   const toggleProductSelection = (product) => {
//     if (isProductSelected(product.id)) {
//       deselectProduct(product.id);
//     } else {
//       openProductSelection(product);
//     }
//   };

//   const deselectProduct = (productId) => {
//     setSelectedProducts(prev => prev.filter(p => p.id !== productId));
//     gsap.to(`#product-${productId}`, {
//       scale: 0.95,
//       opacity: 0.7,
//       duration: 0.2,
//       yoyo: true,
//       repeat: 1,
//       ease: "power2.inOut"
//     });
//   };

//   const isProductSelected = (productId) => {
//     return selectedProducts.some(p => p.id === productId);
//   };

//   const scrollToProduct = (productId) => {
//     const productElement = document.getElementById(`product-${productId}`);
//     if (productElement) {
//       productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       gsap.to(productElement, {
//         scale: 1.05,
//         duration: 0.3,
//         yoyo: true,
//         repeat: 1,
//         ease: "power2.inOut"
//       });
//     }
//     closeProductSelection();
//   };

//   const goToCart = () => {
//     // Placeholder for cart functionality
//     console.log("Going to cart with selected products:", selectedProducts);
//     // Here you would typically navigate to the cart page or open a cart modal
//     alert("Going to cart! This is where you'd implement the cart view.");
//   };

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(headingRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: headingRef.current, start: "top bottom", end: "bottom center", toggleActions: "play none none reverse" } }
//       );

//       gsap.fromTo(categoriesRef.current.children,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: categoriesRef.current, start: "top bottom", end: "bottom center", toggleActions: "play none none reverse" } }
//       );

//       gsap.fromTo(productsRef.current.children,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: productsRef.current, start: "top bottom-=100", end: "bottom center", toggleActions: "play none none reverse" } }
//       );

//       gsap.fromTo('.bg-pink-500',
//         { scale: 0, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 0.4, delay: 0.2, stagger: 0.05, ease: "back.out(1.7)", scrollTrigger: { trigger: productsRef.current, start: "top bottom-=100", end: "bottom center", toggleActions: "play none none reverse" } }
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
//       <div ref={headingRef} className="text-center mt-8 md:mt-14 font-Outfit">
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
//           Discover Our Categories
//         </h2>
//         <p className="text-base md:text-lg font-light mt-4 md:mt-6 max-w-2xl mx-auto">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         </p>
//       </div>

//       <div ref={categoriesRef} className="flex flex-wrap justify-center gap-0 md:gap-6">
//         {categories.map(category => (
//           <button
//             key={category.id}
//             className={`flex flex-col font-Outfit items-center justify-center p-4 ${
//               activeCategory === category.id ? 'text-pink-700 font-semibold' : ''
//             }`}
//             onClick={() => setActiveCategory(category.id)}
//           >
//             <div className="relative w-12 h-12 md:w-10 md:h-16">
//               <Image
//                 src={category.icon}
//                 alt={category.name}
//                 fill
//                 className="object-contain"
//                 sizes="(max-width: 768px) 48px, 64px"
//               />
//             </div>
//             <span className="mt-2 text-sm md:text-base text-center">
//               {category.name}
//             </span>
//           </button>
//         ))}
//       </div>

//       <div ref={productsRef} className="grid font-Outfit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12 mb-16">
//         {filteredProducts.map(product => (
//           <div 
//             key={product.id}
//             id={`product-${product.id}`}
//             className={`group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ${
//               isProductSelected(product.id) ? 'ring-2 ring-pink-500' : ''
//             }`}
//             onClick={() => toggleProductSelection(product)}
//           >
//             <div className="relative aspect-square overflow-hidden">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//               />
//               {product.badge && (
//                 <div className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
//                   {product.badge}
//                 </div>
//               )}
//               {isProductSelected(product.id) && (
//                 <div className="absolute top-2 right-2 bg-pink-500 text-white p-1 rounded-full z-10">
//                   <Check size={16} />
//                 </div>
//               )}
//             </div>
            
//             <div className="p-4 bg-white">
//               <h3 className="text-lg font-medium mb-2 line-clamp-2">
//                 {product.name}
//               </h3>

//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-semibold">
//                   Rs.{product.price.toFixed(2)}
//                 </span>
//                 <span className="text-pink-700 line-through text-sm">
//                   Rs.{product.oldPrice.toFixed(2)}
//                 </span>
//               </div>

//               {isProductSelected(product.id) && (
//                 <div className="mt-2 flex flex-col gap-2">
//                   <div className="flex justify-between items-center">
//                     <div className="text-sm text-gray-600">
//                       {selectedProducts.find(p => p.id === product.id)?.selectedColor}, {selectedProducts.find(p => p.id === product.id)?.selectedSize}
//                     </div>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         deselectProduct(product.id);
//                       }}
//                       className="text-red-500 hover:text-red-700"
//                       aria-label="Deselect product"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       goToCart();
//                     }}
//                     className="w-full bg-pink-500 text-white py-1 px-2 rounded hover:bg-pink-600 transition-colors"
//                   >
//                     Go to cart
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Selection Popup */}
//       {activeProduct && (
//         <div 
//           ref={popupRef}
//           className="fixed inset-0 font-Outfit flex items-center justify-center bg-black bg-opacity-50 z-50 invisible"
//           onClick={closeProductSelection}
//         >
//           <div 
//             className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">{activeProduct.name}</h3>
//               <button onClick={closeProductSelection} className="text-gray-500 hover:text-gray-700">
//                 <X size={24} />
//               </button>
//             </div>
//             {selectionStep === 1 && (
//               <div>
//                 <p className="mb-2 font-medium">Select Color:</p>
//                 <div className="flex gap-2">
//                   {activeProduct.colors.map(color => (
//                     <button
//                       key={color}
//                       className={`w-8 h-8 rounded-full border-2 ${activeProduct.selectedColor === color ? 'border-black' : 'border-transparent'}`}
//                       style={{ backgroundColor: color }}
//                       onClick={() => handleColorSelect(color)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//             {selectionStep === 2 && (
//               <div>
//                 <p className="mb-2 font-medium">Select Size:</p>
//                 <div className="grid grid-cols-3 gap-2">
//                   {activeProduct.sizes.map(size => (
//                     <button
//                       key={size}
//                       className={`px-4 py-2 border rounded hover:bg-gray-100 ${
//                         activeProduct.selectedSize === size ? 'bg-pink-100 border-pink-500' : ''
//                       }`}
//                       onClick={() => handleSizeSelect(size)}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <div className="mt-4 flex justify-between items-center">
//               <span className="text-sm text-gray-500">
//                 Step {selectionStep} of 2
//               </span>
//               {selectionStep === 1 && (
//                 <button 
//                   className="flex items-center text-pink-600 hover:text-pink-700"
//                   onClick={() => setSelectionStep(2)}
//                 >
//                   Next <ChevronRight size={20} />
//                 </button>
//               )}
//               {selectionStep === 2 && (
//                 <button 
//                   className="flex items-center text-pink-600 hover:text-pink-700"
//                   onClick={() => scrollToProduct(activeProduct.id)}
//                 >
//                   Go to card
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;


"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronRight, Check, Trash2 } from 'lucide-react';

const Categories = () => {
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
    { id: 1, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 8.png', price: 599, oldPrice: 999, badge: 'new', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 2, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 3, name: 'Lunch Box', category: 'lunch-box', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
    { id: 4, name: 'Kettle', category: 'kettles', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'new', colors: ['silver', 'black', 'red'], sizes: ['1L', '1.5L', '2L'] },
    { id: 5, name: 'Fridge Bottle', category: 'fridge-bottle', image: '/image 8.png', price: 599, oldPrice: 999, colors: ['clear', 'blue', 'green'], sizes: ['500ml', '1L', '2L'] },
    { id: 6, name: 'Custom Eco-friendly Water Bottle', category: 'sports-bottle', image: '/image 5.png', price: 599, oldPrice: 999, badge: 'most ordered', colors: ['red', 'blue', 'green'], sizes: ['S', 'M', 'L'] },
    { id: 7, name: 'Custom Eco-friendly Mug', category: 'mugs', image: '/image 6.png', price: 599, oldPrice: 999, colors: ['white', 'black', 'gray'], sizes: ['Standard'] },
    { id: 8, name: 'Lunch Box', category: 'lunch-box', image: '/image 7.png', price: 599, oldPrice: 999, badge: 'new', colors: ['pink', 'blue', 'green'], sizes: ['Small', 'Large'] },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectionStep, setSelectionStep] = useState(0); // 0: closed, 1: color, 2: size
  const headingRef = useRef(null);
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);
  const popupRef = useRef(null);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  const openProductSelection = (product) => {
    setActiveProduct(product);
    setSelectionStep(1);
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
        setSelectionStep(0);
      }
    });
  };

  const handleColorSelect = (color) => {
    setActiveProduct(prev => ({ ...prev, selectedColor: color }));
    setSelectionStep(2);
  };

  const handleSizeSelect = (size) => {
    const updatedProduct = { 
      ...activeProduct, 
      selectedColor: activeProduct.selectedColor, 
      selectedSize: size,
      uniqueId: Date.now() // Add a unique identifier
    };
    setSelectedProducts(prev => [...prev, updatedProduct]);
    closeProductSelection();
  };

  const toggleProductSelection = (product) => {
    openProductSelection(product);
  };

  const deselectProduct = (uniqueId) => {
    setSelectedProducts(prev => prev.filter(p => p.uniqueId !== uniqueId));
    gsap.to(`#product-${uniqueId}`, {
      scale: 0.95,
      opacity: 0.7,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
  };

  const isProductSelected = (productId) => {
    return selectedProducts.some(p => p.id === productId);
  };

  const getProductSelections = (productId) => {
    return selectedProducts.filter(p => p.id === productId);
  };

  const scrollToProduct = (productId) => {
    const productElement = document.getElementById(`product-${productId}`);
    if (productElement) {
      productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      gsap.to(productElement, {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
    closeProductSelection();
  };

  const goToCart = () => {
    console.log("Going to cart with selected products:", selectedProducts);
    alert("Going to cart! This is where you'd implement the cart view.");
  };

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

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 text-black">
      <div ref={headingRef} className="text-center mt-8 md:mt-14 font-Outfit">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Discover Our Categories
        </h2>
        <p className="text-base md:text-lg font-light mt-4 md:mt-6 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div ref={categoriesRef} className="flex flex-wrap justify-center gap-0 md:gap-6">
        {categories.map(category => (
          <button
            key={category.id}
            className={`flex flex-col font-Outfit items-center justify-center p-4 ${
              activeCategory === category.id ? 'text-pink-700 font-semibold' : ''
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

      <div ref={productsRef} className="grid font-Outfit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12 mb-16">
        {filteredProducts.map(product => (
          <div 
            key={product.id}
            id={`product-${product.id}`}
            className={`group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ${
              isProductSelected(product.id) ? 'ring-2 ring-pink-500' : ''
            }`}
            onClick={() => toggleProductSelection(product)}
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
              {isProductSelected(product.id) && (
                <div className="absolute top-2 right-2 bg-pink-500 text-white p-1 rounded-full z-10">
                  <Check size={16} />
                </div>
              )}
            </div>
            
            <div className="p-4 bg-white">
              <h3 className="text-lg font-medium mb-2 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  Rs.{product.price.toFixed(2)}
                </span>
                <span className="text-pink-700 line-through text-sm">
                  Rs.{product.oldPrice.toFixed(2)}
                </span>
              </div>

              {isProductSelected(product.id) && (
                <div className="mt-2 flex flex-col gap-2">
                  {getProductSelections(product.id).map((selection, index) => (
                    <div key={selection.uniqueId} className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        {selection.selectedColor}, {selection.selectedSize}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deselectProduct(selection.uniqueId);
                        }}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Deselect product"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToCart();
                    }}
                    className="w-full bg-pink-500 text-white py-1 px-2 rounded hover:bg-pink-600 transition-colors"
                  >
                    Go to cart
                  </button>
                </div>
              )}
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
          <div 
            className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{activeProduct.name}</h3>
              <button onClick={closeProductSelection} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            {selectionStep === 1 && (
              <div>
                <p className="mb-2 font-medium">Select Color:</p>
                <div className="flex gap-2">
                  {activeProduct.colors.map(color => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 ${activeProduct.selectedColor === color ? 'border-black' : 'border-transparent'}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                    />
                  ))}
                </div>
              </div>
            )}
            {selectionStep === 2 && (
              <div>
                <p className="mb-2 font-medium">Select Size:</p>
                <div className="grid grid-cols-3 gap-2">
                  {activeProduct.sizes.map(size => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded hover:bg-gray-100 ${
                        activeProduct.selectedSize === size ? 'bg-pink-100 border-pink-500' : ''
                      }`}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Step {selectionStep} of 2
              </span>
              {selectionStep === 1 && (
                <button 
                  className="flex items-center text-pink-600 hover:text-pink-700"
                  onClick={() => setSelectionStep(2)}
                >
                  Next <ChevronRight size={20} />
                </button>
              )}
              {selectionStep === 2 && (
                <button 
                  className="flex items-center text-pink-600 hover:text-pink-700"
                  onClick={() => scrollToProduct(activeProduct.id)}
                >
                  Go to card
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;

