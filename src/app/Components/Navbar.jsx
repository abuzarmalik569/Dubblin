"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import gsap from "gsap";

const Dropdown = ({ label, children, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownItemsRef = useRef(null);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }

    if (dropdownRef.current && dropdownItemsRef.current) {
      const tl = gsap.timeline();

      if (isOpen) {
        if (isMobile) {
          // Mobile fullscreen animation
          tl.set(dropdownRef.current, { display: "flex" })
            .fromTo(
              dropdownRef.current,
              { xPercent: -100 },
              { xPercent: 0, duration: 0.4, ease: "power3.out" }
            )
            .fromTo(
              dropdownItemsRef.current.children,
              { x: -100, opacity: 0 },
              { x: 0, opacity: 1, stagger: 0.1, duration: 0.3 },
              "-=0.2"
            );
        } else {
          // Desktop dropdown animation
          tl.set(dropdownRef.current, { display: "block" })
            .fromTo(
              dropdownRef.current,
              { y: -10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.2 }
            );
        }
      } else {
        if (isMobile) {
          // Mobile fullscreen close animation
          tl.to(dropdownItemsRef.current.children, {
            x: -50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.2,
          }).to(
            dropdownRef.current,
            {
              xPercent: -100,
              duration: 0.3,
              ease: "power3.in",
              onComplete: () => gsap.set(dropdownRef.current, { display: "none" }),
            },
            "-=0.1"
          );
        } else {
          // Desktop dropdown close animation
          tl.to(dropdownRef.current, {
            y: -10,
            opacity: 0,
            duration: 0.2,
            onComplete: () => gsap.set(dropdownRef.current, { display: "none" }),
          });
        }
      }
    }

    return () => {
      if (isMobile) {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen, isMobile]);

  // Mobile fullscreen dropdown
  if (isMobile) {
    return (
      <div className="relative">
        <button
          className="hover:text-gray-600 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {label}
        </button>
        <div
          ref={dropdownRef}
          className="fixed inset-0 bg-white z-[60] hidden"
          style={{ minWidth:"50vw" ,minHeight: "100vh" }}
        >
          <div className="absolute top-0 left-3">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl"
              aria-label="Close menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className="block h-0.5 w-full bg-black rotate-45 translate-y-2" />
                <span className="block h-0.5 w-full bg-black opacity-0" />
                <span className="block h-0.5 w-full bg-black -rotate-45 -translate-y-2" />
              </div>
            </button>
          </div>
          
          <div className=" flex flex-col mt-36 items-start w-full h-full px-6">
            <ul ref={dropdownItemsRef} className="space-y-6 text-2xl font-Outfit text-left">
              {children.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="absolute left-6 bottom-24 flex gap-8 text-3xl">
              <CiSearch className="hover:scale-110 transition-transform cursor-pointer" />
              <CiUser className="hover:scale-110 transition-transform cursor-pointer" />
              <CiShoppingCart className="hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop regular dropdown
  return (
    <div className="relative group">
      <button
        className="hover:text-gray-600 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>
      <div
        ref={dropdownRef}
        className=" absolute left-0 top-full mt-2 bg-white shadow-md border rounded-md text-sm z-40 hidden"
      >
        <ul ref={dropdownItemsRef}>
          {children.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      gsap.fromTo(".search-bar", 
        { width: 0, opacity: 0 }, 
        { width: "200px", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(".search-bar", { width: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animations
    tl.from(".logo", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    tl.from(
      ".menu-item",
      {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    );

    tl.from(
      ".nav-icon",
      {
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    if (overlayRef.current && menuItemsRef.current) {
      const tl = gsap.timeline();

      if (isOpen) {
        tl.set(overlayRef.current, { display: "flex" })
          .fromTo(
            overlayRef.current,
            { xPercent: -100 },
            { xPercent: 0, duration: 0.4, ease: "power3.out" }
          )
          .fromTo(
            menuItemsRef.current.children,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.1, duration: 0.3 },
            "-=0.2"
          );
      } else {
        tl.to(menuItemsRef.current.children, {
          x: -50,
          opacity: 0,
          stagger: 0.05,
          duration: 0.2,
        }).to(
          overlayRef.current,
          {
            xPercent: -100,
            duration: 0.3,
            ease: "power3.in",
            onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
          },
          "-=0.1"
        );
      }
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-[70] bg-white lg:hidden">
        <div className="font-Outfit text-center py-4 bg-black text-white">
          <h1>Free Shipping On Orders Over $25</h1>
        </div>
        <div className="border-b py-4 px-4">
          <div className="flex justify-between items-center">
            <button
              className="text-2xl p-2 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
            <div className="logo">
              <Image src="/Logo.png" width={80} height={80} alt="logo" priority />
            </div>
            <div className="flex gap-4">
              <div className="relative flex items-center">
                <CiSearch
                  className="nav-icon text-xl cursor-pointer"
                  onClick={toggleSearch}
                />
                <input
                  type="text"
                  className="search-bar absolute right-8 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-md px-2 py-1 text-sm w-0 opacity-0"
                  placeholder="Search..."
                />
              </div>
              <CiShoppingCart className="nav-icon text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-white z-[60] hidden"
        style={{ minHeight: "100vh", width: "70vw" }}
      >
        <div
          ref={menuItemsRef}
          className="flex flex-col justify-center items-start w-full px-10"
        >
          <ul className="space-y-6 bg-white z-40 text-2xl font-Outfit  text-left"
          >
            <Dropdown
              label="About us"
              children={["Our Story", "Our Team", "Careers"]}
              isMobile={true}
            />
            <Dropdown 
              label="Home" 
              children={["Overview", "Features", "Updates"]}
              isMobile={true}
            />
            <Dropdown
              label="Blog"
              children={["Latest Posts", "Guides", "Tips & Tricks"]}
              isMobile={true}
            />
            <Dropdown
              label="Accessories"
              children={["Men", "Women", "Kids"]}
              isMobile={true}
            />
            <Dropdown
              label="New Arrival"
              children={["Men's Collection", "Women's Collection"]}
              isMobile={true}
            />
            <Dropdown 
              label="Sale" 
              children={["50% Off", "Clearance"]}
              isMobile={true}
            />
          </ul>
        </div>
        <div className="absolute left-10 bottom-24 flex gap-8 text-3xl">
          <CiUser className="hover:scale-110 transition-transform cursor-pointer" />
          <CiShoppingCart className="hover:scale-110 transition-transform cursor-pointer" />
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <div className="font-Outfit text-center py-4 bg-black text-white">
          <h1>Free Shipping On Orders Over $25</h1>
        </div>
        <nav className="w-full border py-4 px-4 font-Outfit font-semibold relative bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center gap-20">
              <div className="menu-item">
                <ul className="flex justify-center bg-white z-30 text-sm gap-14">
                  <Dropdown
                    label="About us"
                    children={["Our Story", "Our Team", "Careers"]}
                    isMobile={false}
                  />
                  <Dropdown
                    label="Home"
                    children={["Overview", "Features", "Updates"]}
                    isMobile={false}
                  />
                  <Dropdown
                    label="Blog"
                    children={["Latest Posts", "Guides", "Tips & Tricks"]}
                    isMobile={false}
                  />
                  <Dropdown
                    label="Accessories"
                    children={["Men", "Women", "Kids"]}
                    isMobile={false}
                  />
                </ul>
              </div>
              <div className="logo">
                <Image src="/Logo.png" width={100} height={100} alt="logo" priority />
              </div>
              <div className="menu-item ">
                <ul className=" flex justify-center gap-14">
                <Dropdown
                  label="New Arrival"
                  children={["Men's Collection", "Women's Collection"]}
                  isMobile={false}
                />
                <Dropdown 
                  label="Sale" 
                  children={["50% Off", "Clearance"]}
                  isMobile={false}
                />
                </ul>
              </div>
              <div className="flex absolute right-20 justify-center text-black font-extrabold text-2xl gap-8">
                <div className="relative flex items-center">
                  <CiSearch
                    className="nav-icon hover:scale-110 transition-transform cursor-pointer"
                    onClick={toggleSearch}
                  />
                  <input
                    type="text"
                    className="search-bar absolute right-8 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-md px-2 py-1 text-sm w-0 opacity-0"
                    placeholder="Search..."
                  />
                </div>
                <CiUser className="nav-icon hover:scale-110 transition-transform cursor-pointer" />
                <CiShoppingCart className="nav-icon hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

