import memojImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import { Orbithero } from "@/components/Orbithero";
import Sparkleicon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip " >
   <div className="absolute inset-0 mask-fade  ">
    <div className=" absolute inset-0 -z-30 opacity-5  "
     style={{backgroundImage: `url(${grainImage.src})`,

     }}  
    ></div>
     
    <div className=" hero-ring size-[620px]   "></div>
    <div className=" hero-ring size-[820px]   "></div>
    <div className=" hero-ring size-[1020px]   "></div>
     <div className=" hero-ring size-[1220px]   "></div>
     
    <Orbithero size={800} rotation={-72} >  
       <StartIcon  className="size-28 text-emerald-300  " />
    </Orbithero>
    <Orbithero size={550} rotation={20} >  
       <StartIcon  className="size-12 text-emerald-300  " />
    </Orbithero>
    <Orbithero size={590} rotation={100} >  
       <StartIcon  className="size-8 text-emerald-300  " />
    </Orbithero>
    <Orbithero size={430} rotation={-14} >  
       <Sparkleicon  className="size-8 text-emerald-300/20  " />
    </Orbithero>
    <Orbithero size={440} rotation={79} >  
       <Sparkleicon  className="size-5 text-emerald-300/20  " />
    </Orbithero>
    <Orbithero size={530} rotation={178} >  
       <Sparkleicon  className="size-10 text-emerald-300/20  " />
    </Orbithero>
    <Orbithero size={710} rotation={144} >  
       <Sparkleicon  className="size-14 text-emerald-300/20  " />
    </Orbithero>
    <Orbithero size={720} rotation={85} >  
       <div  className="size-3 rounded-full bg-emerald-300/20  " />
    </Orbithero>
    <Orbithero size={520} rotation={-41} >  
       <div  className="size-3 rounded-full bg-emerald-300/20  " />
    </Orbithero>
    <Orbithero size={650} rotation={-5} >  
       <div  className="size-3 rounded-full bg-emerald-300/20  " />
    </Orbithero>
    </div>
    <div className="container" > 
      <div className="flex flex-col items-center" >
      <Image className="size-[100px] " src={memojImage}  alt="imoji person" />
      <div className="bg-gray-950 border border-gray-800 rounded-xl px-4 py-1.5  inline-flex items-center gap-4 " >
        <div className="bg-green-500 size-2.5 rounded-full " ></div>
        <div className="text-sm font-medium" >Available for new projects</div>
        </div>
        <h1 className=" font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl " >Hello There ! <br/>I'm Fallah Soufiane</h1>
        <p className="mt-4 text-center text-xl whitespace-nowrap text-white/60 md:text-2xl " >
          Software & Power Platform Developer</p>
        <div className=" flex flex-col items-center mt-8 gap-4 md:flex-row justify-center " >
          <button className="inline-flex items-center gap-2 border border-white/15  px-6 h-12 rounded-xl " >
            <span className="font-semibold" > Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
           <button className="inline-flex items-center gap-2 border border-white  bg-white text-gray-900 px-6 h-12 rounded-xl " >
            <span  >👋</span>
            <span className="font-semibold"> Let's Connect </span>
            
          </button>
          
        </div>
      </div>
    </div>
  </div>
  
  );
};
