

// 'use client'

// import { useState, useMemo, useContext } from 'react'
// import Image from 'next/image'
// import { IoCheckmark } from "react-icons/io5"
// import { X } from 'lucide-react'


// const ProductEach = ({ product, onAddToCart, onBuyNow, onClose }) => {
//     const [selectedColor, setSelectedColor] = useState(product.colors[0])
//     const [selectedSize, setSelectedSize] = useState(product.sizes[0])
//     const [quantity, setQuantity] = useState(1)
//     const [zoomLevel, setZoomLevel] = useState(1);
//     const [isHovering, setIsHovering] = useState(false);
//     // const {setProducts}=useContext(cartContext)
//     const calculatePrice = (size, color) => {
//         const basePrice = product.price
//         const sizeMultiplier = {
//             '150ml': 1,
//             '500ml': 1.2,
//             '600ml': 1.3,
//             '800ml': 1.5,
//             '1000ml': 1.8
//         }
//         return basePrice * sizeMultiplier[size] * color.priceMultiplier
//     }

//     const currentPrice = useMemo(() => {
//         return calculatePrice(selectedSize, selectedColor)
//     }, [selectedSize, selectedColor])

//     const handleImageClick = () => {
//         if (isHovering) {
//             setZoomLevel(prevZoom => {
//                 const newZoom = prevZoom + 0.5;
//                 return newZoom > 3 ? 1 : newZoom;
//             });
//         }
//     };

//     return (
//         <div className='bg-white container mx-auto md:h-[90vh] h-full w-screen md:m-10 m-0 overflow-y-auto justify-evenly rounded-lg p-2' onClick={(e) => e.stopPropagation()}>
//             <div className='text-xl p-2 flex justify-end'>
//                 <button 
//                     onClick={onClose}
//                     className="text-gray-500 hover:text-gray-700"
//                 >
//                     <X size={24} />
//                 </button>
//             </div>
            
//             <div className='flex flex-wrap'>
//                 <div className="w-full md:w-1/2 mb-6 md:mb-0 mt-5 px-5">
//                     <div 
//                         className="flex justify-center relative overflow-hidden"
//                         onMouseEnter={() => setIsHovering(true)}
//                         onMouseLeave={() => {
//                             setIsHovering(false);
//                             setZoomLevel(1);
//                         }}
//                         onClick={handleImageClick}
//                     >
//                         <Image
//                             src={product.image}
//                             alt={product.name}
//                             width={600}
//                             height={600}
//                             className="transition-transform duration-300 ease-in-out w-full h-4/5 object-contain"
//                             style={{ 
//                                 transform: `scale(${zoomLevel})`,
//                                 cursor: isHovering ? 'zoom-in' : 'auto',
//                             }}
//                         />
//                     </div>
//                 </div>
                
//                 <div className="w-full mt-5 md:w-1/2 px-5">
//                     <div className='flex justify-between'>
//                         <h1 className="text-xl font-semibold">{product.name}</h1>
//                         {product.badge && (
//                             <span className="bg-yellow-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
//                                 {product.badge}
//                             </span>
//                         )}
//                     </div>
                    
//                     <div className="space-y-4 mt-8 mb-8 flex flex-col justify-center">
//                         <p className='flex text-sm'><strong className='w-1/4 block'>Available:</strong> <span className='block w-1/4 text-slate-500 font-semibold'>In stock</span></p>
//                         <p className='flex text-sm'><strong className='w-1/4 block'>Capacity</strong> <span className='block w-1/4 text-slate-500 font-semibold'>{selectedSize}</span></p>
//                         <p className='flex text-sm'><strong className='w-1/4 block'>Special Feature</strong> <span className='block w-1/4 text-slate-500 font-semibold'>Double Wall Insulated</span></p>
//                         <p className='flex text-sm'><strong className='w-1/4 block'>Model Name</strong> <span className='block w-1/4 text-slate-500 font-semibold'>DREAM 800 Violet</span></p>
//                     </div>
                    
//                     <div className="space-y-2 mb-4">
//                         <div className="text-sm font-medium">Select Color: <span>{selectedColor.name}</span></div>
//                         <div className="flex flex-wrap gap-1">
//                             {product.colors.map((color) => (
//                                 <button
//                                     key={color.name}
//                                     onClick={() => setSelectedColor(color)}
//                                     className="flex flex-col items-center space-y-1 p-2 rounded-lg"
//                                 >
//                                     <div className={`w-6 h-6 flex justify-center items-center rounded-full border outline outline-1 ${color.outlinecolor} ${color.colorCode}`}>
//                                         {selectedColor.name === color.name ? <IoCheckmark className='text-xl text-white'/> : ''}
//                                     </div>
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
                    
//                     <div className="space-y-2 mb-10">
//                         <div className="text-sm font-medium">Size:</div>
//                         <div className="flex flex-wrap gap-2">
//                             {product.sizes.map((size) => (
//                                 <button
//                                     key={size}
//                                     onClick={() => setSelectedSize(size)}
//                                     className={`px-1 flex items-center ${
//                                         selectedSize === size
//                                             ? 'bg-pink-300 text-pink-600 border-pink-600 border'
//                                             : 'bg-gray-100 text-gray-800 border-gray-100 border'
//                                     }`}
//                                 >
//                                     <div className='p-1'><div className={`rounded-full p-2 ${selectedSize === size ? 'bg-pink-600' : 'bg-gray-100'}`}></div></div>
//                                     <div className='text-sm'>
//                                         {size}                                
//                                     </div>
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
                    
//                     <div className="space-y-4 w-full border border-slate-500">
//                         <div className="text-2xl p-2 text-pink-800 font-semibold bg-gray-200 flex items-center border-2 border-slate-300">
//                             &#8377;{currentPrice.toFixed(2)}
//                             {product.oldPrice && (
//                                 <span className="ml-2 text-sm text-gray-500 line-through">
//                                     &#8377;{product.oldPrice.toFixed(2)}
//                                 </span>
//                             )}
//                         </div>
//                         <div className='ml-5'>
//                             <h2 className="text-sm font-medium mb-2">Quantity:</h2>
//                             <div className="flex items-center">
//                                 <div className="flex items-center border">
//                                     <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="bg-gray-200 px-3 text-xl">-</button>
//                                     <p className="px-3 text-md">{quantity}</p>
//                                     <button onClick={() => setQuantity(q => q + 1)} className="bg-gray-200 px-3 text-xl">+</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="text-lg px-4 pb-4">
//                             <button 
//                                 onClick={() => onAddToCart(product, selectedColor.name, selectedSize, quantity)}
//                                 className="w-[100%] text-black border border-black px-6 py-2 rounded-md transition-colors"
//                             >
//                                 Add to Cart
//                             </button>
//                             <button 
//                                 onClick={() => onBuyNow(product, selectedColor.name, selectedSize, quantity)}
//                                 className="w-[100%] text-white bg-black px-6 py-2 mt-5 rounded-md hover:bg-gray-800 transition-colors"
//                             >
//                                 Buy Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductEach



'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { IoCheckmark } from "react-icons/io5"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const ProductEach = ({ product, onAddToCart, onBuyNow, onClose }) => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])
    const [quantity, setQuantity] = useState(1)
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isHovering, setIsHovering] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const calculatePrice = (size, color) => {
        const basePrice = product.price
        const sizeMultiplier = {
            '150ml': 1,
            '500ml': 1.2,
            '600ml': 1.3,
            '800ml': 1.5,
            '1000ml': 1.8
        }
        return basePrice * sizeMultiplier[size] * color.priceMultiplier
    }

    const currentPrice = useMemo(() => {
        return calculatePrice(selectedSize, selectedColor)
    }, [selectedSize, selectedColor])

    const handleImageClick = () => {
        if (isHovering) {
            setZoomLevel(prevZoom => {
                const newZoom = prevZoom + 0.5;
                return newZoom > 3 ? 1 : newZoom;
            });
        }
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? product.variations.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % product.variations.length
        );
    };

    return (
        <div className='bg-white container mx-auto md:h-[90vh] h-full w-screen md:m-10 m-0 overflow-y-auto justify-evenly rounded-lg p-2' onClick={(e) => e.stopPropagation()}>
            <div className='text-xl p-2 flex justify-end'>
                <button 
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <X size={24} />
                </button>
            </div>
            
            <div className='flex flex-wrap'>
                <div className="w-full md:w-1/2 mb-6 md:mb-0 mt-5 px-5">
                    <div 
                        className="flex justify-center relative overflow-hidden"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => {
                            setIsHovering(false);
                            setZoomLevel(1);
                        }}
                        onClick={handleImageClick}
                    >
                        <Image
                            src={product.variations[currentImageIndex]}
                            alt={product.name}
                            width={600}
                            height={600}
                            className="transition-transform duration-300 ease-in-out w-full h-4/5 object-contain"
                            style={{ 
                                transform: `scale(${zoomLevel})`,
                                cursor: isHovering ? 'zoom-in' : 'auto',
                            }}
                        />
                    </div>

                    {/* Image Slider */}
                    <div className="mt-6 w-2/3 mx-auto relative">
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                            {product.variations.map((img, index) => (
                                <button
                                    key={index}
                                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-pink-500' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <Image
                                        src={img}
                                        alt={`Product variant ${index + 1}`}
                                        width={90}
                                        height={90}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                        <button 
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                            onClick={handlePrevImage}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                            onClick={handleNextImage}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                
                <div className="w-full mt-5 md:w-1/2 px-5">
                    <div className='flex justify-between'>
                        <a href="/product-details">
                        <h1 className="text-xl font-semibold">{product.name}</h1></a>
                        {product.badge && (
                            <span className="bg-yellow-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                {product.badge}
                            </span>
                        )}
                    </div>
                    
                    <div className="space-y-4 mt-8 mb-8 flex flex-col justify-center">
                        <p className='flex text-sm'><strong className='w-1/4 block'>Available:</strong> <span className='block w-1/4 text-slate-500 font-semibold'>In stock</span></p>
                        <p className='flex text-sm'><strong className='w-1/4 block'>Capacity</strong> <span className='block w-1/4 text-slate-500 font-semibold'>{selectedSize}</span></p>
                        <p className='flex text-sm'><strong className='w-1/4 block'>Special Feature</strong> <span className='block w-1/4 text-slate-500 font-semibold'>Double Wall Insulated</span></p>
                        <p className='flex text-sm'><strong className='w-1/4 block'>Model Name</strong> <span className='block w-1/4 text-slate-500 font-semibold'>DREAM 800 Violet</span></p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                        <div className="text-sm font-medium">Select Color: <span>{selectedColor.name}</span></div>
                        <div className="flex flex-wrap gap-1">
                            {product.colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color)}
                                    className="flex flex-col items-center space-y-1 p-2 rounded-lg"
                                >
                                    <div className={`w-6 h-6 flex justify-center items-center rounded-full border outline outline-1 ${color.outlinecolor} ${color.colorCode}`}>
                                        {selectedColor.name === color.name ? <IoCheckmark className='text-xl text-white'/> : ''}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="space-y-2 mb-10">
                        <div className="text-sm font-medium">Size:</div>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-1 flex items-center ${
                                        selectedSize === size
                                            ? 'bg-pink-300 text-pink-600 border-pink-600 border'
                                            : 'bg-gray-100 text-gray-800 border-gray-100 border'
                                    }`}
                                >
                                    <div className='p-1'><div className={`rounded-full p-2 ${selectedSize === size ? 'bg-pink-600' : 'bg-gray-100'}`}></div></div>
                                    <div className='text-sm'>
                                        {size}                                
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="space-y-4 w-full border border-slate-500">
                        <div className="text-2xl p-2 text-pink-800 font-semibold bg-gray-200 flex items-center border-2 border-slate-300">
                            &#8377;{currentPrice.toFixed(2)}
                            {product.oldPrice && (
                                <span className="ml-2 text-sm text-gray-500 line-through">
                                    &#8377;{product.oldPrice.toFixed(2)}
                                </span>
                            )}
                        </div>
                        <div className='ml-5'>
                            <h2 className="text-sm font-medium mb-2">Quantity:</h2>
                            <div className="flex items-center">
                                <div className="flex items-center border">
                                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="bg-gray-200 px-3 text-xl">-</button>
                                    <p className="px-3 text-md">{quantity}</p>
                                    <button onClick={() => setQuantity(q => q + 1)} className="bg-gray-200 px-3 text-xl">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="text-lg px-4 pb-4">
                            <button 
                                onClick={() => onAddToCart(product, selectedColor.name, selectedSize, quantity)}
                                className="w-[100%] text-black border border-black px-6 py-2 rounded-md transition-colors"
                            >
                                Add to Cart
                            </button>
                            <button 
                                onClick={() => onBuyNow(product, selectedColor.name, selectedSize, quantity)}
                                className="w-[100%] text-white bg-black px-6 py-2 mt-5 rounded-md hover:bg-gray-800 transition-colors"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEach

