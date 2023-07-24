// import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import Pic1 from "../assets/Gallery_1.png"
import Pic2 from "../assets/Gallery_2.jpg"
import Pic3 from "../assets/Gallery_3.JPG"
register();

export default function Swiper() {
    // const swiperElRef = useRef(null);

    // useEffect(() => {
    //   // listen for Swiper events using addEventListener
    //   swiperElRef.current.addEventListener('progress', (e) => {
    //     const [swiper, progress] = e.detail;
    //     console.log(progress);
    //   });
  
    //   swiperElRef.current.addEventListener('slidechange', (e) => {
    //     console.log('slide changed');
    //   });
    // }, []);
  
    return (
      <swiper-container
        style={{width:"100%"}}
        slides-per-view="1"
        navigation="true"
        pagination-clickable="true" 
        loop="true"
        centered-slides="true" 
        autoplay-delay="2500"
        keyboard="true"
        autoplay-disable-on-interaction="true"
      >
        <swiper-slide style={{position:"relative",backgroundColor:"#D9D9D9"}}>
        {/* <img alt="Testing" src='/web-application-testing.png' className='swiper-img'/> */}
                <img src={Pic1} alt="RR" style={{width:"100%",height:"100%"}}/>
                <div className='absolute bottom-0 mx-[50%] w-[20rem] translate-x-[calc(50%-20rem)] text-center mb-[6rem] mix-blend-darken'>
                      {/* <h4 className='md:text-lg text-sm text-black-500'>WELCOME TO RACING PAGE OF IIITDM KANCHEEPURAM</h4>
                      <h1 className='md:text-[3rem] text-[2rem]'>Rebel Racers</h1>
                      <p>Hit the pedal, be the Rebel!</p> */}
                </div>
        </swiper-slide>
        <swiper-slide style={{position:"relative"}}><img src={Pic2} alt="RR" style={{ width:"100%",height:"100%"}}/></swiper-slide>
        <swiper-slide style={{position:"relative"}}><img src={Pic3} alt="RR" style={{ width:"100%",height:"100%"}}/></swiper-slide>
        
      </swiper-container>
    );
}
