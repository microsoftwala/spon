import Large from "../assets/Logo_large.png"

export default function Footer(){
    return(
        <>
            <footer className="bg-[#D9D9D9] lg:px-28 lg:pt-12 md:px-14 pt-8">
                <div className="grid  md:grid-cols-4 md:grid-rows-[1fr] grid-rows-[1fr_2fr] grid-cols-2 lg:gap-x-12 md:gap-y-0 gap-y-8">
                    <div className="md:col-span-1 col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-2 row-end-3 text-center">
                        <img className="md:w-32 w-20 inline" src={Large} alt="Rebel Racers"/>
                        <div className="flex justify-center mt-4">
                            <div className="bg-white rounded-[100%] w-4 h-4 p-4 mr-2"></div>
                            <div className="bg-white rounded-[100%] w-4 h-4 p-4 mr-2"></div>
                            <div className="bg-white rounded-[100%] w-4 h-4 p-4 mr-2"></div>
                            <div className="bg-white rounded-[100%] w-4 h-4 p-4"></div>
                        </div>
                    </div>
                    <div className="col-span-2 text-center row-start-1 row-end-2 md:col-start-2 md:col-end-4 flex align-middle justify-center">

                            <div className="md:text-2xl text-lg lg:mt-14 md:mt-10 p-2 px-8 inline-block">
                                Official Racing Page Of SAE Team Of IIITDM Kancheepuram
                            </div>

                    </div>
                    <div className="md:col-span-1 col-start-2 col-end-3 md:col-start-4 md:col-end-5 row-start-2 row-end-3 md:row-start-1 md:row-end-2 flex justify-center ml-8">
                        <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-rows-3 grid-cols-4 gap-y-4 gap-x-[10px]">
                            <div className="bg-white rounded-[100%] w-4 h-4 p-4 mr-2 col-start-1 col-end-2 row-start-1 row-end-2 "></div>
                            {/* <div className="col-start-2 col-end-3 row-start-1 row-end-2"></div> */}
                            <div className="row-start-1 row-end-2 col-[2_/_-1] md:text-lg text-md text-left">Contact</div>

                            <div className="bg-white rounded-[100%] w-4 h-4 p-4 mr-2 col-start-1 col-end-2 row-start-2 row-end-3"></div>
                            {/* <div className="col-start-2 col-end-3 row-start-2 row-end-3"></div> */}
                            <div className="row-start-2 row-end-3 col-[2_/_-1] md:text-lg text-md text-left">Email</div>

                            <div className="bg-white rounded-[100%] w-4 h-4 p-4 mr-2 col-start-1 col-end-2 row-start-3 row-end-4"></div>
                            {/* <div className="col-start-2 col-end-3 row-start-3 row-end-4"></div> */}
                            <div className="row-start-3 row-end-4 col-[2_/_-1] md:text-lg text-md text-left">Address</div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm py-8">Copyright © 2023 SAE</div>
            </footer>
        </>
    )
}