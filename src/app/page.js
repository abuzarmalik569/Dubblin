import Image from "next/image";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BestSelling from "./Components/BestSelling";
import Categories from "./Components/Categories";
import Bannner from "./Components/Bannner";
import NewArrivels from "./Components/NewArrivels";
import InstagramReels from "./Components/InstagramReels"
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <div>
    <Header />
    {/* <Navbar /> */}
    <Hero/>
    <BestSelling />
    <Categories />
    <Bannner />
    <NewArrivels />
    <Footer />
   </div>
  );
}
