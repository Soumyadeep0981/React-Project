import { motion } from "framer-motion"


function Marquee() {
  
  return (
    <div   data-scroll data-scroll-speed="-.3"   className=" main w-full py-9 -mt-11 bg-green-900 backdrop-blur-xl">
   
      <div className="text border-t-2 border-b-2 border-zinc-200 items-center gap-2 flex whitespace-nowrap overflow-hidden">
    
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8  }}  className=" text-[17vw] leading-none font-normal text-zinc-200 ml-5 ">WE ARE <span className="text-zinc-950 font-semibold">FOX</span>  <span className=" text-zinc-950 font-thin">HUB</span></motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8  }}  className=" text-[17vw] leading-none font-normal ml-3 text-zinc-200   ">WE ARE <span className="text-zinc-950 font-semibold">FOX</span> <span className=" text-zinc-950 font-thin">HUB</span></motion.h1>
      
      </div>
      </div>
   
  )
}

export default Marquee
