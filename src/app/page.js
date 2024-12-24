import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BestSelling from "./Components/BestSelling";
import Categories from "./Components/Categories";
import Bannner from "./Components/Bannner";
import NewArrivels from "./Components/NewArrivels";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero/>
    <BestSelling />
    <Categories />
    {/* <Bannner />
    <NewArrivels /> */}
   </div>
  );
}
