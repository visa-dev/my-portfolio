import Photo from "@/components/Photo";
import Socils from "@/components/Socils";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-around xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> Software Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br />
              <span className="text-accent">Viraj Sachin</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I blend creativity with code to deliver cutting-edge digital solutions
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex justify-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socils />
              </div>
            </div>

          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-8 ">
            <Photo />

          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default page