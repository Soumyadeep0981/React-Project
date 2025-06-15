import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
function Hero() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.9"
      className="w-full h-screen pt-1 z-10"
    >
      <div className="text mt-44 font-[Roboto Condensed] font-semibold ">
        <div className="masker uppercase  text-7xl px-16 leading-[3.4vw] tracking-tighter  font-[Roboto Condensed]  font-stretch-expanded ">
          <h1>We create</h1>
        </div>
        <div className="masker flex uppercase text-7xl px-16 leading-[3.4vw]tracking-tighter  font-[Roboto Condensed] font-stretch-expanded">
          <motion.img
            initial={{ width: 0 }}
            animate={{ width: "6vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="w-[5vw] h-[11vh] mt-2  ml-2 items-center justify-between rounded-lg"
            src="https://www.uilogos.co/logos/mark/fox-hub.png"
            alt=""
          />
          <h1 className="py-3">eye-opening</h1>
        </div>
        <div className="masker uppercase text-7xl px-16 leading-[3.4vw] tracking-tighter  font-[Roboto Condensed] font-stretch-expanded">
          <h1>presentations</h1>
        </div>
        <div className="border-t-[1.5px] border-zinc-950 mt-32 "></div>
      </div>
      <div className="px-7 py-2 justify-between flex items-center  leading-none tracking-tighter ">
        {" "}
        {["For Public and private firm", "First pitch to ipo"].map(
          (item, index) => (
            <p
              key={index}
              href="#"
              className={`text-lg font-normal tracking-tight hover:text-zinc-800   `}
            >
              {item}
            </p>
          )
        )}
        <div className="start px-5 flex items-center">
          <div className=" border-[2px] px-2 py-1 border-zinc-950 rounded-2xl hover:bg-black hover:text-white  ">
            Start The Project
          </div>
          <MdOutlineArrowOutward className="start-icon ml-2" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
