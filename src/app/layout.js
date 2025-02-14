'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import {cartContext} from "../../cartContext"
// import { useState } from "react";
import {cartContext} from '../app/cartContext.jsx'
<<<<<<< HEAD
// import { useState } from "react";
import { Provider } from "react-redux";
import appStore from './appStore.jsx'
=======
import { useState } from "react";
import { Toaster } from 'sonner';
>>>>>>> aa95a4451862163dd1e4fb6be04e48ca4db1730f


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

  // const[cartlist, setCartlist]=useState([])
  
  return (
    <Provider store={appStore}>
    {/* <cartContext.Provider value={{cartlist:cartlist , setCartlist}}> */}
    <html lang="en">
      <body
        className={`${Outfit.variable} ${Racing.variable} ${Cinzel.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="bottom-center"  />
      </body>
    </html>
    {/* </cartContext.Provider> */}
    </Provider>
  );
}
