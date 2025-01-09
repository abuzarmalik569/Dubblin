"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useContext } from 'react';
import { Search, User, ShoppingCart, Menu, X,Trash2, ChevronRight, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import React from 'react';
import { cartContext } from '../cartContext';


const createDynamicNavigation = (config) => {
  return config.map(({ title, href, sections }) => ({
    title,
    href,
    sections: sections.map(({ sectionTitle, links }) => ({
      title: sectionTitle,
      links: links.map(({ linkTitle, linkHref }) => ({
        title: linkTitle,
        href: linkHref,
      })),
    })),
  }));
};

const navigationConfig = [
  
 
  {
    title: 'My Account',
    href: '/',
    sections: [
      {
        // sectionTitle: 'Our Mission',
        links: [
          { linkTitle: 'Personal Info', linkHref: '/personal-info' },
          { linkTitle: 'Addresses', linkHref: '/address' },
        ],
      },
    ],
  },

  {
    title: 'Dashboard',
    href: '/dashboard',
    sections: [],
  },

  {
    title: 'Order History',
    href: '/order-history',
    sections: [],
  },
  
  
  
  {
    title: 'Home',
    href: '/',
    sections: [],
  },

  {
    title: 'About us',
    href: '/about-us',
    sections: [
      
    ],
  },
  {
    title: 'Blog',
    href: '/blogs',
    sections: [],
  },


  {
    title: 'Accessories',
    href: '/accessories',
    sections: [
      {
        sectionTitle: 'Summer Collection',
        links: [
          { linkTitle: 'Hats', linkHref: '/accessories/summer/hats' },
          { linkTitle: 'Sunglasses', linkHref: '/accessories/summer/sunglasses' },
        ],
      },
      {
        sectionTitle: 'Winter Collection',
        links: [
          { linkTitle: 'Scarves', linkHref: '/accessories/winter/scarves' },
          { linkTitle: 'Gloves', linkHref: '/accessories/winter/gloves' },
        ],
      }
    ],
  },
  {
    title: 'New Arrivals',
    href: '/new-arrivals',
    sections: [
      {
        sectionTitle: 'Spring 2024',
        links: [
          { linkTitle: 'Dresses', linkHref: '/new-arrivals/spring/dresses' },
          { linkTitle: 'Shoes', linkHref: '/new-arrivals/spring/shoes' },
        ],
      },
    ],
  },
  {
    title: 'Sale',
    href: '/sale',
    sections: [],
  },
];

const navigation = createDynamicNavigation(navigationConfig);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const searchBarRef = useRef(null);
  const searchInputRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
 
  const{cartlist,setCartlist}= useContext(cartContext)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setActiveMobileDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  useEffect(() => {
    if (isSearchOpen) {
      gsap.to(searchBarRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        onComplete: () => {
          searchInputRef.current?.focus();
        }
      });
    } else {
      gsap.to(searchBarRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        ease: "power2.in"
      });
    }
  }, [isSearchOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };



  const toggleMobileDropdown = (title) => {
    setActiveMobileDropdown((prevTitle) => (prevTitle === title ? null : title));
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleAboutDropdown = () => {
   
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setActiveMegaMenu(null);
  };

 

  const toggleMegaMenu = (title) => {
    setActiveMegaMenu(activeMegaMenu === title ? null : title);
    setIsAboutDropdownOpen(false);
  };


  const renderNavItem = (item) => {
    if (item.title === 'About us') {
      return (
        <div className="relative" ref={aboutDropdownRef}>
         <Link href={'/about-us'}> <button
            className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
            onClick={toggleAboutDropdown}
          >
            {item.title}
           
          </button></Link>
       
        </div>
      );
    } else if (item.title === 'Accessories' || item.title === 'New Arrivals') {
      return (
        <button
          className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
          onClick={() => toggleMegaMenu(item.title)}
        >
          {item.title}
          <ChevronDown className="h-4 w-4 ml-1" />
        </button>
      );
    } else {
      return (
        <Link
          href={item.href}
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          {item.title}
        </Link>
      );
    }
  };
  const removeFromCart = (uniqueId) => {
    setCartlist(prev => prev.filter(item => item.uniqueId !== uniqueId));
  };


  return (
    <header className=" sticky z-50 top-0 font-Outfit">
      <div className="font-Outfit text-center py-4 bg-black text-white">
        <h1>Free Shipping On Orders Over &#8377;250</h1>
      </div>
      <nav className="border-b bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="hidden lg:flex lg:flex-1 lg:items-center justify-end lg:space-x-10">
              {navigation.slice(3, 7).map((item) => (
                <div key={item.title} className="relative">
                  {renderNavItem(item)}
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:pr-14 lg:pl-14 lg:flex-none">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Logo.png"
                  alt="Dubblin Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:space-x-10">
              {navigation.slice(7).map((item) => (
                <div key={item.title} className="relative">
                  {renderNavItem(item)}
                </div>
              ))}
              <div className="flex items-center w-52 borderm justify-end space-x-6">
                <button
                  onClick={toggleSearch}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <Search className="h-6 w-6" />
                </button>
                <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  <a href="/login"><User className="h-6 w-6" /></a>
                  
                 
                </button>
                <button className="text-gray-700 relative hover:text-gray-900 transition-colors duration-200" onClick={()=>{
               
                setShowCart(true)
              
                }}>
                  <ShoppingCart className="h-6 w-6 " />
                  <div className='absolute rounded-full p-1 w-4 flex justify-center items-center h-4 bg-black text-xs text-white -top-2 -right-2'>
                    {cartlist.length}
                  </div>
                  
                </button>
              </div>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <a href="/login"><User className="h-6 w-6" /></a>

              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200"onClick={()=>{
               
               setShowCart(true)
             
               }}>
                 <ShoppingCart className="h-6 w-6 " />
                 
              </button>
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeMegaMenu && (
        <div className="absolute left-0 w-full bg-white shadow-lg z-50 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8">
              {navigation.find((item) => item.title === activeMegaMenu)?.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="font-medium text-gray-900">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed  top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image
            src="/Logo.png"
            alt="Dubblin Logo"
            width={100}
            height={33}
            className="h-8 w-auto"
          />
          <div className="flex items-center space-x-4">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="overflow-y-auto h-full pb-20">
          {/* <button>My Account</button> */}
          {navigation.map((item) => (
            <div key={item.title} className="border-b">
              
              {item.sections.length > 0 ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(item.title)}
                    className="flex justify-between items-center w-full p-4 text-left text-gray-700 hover:text-gray-900"
                  >
                    {item.title}
                    <ChevronRight
                      className={`h-5 w-5 transform transition-transform ${activeMobileDropdown === item.title ? 'rotate-90' : ''
                        }`}
                    />
                  </button>
                  {activeMobileDropdown === item.title && (

                    <div className="bg-gray-50 p-4">
                      {item.sections.map((section, idx) => (
                        <div key={idx} className="mb-4 ">
                          <h3 className="font-medium text-gray-900 mb-2">{section.title}</h3>
                          <ul className="space-y-2 ">
                            {section.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                <Link
                                  href={link.href}
                                  className="text-sm text-gray-600 hover:text-gray-900"
                                  onClick={toggleMobileMenu}
                                >
                                  {link.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block w-full p-4 text-left text-gray-700 hover:text-gray-900"
                  onClick={toggleMobileMenu}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <button className=' bg-black text-white w-1/2 py-2 rounded-sm ml-3 mt-4'>LOG OUT</button>
        </div>
      </div>
      {!isMobileMenuOpen && <div
        ref={searchBarRef}
        className={`absolute top-full left-0 right-0 bg-white text-black shadow-md p-4 z-50 opacity-0 -translate-y-4`}
      >
        <div className="max-w-3xl mx-auto flex items-center">
          <div className="w-2/3 mx-auto">
            <input
              ref={searchInputRef}
              className="w-full peer z-[21] px-6 py-4 rounded-xl outline-none duration-200 ring-2 ring-pink-200 focus:ring-pink-500"
              color="white"
              size="xl"
              placeholder="Search..."
            />
            <div
              className="opacity-0 mt-5 -translate-y-2 peer-focus:translate-y-0 pointer-events-none peer-focus:pointer-events-auto duration-200 peer-focus:opacity-100 absolute top-16 w-full z-[500] left-0 rounded-xl border border-white-222 p-4 bg-white shadow-lg"
            >
              <p className="font-semibold text-xs text-[#5D5D5F]">LAST SEARCHES</p>
              <ul className="flex gap-2 flex-col mt-2">
                <li
                  className="px-2 cursor-pointer text-sm hover:bg-pink-100 py-2 rounded-lg"
                >
                  Something you've searched before
                </li>
                <li
                  className="px-2 cursor-pointer text-sm hover:bg-pink-100 py-2 rounded-lg"
                >
                  Something you've searched before
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>}
      {showCart && (
        <div className="absolute right-0 inset-0 h-screen font-Outfit text-black  bg-black bg-opacity-50 flex items-center justify-end z-50 ">
          <div className="bg-white border p-6 rounded-lg w-screen md:w-2/5 h-screen overflow-y-auto container">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-3xl font-normal">Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={34} />
              </button>
            </div>
            <hr className="border-t-2 border-black" />
            <div className="overflow-y-auto mt-2 h-[69%] no-scrollbar">
              {console.log(cartlist)}
              {cartlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <ShoppingCart size={64} className="text-gray-400 mb-4 animate-bounce" />
                  <p className="text-xl font-semibold text-gray-600 animate-pulse">Your cart is empty</p>
                </div>
              ) : (
                
                cartlist.map((item) => (
                  <div
                    key={item.uniqueId}
                    className="flex items-center justify-between border border-black rounded-md mt-4 mb-4 py-2 p-2"
                  >
                    <div className="flex justify-start gap-5 items-center">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-28 h-28"
                        />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="font-bold">
                          &#8377;{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <div className="flex items-center">
                          <div className="flex items-center border">
                            <button
                              onClick={() =>
                                setCartlist((prevCartlist) =>
                                  prevCartlist.map((product) =>
                                    product.uniqueId === item.uniqueId
                                      ? { ...product, quantity: Math.max(1, product.quantity - 1) }
                                      : product
                                  )
                                )
                              }
                              className="bg-gray-200 px-3 text-xl"
                            >
                              -
                            </button>
                            <p className="px-3 text-md">{item.quantity}</p>
                            <button
                              onClick={() =>
                                setCartlist((prevCartlist) =>
                                  prevCartlist.map((product) =>
                                    product.uniqueId === item.uniqueId
                                      ? { ...product, quantity: product.quantity + 1 }
                                      : product
                                  )
                                )
                              }
                              className="bg-gray-200 px-3 text-xl"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => removeFromCart(item.uniqueId)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                ))
                
              )}
            </div>
            <hr className="border-b-2 border-black items-center" />
            <div className="p-2 bg-white  mt-2 flex justify-between">
              <p className="text-xl font-normal">Subtotal </p>
              <p className="text-xl font-normal block">
                &#8377;
                {cartlist
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
            <a href="/billing-page">
            <button className='bg-pink-800 text-white w-3/5 mt-4 flex justify-center p-3 rounded-lg mx-auto' disabled={cartlist.length === 0}>CHECKOUT</button></a>
          </div>
        </div>
      )}
    </header>
  );
}

  
