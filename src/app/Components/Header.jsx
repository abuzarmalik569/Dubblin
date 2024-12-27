"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';

const navigation = [
  {
    title: 'Home',
    href: '/',
    sections: Array(5).fill(null).map((_, i) => ({
      title: `Category ${i + 1}`,
      links: Array(6).fill(null).map((_, j) => ({
        title: `Link ${j + 1}`,
        href: '#',
      })),
    })),
  },
  {
    title: 'About us',
    href: '/about',
    sections: Array(5).fill(null).map((_, i) => ({
      title: `Section ${i + 1}`,
      links: Array(6).fill(null).map((_, j) => ({
        title: `Link ${j + 1}`,
        href: '#',
      })),
    })),
  },
  {
    title: 'Blog',
    href: '/blog',
    sections: Array(5).fill(null).map((_, i) => ({
      title: `Topic ${i + 1}`,
      links: Array(6).fill(null).map((_, j) => ({
        title: `Article ${j + 1}`,
        href: '#',
      })),
    })),
  },
  {
    title: 'Accessories',
    href: '/accessories',
    sections: Array(5).fill(null).map((_, i) => ({
      title: `Collection ${i + 1}`,
      links: Array(6).fill(null).map((_, j) => ({
        title: `Item ${j + 1}`,
        href: '#',
      })),
    })),
  },
  {
    title: 'New Arrivals',
    href: '/new-arrivals',
    sections: Array(5).fill(null).map((_, i) => ({
      title: `Latest ${i + 1}`,
      links: Array(6).fill(null).map((_, j) => ({
        title: `Product ${j + 1}`,
        href: '#',
      })),
    })),
  },
  {
    title: 'Sale',
    href: '/sale',
    sections: Array(5).fill(null).map((_, i) => ({
      title: `Deals ${i + 1}`,
      links: Array(6).fill(null).map((_, j) => ({
        title: `Offer ${j + 1}`,
        href: '#',
      })),
    })),
  },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (title) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };

  return (
    <header className="relative font-Outfit">
        <div className="font-Outfit text-center py-4 bg-black text-white">
           <h1>Free Shipping On Orders Over $25</h1>
        </div>
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between lg:justify-start lg:space-x-8">
            <div className="hidden lg:flex ml-52 lg:items-center lg:space-x-8">
              {navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex lg:flex-1 lg:justify-center">
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

            <div className="flex items-center space-x-8">
              <div className="hidden lg:flex mr-52 lg:items-center lg:space-x-8">
                {navigation.slice(4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                {[Search, User, ShoppingCart].map((Icon, idx) => (
                  <button key={idx} className="text-gray-700 hover:text-gray-900">
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
                <button
                  className="lg:hidden text-gray-700 hover:text-gray-900"
                  onClick={toggleMobileMenu}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {activeDropdown && (
        <div
          className="absolute left-0 w-full bg-white shadow-lg z-50 hidden lg:block"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-5 gap-8">
              {navigation.find((item) => item.title === activeDropdown)?.sections.map((section, idx) => (
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
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="overflow-y-auto h-full pb-20">
          {navigation.map((item) => (
            <div key={item.title} className="border-b">
              <button
                onClick={() => toggleMobileDropdown(item.title)}
                className="flex justify-between items-center w-full p-4 text-left text-gray-700 hover:text-gray-900"
              >
                {item.title}
                <ChevronRight
                  className={`h-5 w-5 transform transition-transform ${
                    activeMobileDropdown === item.title ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {activeMobileDropdown === item.title && (
                <div className="bg-gray-50 p-4 ">
                  {item.sections.map((section, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 className="font-medium text-gray-900 mb-2">{section.title}</h3>
                      <ul className="space-y-2">
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
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
