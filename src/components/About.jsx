import React, { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import  Mp from "../assets/1.mp4"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom";


function About() {

  const[isbar,setIsbar] = useState(true)


function greet() {
  if(window.innerWidth<900){
    setIsbar(false)
  }else{
    setIsbar(true)
  }
  setTimeout(greet, 100);
}

setTimeout(greet, 100);

  return (
    <Box>
      <Box><Header />
      </Box>

      <Box>
        <Typography
          sx={{
            font: "enter",
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: {xs:"100%",sm:"100%",md:"90%"},
            display: "flex",
            justifyContent: {md:'flex-start',xs:"center",sm:"center"},
            ml: {xs:"0px",sm:"0px",md:"10%"},
            mt:"30px",fontWeight:"bold"
          }}
        >
          About Page
        </Typography>

        <Box
          sx={{
            width: "87%",
            display: { xs: "block", sm: "block", md: "flex" },
            justifyContent: "space-around",
            mt: "30px",
            ml: "7%",
            mr: "6%",
          }}
        >
          <video
            controls
            style={{ margin: "auto", width: isbar?"50%":"100%", borderRadius: "5px" }}
          >
            <source src={Mp} type="video/mp4" />
          </video>

          <Typography
            sx={{
              pl: { xs: "0px", sm: "0px", md: "5%" },
              fontSize: "16px",
              fontWeight: "400",
              width: "100%",
              height: "100%",
              mt:"10px"
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>

        <Typography
          sx={{
            font: "enter",
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: {xs:"100%",sm:"100%",md:"90%"},
            display: "flex",
            justifyContent: {md:'flex-start',xs:"center",sm:"center"},
            ml: {xs:"0px",sm:"0px",md:"10%"},
            mt: "5%",fontWeight:"bold"
          }}
        >
          Our Story
        </Typography>

        <Box
          sx={{
            width: "87%",
            display: { xs: "block", sm: "block", md: "flex" },
            justifyContent: "space-around",
            mt: "30px",
            ml: "7%",
            mr: "6%",
            mb:"10%"
          }}
        >
          <img
            alt="png"
            src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            height="330px"
            style={{ margin: "auto", width: "100%", borderRadius: "5px",height:"300px" }}
          ></img>


          <Typography
            sx={{
              pl: { xs: "0px", sm: "0px", md: "5%" },
              fontSize: "16px",
              fontWeight: "400",
              width: "100%",
              height: "100%",
              mt:"10px"
            }}
          >
            Our alma mater emphasized the importance of learning by doing, which wasn't initially popular among students. The understanding that true comprehension came from active engagement with the subject matter led us to embark on the pinnacle of our journey: building the first ATV. With unwavering enthusiasm, we dedicated countless hours to research, planning, and designing a unique and powerful vehicle capable of conquering any terrain. Our club fostered collaboration and shared expertise, showcasing the true essence of teamwork. After completing the design milestone, we faced arduous challenges during the construction phase, pushing our limits and propelling us forward with passion. Finally, the vehicle stood before us, a testament to our perseverance and dedication, representing not only a tangible machine but also the invaluable skills and experiences that would shape our future.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "87%",
            display: { xs: "block", sm: "block", md: "flex" },
            justifyContent: "space-around",
            mt: "8%",
            ml: "7%",
            mr: "6%",
          }}
        >
          <Typography
            sx={{
              pr: "5%",
              fontSize: "16px",
              fontWeight: "400",
              width: "100%",
              height: "100%",
              mb:"10px",
              mt:"15px"
            }}
          >
            Following the completion of the ATV, our team continued to evolve, embracing fresh challenges and opportunities for growth in the field of automotive engineering. Each new project pushed the boundaries of our knowledge and capabilities. Crossing the finish line in various competitions brought an overwhelming sense of accomplishment and camaraderie. The journey of building the single-seater 4WD all-terrain vehicle was truly exhilarating, igniting our passion for cars, forging lifelong friendships, and creating cherished memories. Our story didn't end there; it continued to inspire others to pursue their dreams and experience the thrill of pushing boundaries.

          </Typography>

          <img
            alt="png"
            src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            style={{ margin: "auto", width: "100%", borderRadius: "5px",height:"300px" }}
          ></img>
        </Box>

        <Typography
          sx={{
            font: "enter",
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: {xs:"100%",sm:"100%",md:"90%"},
            display: "flex",
            justifyContent: {md:'flex-start',xs:"center",sm:"center"},
            ml: {xs:"0px",sm:"0px",md:"10%"},
            mt: "10%",fontWeight:"bold"
          }}
        >
          About Competition Name
        </Typography>

        <Box
          sx={{
            width: "87%",
            display: { xs: "block", sm: "block", md: "flex" },
            justifyContent: "space-around",
            mt: "30px",
            ml: "7%",
            mr: "6%",
          }}
        >
          <img
            alt="png"
            src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            style={{ margin: "auto", width: "100%", borderRadius: "5px",height:"300px" }}
          ></img>

          <Typography
            sx={{
              pl: { xs: "0px", sm: "0px", md: "5%" },
              fontSize: "16px",
              fontWeight: "400",
              width: "100%",
              height: "100%",
              mt:"10px"
            }}
          >
             Baja SAE challenges engineering students to design and build an off-road vehicle that will survive the severe punishment of rough terrain and in some competitions, water. As in real work situations, the future engineers work together as a team to discover and resolve technical challenges in design, test, and manufacturing, as well as business issues. The most rugged of all the competitions, Baja SAE also gives students the first-hand challenge of pursuing their passion while managing real-life demands and priorities. Each team's goal is to design and build a prototype of an all-weather, rugged, single-seat, off-road recreational vehicle intended for sale to the nonprofessional weekend off-road enthusiast.

          </Typography>
        </Box>

        <Typography
          sx={{
            font: "enter",
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: {xs:"100%",sm:"100%",md:"90%"},
            display: "flex",
            justifyContent: {md:'flex-start',xs:"center",sm:"center"},
            ml: {xs:"0px",sm:"0px",md:"10%"},
            mt: "8%",fontWeight:"bold"
          }}
        >
          Gallery
        </Typography>

          <Box sx={{ mb:"4%",fontSize:"25px",mt:"2%",fontWeight:"500" }}>
          <Link to="/gallery" >Go to gallery</Link>
          </Box>

        <Box>
        <Footer /></Box>
      </Box>
    </Box>
  );
}

export default About;
