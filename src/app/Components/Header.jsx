"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Search, User, ShoppingCart, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

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
    href: '/about',
    sections: [
      {
        sectionTitle: 'Our Mission',
        links: [
          { linkTitle: 'Vision', linkHref: '/about/mission/vision' },
          { linkTitle: 'Team', linkHref: '/about/mission/team' },
        ],
      },
      {
        sectionTitle: 'Our Team',
        links: [
          { linkTitle: 'Meet the Team', linkHref: '/about/team/meet-the-team' },
          { linkTitle: 'Team Members', linkHref: '/about/team/team-members' },
        ],
      },
      {
        sectionTitle: 'Our History',
        links: [
          { linkTitle: 'Our Story', linkHref: '/about/history/our-story' },
          { linkTitle: 'Timeline', linkHref: '/about/history/timeline' },
        ],
      },
      {
        sectionTitle: 'Contact Us',
        links: [
          { linkTitle: 'Contact Form', linkHref: '/contact' },
          { linkTitle: 'Email', linkHref: '/contact/email' },
        ],
      }
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
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
          <button
            className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
            onClick={toggleAboutDropdown}
          >
            {item.title}
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
          {isAboutDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              {item.sections.map((section, idx) => (
                <div key={idx} className="py-1">
                  <h3 className="px-4 py-2 text-sm font-medium text-gray-900">{section.title}</h3>
                  {section.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
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

  return (
    <header className="relative font-Outfit">
      <div className="font-Outfit text-center py-4 bg-black text-white">
        <h1>Free Shipping On Orders Over &#8377;25</h1>
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
                <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  <ShoppingCart className="h-6 w-6" />
                  
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
              <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <ShoppingCart className="h-5 w-5 mr-2" />

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
    </header>
  );
}

