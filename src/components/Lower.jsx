

function Lower() {
  return (
    <div className="w-full ">
      <div className="w-full h-[15vh] mt-14 font-normal text-5xl tracking-tight "> <h1>Featured projects</h1></div>
      <div className="w-full h-[0.01vh] bg-gray-500 -mt-5"></div>
       <div className="w-full flex mt-20 gap-3"> 
        <div className="fyde -mt-6 flex translate-x-20">
        <div className="bg-black h-2 w-2 rounded-full"></div>
        <h4 className="-mt-2 px-1">FYDE</h4>
        </div>
         <div className="w-[45%] h-[66vh] bg-[#b3b0b0] rounded-md ml-2 ">
            <div className=" leftbox  w-[12vw] h-[24vh] place-items-center mt-[21vh] ml-[8vw] bg-[#9a9797] ">
                <div className="bg-zinc-300 h-[14.5vh] w-[7vw] translate-y-9 rounded-full">
                    <img className="h-[10vh] w-[5vw] translate-y-5 ml-4" src="https://cdn-icons-png.freepik.com/256/2423/2423882.png?ga=GA1.1.2016003310.1739108017&semt=ais_hybrid" alt="" />
                </div>
          
                <div className="bg-zinc-950 h-[13vh] w-[15vw] rounded-md ml-[15vw] mt-[5.5vh]"></div>
            </div>
         </div>
         <div className="vise -mt-6 flex translate-x-4">
         <div className="bg-black h-2 w-2 rounded-full"></div>
         <h4 className="-mt-2 px-1">VISE</h4>
         </div>
         <div className="w-[45%] h-[66vh] bg-zinc-950 mr-8 rounded-md -translate-x-12 ">
          <img className="h-[29vh] w-[27vw] translate-x-32 translate-y-40" src="https://ochi.design/wp-content/uploads/2022/09/VISE1-1340x740.jpg" alt="" />
         </div>
       </div>


    </div>
  )
}

export default Lower
