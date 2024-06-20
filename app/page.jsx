"use client";

import Photo from "@/components/Photo";
import Socils from "@/components/Socils";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { FiDownload } from 'react-icons/fi';

const page = () => {

  const handleDownload = () => {
    const downloadUrl = '/mycv.pdf';
    window.open(downloadUrl, '_blank');
};


  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-around xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl"> Software Developer</span>
            <h1 className="mb-6 h1">Hello I'm <br />
              <span className="text-accent">Viraj Sachin</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I blend creativity with code to deliver cutting-edge digital solutions
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline" size="lg" className="flex justify-center gap-2 uppercase"

                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socils />
              </div>
            </div>

          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-8 ">
            <Photo />

          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default page