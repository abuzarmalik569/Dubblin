import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BestSelling from "./Components/BestSelling";
import Categories from "./Components/Categories";
import Bannner from "./Components/Bannner";
import NewArrivels from "./Components/NewArrivels";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero/>
    <BestSelling />
    <Categories />
    <Bannner />
    <NewArrivels />
    <Footer />
   </div>
  );
}
