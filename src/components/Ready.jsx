import { useEffect } from "react";
import { useState } from "react";

function Ready() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let ghumna = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(180 - ghumna);
    });
  });

  return (
    <div className=" w-full bg-white overflow-hidden">
      <div className=" w-full relative bg-[#cdea68] h-[100vh]">
        <div className="z-10 w-[30vw] relative left-[17%] gap-9 top-[17%] flex items-center justify-center translate-x-[50%] translate-y-[50%]">
          <div className="w-[10vw] h-[10vw] bg-white rounded-full flex items-center justify-center overflow-clip ">
            <div
              style={{ transform: ` rotate(${rotate}deg)` }}
              className="danda1 w-32   h-28  rounded-full"
            >
              <div className="w-[7vw] h-[7vw] bg-black rounded-full flex items-center justify-center ">
                <div
                  style={{ transform: ` rotate(${rotate}deg)` }}
                  className="top-1/2 left-1/2 w-24 -translate-x-[50%] -translate-y-[50%] line h-[1.5vw] "
                >
                  <div className="w-[1.5vw] h-[1.5vw] place-self-end bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[10vw] h-[10vw] bg-white rounded-full flex items-center justify-center overflow-clip ">
            <div style={{ transform: ` rotate(${rotate}deg)` }} className="danda1 w-32 h-28 rounded-full">
              <div className="w-[7vw] h-[7vw] bg-black rounded-full flex items-center justify-center ">
              <div
                  style={{ transform: ` rotate(${rotate}deg)` }}
                  className="top-1/2 left-1/2 w-24   -translate-x-[50%] -translate-y-[50%] line h-[1.5vw] "
                >
                  <div className="w-[1.5vw] h-[1.5vw] place-self-end bg-white rounded-full"></div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="w-full -mt-28">
          <div className="uppercase  font-semibold  font-[Roboto Condensed]   left-[34%] font-stretch-[100%] tracking-tighter text-[10vw] text-zinc-900 relative ">
            ready
          </div>
          <div className="uppercase   font-[Roboto Condensed] font-semibold left-[26%] font-stretch-[100%] -top-20 text-zinc-900 tracking-tighter text-[10vw] relative ">
            to start
          </div>
          <div className="uppercase   font-[Roboto Condensed] font-semibold left-[15%] font-stretch-[100%] -top-40 text-zinc-900 tracking-tighter text-[10vw] relative ">
            the projects?
          </div>
        </div>
      <div className="bottom-[11vw] left-[39vw] relative flex flex-col w-[18vw] gap-2 font-thin">
          <button className="bg-black relative uppercase border border-black rounded-full pr-16 pl-6 py-4 text-white text-lg"> start the project
            <div className="bg-white absolute right-6 bottom-6 h-3 w-3 rounded-full "></div>
          </button>
          <span className="left-[45%] right-[50% ] relative text-xl font-semibold">OR</span>
          <button className=" relative uppercase border-2 border-black  rounded-full pr-16 pl-6 py-4 text-lg "> hello@fox.design
          <div className="bg-black absolute right-6 bottom-6 h-3 w-3 rounded-full"></div>
          </button>
          </div>
      </div>
    </div>
  );
}

export default Ready;
