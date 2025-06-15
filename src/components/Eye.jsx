import { useEffect } from "react";
import { useState } from "react";
function Eye() {
const [rotate, setRotate] = useState(0);


useEffect(()=>{
window.addEventListener("mousemove", (e)=>{
let mouseX = e.clientX;
let mouseY = e.clientY;

let deltaX = mouseX - window.innerWidth / 2;
let deltaY = mouseY - window.innerHeight / 2;

let ghumna = Math.atan2(deltaX, deltaY) * (180/Math.PI);
setRotate(280-ghumna);
})


})



  return (

    <div className="w-full  h-screen overflow-hidden">
      <div  data-scroll data-scroll-speed="-.4"  className="w-full relative h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute gap-12 flex h-[18vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[14vw] h-[14vw] bg-white rounded-full flex items-center justify-center ">
            <div className="w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center">
              <div style={{transform: ` rotate(${rotate}deg)`}}  className="top-1/2 left-1/2 w-full  -translate-x-[50%] -translate-y-[50%] line h-[1.5vw] ">
              <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
              </div>
           
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] bg-white rounded-full flex items-center justify-center">
            <div className="w-[9vw] h-[9vw] bg-black  flex items-center justify-center rounded-full">
            <div style={{transform: ` rotate(${rotate}deg)`}}  className="w-full  line h-[1.5vw] ">
            <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
