import { Button } from "@heroui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="bg-[#bae2ee7c]">

      {/*Header*/}
      <Header/>

      {/*Hero*/}
      <Hero/>

    </div>
    
  );
}
