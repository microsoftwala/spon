import React, { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import  Mp from "../assets/1.mp4"
import Header from "./Header"
import Footer from "./Footer"


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
            mt:"30px"
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
              fontSize: "20px",
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
            mt: "5%",
          }}
        >
          Our Story
        </Typography>

        <Box
          sx={{
            width: "87%",
            display: { xs: "block", sm: "flex", md: "flex" },
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
              fontSize: "20px",
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

        <Box
          sx={{
            width: "87%",
            display: { xs: "block", sm: "flex", md: "flex" },
            justifyContent: "space-around",
            mt: "8%",
            ml: "7%",
            mr: "6%",
          }}
        >
          <Typography
            sx={{
              pr: "5%",
              fontSize: "20px",
              fontWeight: "400",
              width: "100%",
              height: "100%",
              mb:"10px",
              mt:"15px"
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
            mt: "10%",
          }}
        >
          About Competition_Name
        </Typography>

        <Box
          sx={{
            width: "87%",
            display: { xs: "block", sm: "flex", md: "flex" },
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
              fontSize: "20px",
              fontWeight: "400",
              width: "100%",
              height: "100%",
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
            mt: "12%",
          }}
        >
          Gallery
        </Typography>

   
        <Box sx={{ mt: "50px", width: "100%",mb:"125px" }}>
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex" },
              width:"100%",
              justifyContent: "center",
            }}
          >
           <Box
                  sx={{
                    display: { xs: "flex", sm: "flex", md: "flex" },
                    justifyContent: {xs:"center",sm:"center",md:"flex-end"},
                    width:"100%"
                  }}
                >
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1604798756392-b78585747a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                    style={{ width:"37%", height:"140px" }}
                  ></img>

                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{ width:"37%", height:"140px" }}
                  ></img>
                </Box>

            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex" },
                justifyContent: {xs:"center",sm:"center",md:"flex-start"},
                width:{xs:"100%",sm:"100%",md:"100%"}
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width:"37%", height:"140px" }}
              ></img>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex" },
              width:"100%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "center", sm: "flex", md: "flex" },
                justifyContent: {sm:"center",md:"flex-end",xs:"center"},
                width:"100%"
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex" },
                justifyContent: {sm:"center",md:"flex-start",xs:"center"},
                width:{xs:"100%",sm:"100%",md:"100%"}
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width:"37%", height:"140px" }}
              ></img>
            </Box>
          </Box>


          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex" },
              width:"100%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex" },
                justifyContent: {sm:"center",md:"flex-end",xs:"center"},
                width:"100%"
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex" },
                justifyContent: {sm:"center",md:"flex-start",xs:"center"},
                width:{xs:"100%",sm:"100%",md:"100%"}
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width:"37%", height:"140px" }}
              ></img>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex" },
              width:"100%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex" },
                justifyContent: {sm:"center",md:"flex-end",xs:"center"},
                width:"100%"
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex" },
                justifyContent: {sm:"center",md:"flex-start",xs:"center"},
                width:{xs:"100%",sm:"100%",md:"100%"}
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"140px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width:"37%", height:"140px" }}
              ></img>
            </Box>
          </Box>

        </Box>

        <Box>
        <Footer /></Box>
      </Box>
    </Box>
  );
}

export default About;
