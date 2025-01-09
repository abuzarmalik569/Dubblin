'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import {cartContext} from "../../cartContext"
// import { useState } from "react";
import {cartContext} from '../app/cartContext.jsx'
import { useState } from "react";


const Outfit = localFont({
  src: "./fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-Outfit",
  weight: "100-900",
});

const Cinzel = localFont({
  src: "./fonts/Cinzel-VariableFont_wght.ttf",
  variable: "--font-Cinzel",
  weight: "100-900",
})

const Racing = localFont({
  src: "./fonts/RacingSansOne-Regular.ttf",
  variable: "--font-Racing",
  weight: "100-900",
})


// export const metadata = {
//   title: "Dubblin",
//   description: "",
// };

export default function RootLayout({ children }) {

  const[cartlist, setCartlist]=useState([])
  
  return (
    <cartContext.Provider value={{cartlist:cartlist , setCartlist}}>
    <html lang="en">
      <body
        className={`${Outfit.variable} ${Racing.variable} ${Cinzel.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </cartContext.Provider>
  );
}
