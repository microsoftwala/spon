import { useState } from "react"
import Web from "../assets/web-application-testing.png"
import Powertrain from "../assets/Powertrain.png"
import Suspension from "../assets/Suspension.jpg"
import Rollcage from "../assets/RollCage.png"

export default function Components(){

    const [componentData,setComponentData] = useState(["The suspension holds great significance in providing a smooth and controlled ride over diverse terrain. It consists of components such as shocks, springs, and linkages that work together to absorb impacts, maintain traction, and enhance stability. The suspension system plays a vital role in minimizing vibrations, bumps, and jolts, ensuring rider comfort and preventing fatigue during off-road adventures. By optimizing tire contact with the ground, it.", "The steering holds significance in providing precise control and maneuverability. It allows the rider to navigate through various terrains, making turns, and maintaining stability. The steering mechanism, typically consisting of handlebars, a steering column, and a linkage system, translates the rider's input into directional changes. It is crucial for maintaining balance, avoiding obstacles, and ensuring rider safety. A well-designed and responsive steering system enables the ATV to handle tight turns, rough terrain, and challenging off-road conditions with ease and confidence.","The powertrain holds immense significance as the heart of its performance. Comprising the engine, transmission, and drivetrain components, the powertrain delivers power and torque to propel the ATV across various terrains. It determines the vehicle's acceleration, top speed, and towing capacity, directly impacting its off-road capabilities. The efficiency and reliability of the powertrain are vital for a smooth and powerful ride, enabling the ATV to conquer challenging terrains while ensuring optimal performance and durability in demanding conditions.","The brakes play a vital role in ensuring rider safety and control. As a key component of the vehicle's overall braking system, they provide the means to slow down, stop, and maintain control during off-road adventures. The braking system typically includes disc brakes or drum brakes, along with brake levers or pedals. Efficient and responsive brakes allow the rider to modulate speed, navigate steep descents, and negotiate obstacles with confidence. They are critical in preventing accidents, ensuring rider safety, and enhancing the overall handling and control of the ATV.","The DAQ (Data Acquisition) and electronics system plays a crucial role in enhancing performance, monitoring vital information, and improving rider experience. This system encompasses various electronic components, sensors, and data acquisition devices that gather and process data from the vehicle's engine, suspension, brakes, and other vital systems. It enables real-time monitoring of crucial parameters such as speed, RPM, temperature, and fuel level, providing valuable insights for performance optimization, diagnostics, and safety. The DAQ and electronics system contributes to overall vehicle efficiency, reliability, and facilitates advanced features like electronic fuel injection, traction control, and customizable settings, enhancing the ATV's capabilities and user experience.","The roll cage holds significant importance as a critical safety feature. Designed to protect riders in case of rollovers or collisions, the roll cage acts as a sturdy framework surrounding the vehicle's occupants. By providing structural integrity and impact resistance, it helps prevent injuries and safeguards the rider from potential hazards. The roll cage absorbs and distributes the forces generated during accidents, reducing the risk of severe injuries and ensuring a higher level of safety during off-road adventures."]);

    const [index,setIndex] = useState(0);
    function imageResolver(index){
        switch(index){
            case 0:
                return Suspension;
            case 1:
                return Web;
            case 2:
                return Powertrain;
            case 3:
                return Web;
            case 4:
                return Web;
            case 5:
                return Rollcage;
                    
            default:
                return Web
        }
    }


 

    return(
        <>
            <div className='lg:px-[7.5rem] lg:py-[9rem] md:px-[5rem] md:py-[6rem] py-[4rem] px-[2rem]'>
                <div className='md:text-[1.75rem] text-[1.2rem] text-left'>Our Vehicle</div>
                <div className="mt-8 grid grid-cols-3 md:grid-rows-1 grid-rows-2 md:grid-cols-4 md:grid-rows-0 gap-y-2 md:gap-y-0">
                    <div className="col-span-1 row-span-1">
                        <div className={`text-center md:text-[1.15rem] text-[0.8rem] lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===0 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(0)}}>Suspension</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.95rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===1 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(1)}}>Steering</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.95rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===2 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(2)}}>Power Train</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.95rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===3 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(3)}}>Brakes</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.95rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===4 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(4)}}>DAQ & Electronics</div>
                        <div className={`text-center md:text-[1.15rem] text-[0.95rem]  lg:py-6 lg:px-6 md:py-4 md:px-6 py-2 px-2 border-2 cursor-pointer ${index===5 ?'border-[#D9D9D9] bg-[#D9D9D9]':' border-gray-200 hover:bg-gray-200'}`} onClick={()=>{setIndex(5)}}>Roll Cage</div>
                    </div>
                    <div className="col-span-2 grid row-span-1">
                        <p className="md:mx-16 mx-8  md:text-[1rem]  text-[0.80rem]  text-left">
                        {componentData[index]}
                        </p>
                    </div>
                    <div className="col-span-3 md:col-span-1 grid">
                        <img style={{ height:"100%" ,width:"100%"}}src={`${imageResolver(index)}`} alt="component"/>
                    </div>
                </div>
            </div>
        </>
    )

}
