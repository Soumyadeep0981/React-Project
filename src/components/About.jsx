function About() {
  return (
    <div className="w-full p-16 rounded-tr-3xl rounded-tl-3xl bg-[#cdea68] backdrop-blur-xl">
      <h1 className="font-normal leading-[3.5vw]  text-[3vw] pr-[11vw] tracking-tighter">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro expedita
        repudiandae <u>doloribus natus</u> amet. Velit reprehenderit ea eaque
        odio ex, perspiciatis <u>dignissimos veniam </u> non fuga laborum, quis
        ab? Unde, error.
      </h1>
      <div className="w-full   bg-[#a9c545] h-[0.01vw] mt-20"></div>
      <div className="flex w-full mt-[2vw] font-medium">
        <div className="  w-[32vw]   ">What you can expect:</div>
        <div className=" pl-[11vw] font-medium ">
          <p className="px-[13vw]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            sapiente asperiores, ipsa quaerat in voluptatibus eaque fugiat
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            sapiente asperiores, ipsa quaerat in voluptatibus eaque fugiat
            </p>
            
            <p className="mt-[4vw] px-[13vw]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            sapiente asperiores, ipsa quaerat in voluptatibus eaque fugiat
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            sapiente asperiores, ipsa quaerat in voluptatibus eaque fugiat
          </p>
        </div >
        <div className="mt-[12vw] pr-[2vw] "> {["Instagram", "Facebook", "Behance","Twitter"].map((item,index)=>(
          <a key={index} href="#" className={`  flex flex-col gap-4 pl-32 underline mt-[0.1vw] `}>
            {item}
          </a>


        ))}</div>
      </div>
      <div className="w-full   bg-[#a9c545] h-[0.01vw] mt-20"></div>
      <div className="flex items-center justify-between h-[60vh]">
        <div className="-mt-[20vw]">
        <div><h1 className="pl-[1vw] text-5xl font-medium">Our approach:</h1>
        <button className="mt-[1.8vw] bg-black rounded-3xl px-[1vw] ml-2 py-[0.7vw] text-md  text-white flex items-center"><span className="pr-7">Read More</span> <div className="bg-white h-2 w-2 rounded-full"></div></button>
        </div>
        </div>
        <div className="w-[36vw] h-[35vw] pl-[6vw] mt-[9vw]">
        <img className="w-[36vw] h-[30vw] rounded-md" src="https://img.freepik.com/free-photo/couple_144627-20803.jpg?ga=GA1.1.2016003310.1739108017&semt=ais_hybrid" alt="" />

        </div>
      </div>
    </div>
  );
}

export default About;
