import Large from "../assets/Logo_large.png"
import { Box } from "@mui/material"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

export default function Footer(){
    return(
        <>
            <footer className="bg-[#D9D9D9] lg:px-28 lg:pt-12 md:px-14 pt-8" style={{ width:"100%" ,backgroundColor:"#D9D9D9"}}>
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
                    <div className="flex justify-center ml-8">
                        <Box sx={{ display:"block"}}>
                         <Box sx={{ display:"flex",mb:"3%"}}>
                            <div className=" rounded-[100%] w-4 h-4 p-4 mr-2 col-start-1 col-end-2 row-start-1 row-end-2 flex items-center justify-center"><CallIcon /></div>
                            <div className=" md:text-md text-md text-left mb-2" >
                             Phone: +918235092655</div>
                             </Box>

                             <Box sx={{display:"flex",mb:"3%"}}>
                            <div className="rounded-[100%] w-4 h-4 p-4 mr-2 col-start-1 col-end-2 row-start-2 row-end-3 flex justify-center items-center bg-grey"><EmailIcon /></div>
                            <div className="row-start-2 row-end-3 col-[2_/_-1] md:text-md text-md text-left"> 
                             Email: rebel.racers.
                            iiitdm@gmail.
                            com</div>
                            </Box>

                            <Box sx={{display:"flex"}}>
                            <div className="rounded-[100%] w-4 h-4 p-4 mr-2 col-start-1 col-end-2 row-start-3 row-end-4 flex justify-center items-center"><HomeIcon /></div>
                            <div className="row-start-3 row-end-4 col-[2_/_-1] md:text-md text-md text-left">Address: Lab D7, IIITDM Kancheepuram, Melakottaiyur, Chennai - 6000127</div></Box>
                        </Box>
                    </div>
                </div>
                <div className="text-center text-sm py-8">Copyright © 2023 SAE</div>
            </footer>
        </>
    )
}