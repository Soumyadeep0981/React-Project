

function Footer() {
  return (
    <div className=" w-full h-[100vh] relative flex px-7 overflow-hidden ">
     <div className="w-[40%] h-[100vh] ">
     <div className="text-[7vw] relative font-semibold font-stretch-ultra-expanded top-11 uppercase">eye-</div>
     <div className="text-[7vw] relative font-semibold font-stretch-ultra-expanded uppercase -top-6">opening</div>
     </div>
   
     <div className="w-[60%] h-[100vh] overflow-hidden">
   
    <div className=" uppercase  text-[7vw] font-semibold  font-stretch-ultra-expanded tracking-tighter top-11 relative left-11">presentations</div>
    <div className="  flex flex-col w-[17vw] relative top-12">
    <div className=" flex flex-col relative left-12 gap-1 w-[] ">
      <span className="relative mb-4">S:</span>
        {[ "Instagram", "Facebook", "Behance", "Twitter"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className={`text-md font-sans underline cursor-pointer text-md${
              index === 1 && "gap-2"

              }
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>


    </div>

    <div className=" flex flex-col relative left-12 gap-4 top-20 w-[14vw] text-lg text-zinc-900 hover:no-underline">
      
        {[ "L:", "2002-2025 4th Ave Meerut Arena Animation ", "30 Begampul Meerut Arena", "E:","Hello@FOXHUB.Design"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className={`text-md font-sans underline cursor-pointer hover:no-underline
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
      <div className=" flex flex-col w-[14vw] absolute -right-20 bottom-28">
      <div className=" flex flex-col gap-1  text-md text-zinc-900 hover:no-underline">
      <span className="text-md mb-8">M:</span>
      {[ "About", "Home ", "Services", "Contact","Support","Insights"].map(
        (item, index) => (
          <a
            key={index}
            href="#"
            className={`text-md font-sans underline cursor-pointer hover:no-underline
            }`}
          >
            {item}
          </a>
        )
      )}
    </div>
    </div>
    
     </div>
     
    </div>
  )
}

export default Footer
