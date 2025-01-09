'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {cartContext} from "../../cartContext"
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


// export const metadata = {
//   title: "Dubblin",
//   description: "",
// };

export default function RootLayout({ children }) {

  const[products,setProducts]=useState([])
  return (
    <cartContext.Provider value={{cartlist:products , setProducts}}>
    <html lang="en">
      <body
        className={`${Outfit.variable} ${Cinzel.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </cartContext.Provider>
  );
}
