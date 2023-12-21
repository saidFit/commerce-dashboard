import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GrNext, GrPrevious } from "react-icons/gr";
import { transition } from "../../Hooks/useStyling";

export const Header = () => {
  
  let position;

  const { HeadProducts } = useSelector((state) => state.getHeaderproducts);
  const [ActiveElement, setActiveElement] = useState(1);
  const [Ismousemove,setIsmousemove] = useState(false)

  const handleNext = () => {
    if (ActiveElement >= HeadProducts.length - 1) return setActiveElement(0);
    return setActiveElement(ActiveElement + 1);
  };
  const handlePrev = () => {
    if (ActiveElement <= 0) return setActiveElement(HeadProducts.length - 1);
    return setActiveElement(ActiveElement - 1);
  };

  React.useEffect(() => {
    if (!Ismousemove) {
      if(HeadProducts){
        console.log(true)
       let interval = setInterval(() => {
            if (ActiveElement >= HeadProducts.length-1 ) {
                setActiveElement(0)
            } else {
                setActiveElement(ActiveElement + 1)
            }
        }, 2000);
        return () => clearInterval(interval)
      }
     
    }
}, [ActiveElement, Ismousemove,HeadProducts])


  return (
    <section className="w-full bg-gray-200 overflow-hidden">
      {HeadProducts && (
        <div className=" relative flex items-center h-[90vh]">
          {HeadProducts.map((item, index) => {
            if (index == ActiveElement) {
              position = "ActiveSlider";
            } else if (index == HeadProducts.length - 1 && ActiveElement == 0) {
              position = "PrevSlider";
            } else if (index == ActiveElement - 1) {
              position = "PrevSlider";
            } else {
              position = "NextSlider";
            }
            const { _id, name, price, desc, image, category } = item;
            return (
              <div
                style={{ ...transition }}
                key={index}
                className={`${position} absolute w-full flex flex-col-reverse md:flex-row items-center md:space-x-32 transition duration-500 justify-around mx-auto`}
              >
                <div className="space-y-2 w-[80%] md:w-[40%] md:space-y-6">
                  <h1 className="relative text-4xl w-fit font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">{name}</h1>
                  <p className="w-fit">{desc}</p>
                  <div className="space-x-4">
                    <button className="bg-gray-200 rounded-md border border-gray-400 py-1 px-2 shadow-lg transition duration-500 hover:bg-gray-600">
                      READ MORE
                    </button>
                    <button className="bg-primary-400 rounded-md border border-gray-400 py-1 px-2 shadow-lg transition duration-500 hover:bg-gray-600">
                      Shop new
                    </button>
                  </div>
                </div>
                <div>
                  <img
                  src={`http://localhost:6060/${image}`}
                  alt={image}
                  className="w-[400px] h-[400px] md:h-[550px] block text-end object-cover"
                />
                </div>
                
              </div>
            );
          })}
          <div className="flex items-center justify-between absolute w-full">
            <button
              onClick={handlePrev}
              className="bg-gray-300 rounded-full p-2 shadow-md ml-6"
            >
              <GrPrevious size={30} />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-300 rounded-full p-2 shadow-md mr-6"
            >
              <GrNext size={30} />
            </button>
          </div>

          <div className="flex space-x-3 absolute bottom-2 left-[44%] md:left-[50%] translate-x-[-50%]">
            {HeadProducts.map((itm, index) => {
              return (
                <button key={index}
                  onClick={() => setActiveElement(index)}
                  style={{ ...transition }}
                  className={
                    index == ActiveElement
                      ? "bg-gray-200 rounded-md shadow-xl w-[30px] h-[16px]"
                      : "bg-gray-200 rounded-full shadow-lg w-[16px] h-[16px]"
                  }
                ></button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
