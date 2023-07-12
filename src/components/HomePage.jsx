import Header from "./Header"
import Swiper from "./Swiper"
import Footer from "./Footer"
import Components from "./Components"
import Mp from "../assets/1.mp4"
import { Typography } from "@mui/material"

export default function HomePage(){

    return(<>
        <Header/>
      <Swiper/>
      <div className='lg:px-[7.5rem] lg:py-[9rem] md:px-[5rem] md:py-[6rem] py-[4rem] px-[2rem]' style={{ paddingTop:"30px"}}>
        <Typography sx={{  
            font: "enter",
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: {xs:"100%",sm:"100%",md:"90%"},
            display: "flex",
            justifyContent: {md:'flex-start',xs:"center",sm:"center"},
            ml: {xs:"0px",sm:"0px",md:"10%"} }}>Home</Typography>
        <div className='grid md:grid-cols-2 lg:gap-x-[6.5rem] md:gap-x-[3rem] mt-8'>
          
          <video
            className='bg-[#D9D9D9] h-[20rem] block'
            controls
            style={{ margin: "auto", borderRadius: "5px" }}
          >
            <source src={Mp} type="video/mp4" />
          </video>
          
          <div className='md:h-[18rem]  md:flex md:align-middle md:justify-center md:mt-0 mt-6'>
            <div className='inline-block self-center text-left' style={{ fontSize:"22px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#D9D9D9] lg:px-32 md:px-20 lg:py-20 py-10 flex justify-center  align-middle'>
          <div className='bg-transparent flex flex-col'>
            <div className='rounded-[100%] md:w-[7.6875rem] md:h-[7.6875rem] w-[4rem] h-[4rem] bg-white align-middle inline-block self-center'></div>
            <span className='block md:text-xl text-sm mt-4 text-center md:w-[7.6875rem] w-[4rem]'>Years Of Experience</span>
          </div>
          <div className='bg-transparent flex flex-col lg:ml-28 md:ml-14 ml-6'>
            <div className='rounded-[100%] md:w-[7.6875rem] md:h-[7.6875rem] w-[4rem] h-[4rem] bg-white align-middle inline-block self-center'></div>
            <span className='block md:text-xl text-sm mt-4 text-center md:w-[7.6875rem] w-[4rem]'>Rank 1</span>
          </div>
          <div className='bg-transparent flex flex-col lg:ml-28 md:ml-14 ml-6'>
            <div className='rounded-[100%] md:w-[7.6875rem] md:h-[7.6875rem] w-[4rem] h-[4rem] bg-white align-middle inline-block self-center'></div>
            <span className='block md:text-xl text-sm  mt-4 text-center md:w-[7.6875rem] w-[4rem] '>Rank 2</span>
          </div>
          <div className='bg-transparent flex flex-col lg:ml-28 md:ml-14 ml-6'>
            <div className='rounded-[100%] md:w-[7.6875rem] md:h-[7.6875rem] w-[4rem] h-[4rem] bg-white align-middle inline-block self-center'></div>
            <span className='block md:text-xl text-sm  mt-4 text-center md:w-[7.6875rem] w-[4rem] '>Rank 3</span>
          </div>
      </div>
      <div>

      </div>
      <Components/>
      <Footer/>
    </>)
}