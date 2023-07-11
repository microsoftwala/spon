import { useState } from "react"
import Web from "../assets/web-application-testing.png"

export default function Components(){

    const [componentData,setComponentData] = useState(Array(6).fill('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'));
    const [index,setIndex] = useState(0);
    function imageResolver(index){
        switch(index){
            case 0:
                return Web
            case 1:
                return "";
            case 2:
                return "";
            case 3:
                    return "";
            case 4:
                return "";
            case 5:
                return "";
                    
            default:
                return "web-application-testing.png"
        }
    }
    
    return(
        <>
            <div className='lg:px-[7.5rem] lg:py-[9rem] md:px-[5rem] md:py-[6rem] py-[4rem] px-[2rem]'>
                <div className='md:text-[1.75rem] text-[1.2rem] text-left'>Our Vehicle</div>
                <div className="mt-8 grid grid-cols-3 md:grid-rows-1 grid-rows-2 md:grid-cols-4 md:grid-rows-0 gap-y-2 md:gap-y-0">
                    <div className="col-span-1 row-span-1">
                        <div className={`text-center md:text-[1.15rem] text-[0.8rem] lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===0 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(0)}}>Suspension</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.8rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===1 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(1)}}>Steering</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.8rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===2 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(2)}}>Power Train</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.8rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===3 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(3)}}>Brakes</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.8rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===4 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(4)}}>DAQ & Electronics</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.8rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===5 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(5)}}>Roll Cage</div>
                    </div>
                    <div className="col-span-2 grid row-span-1">
                        <p className="md:mx-16 mx-8 self-center md:text-[1.5rem]  text-[1.rem]  text-left">
                        {componentData[index]}
                        </p>
                    </div>
                    <div className="col-span-3 md:col-span-1 grid">
                        <img className="object-cover self-center w-[100%] h-[100%]" src={`${imageResolver(index)}`} alt="component"/>
                    </div>
                </div>
            </div>
        </>
    )

}