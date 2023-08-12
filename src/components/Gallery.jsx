import React from 'react'
import Box from "@mui/material/Box";
import Header from './Header';
import Footer from './Footer';
import { Typography } from '@mui/material';
import "../style/gallery.css"
import Photo1 from "../assets/1.jpg.jpg"
import Photo2 from "../assets/2.jpg.jpg"
import Photo3 from "../assets/3.jpg.jpg"
import Photo4 from "../assets/4.jpg.jpg"
import Photo5 from "../assets/5.jpg.jpg"
import Photo6 from "../assets/6.jpg.jpg"
import Photo7 from "../assets/7.jpg.jpg"
import Photo8 from "../assets/8.jpg.jpg"
import Photo9 from "../assets/9.jpg.jpg"
import Photo10 from "../assets/10.jpg.jpg"
import Photo11 from "../assets/Group1.jpg.png"
import Photo12 from "../assets/Group2.jpg.jpg"
import Photo13 from "../assets/Group3.jpg.JPG"

function Gallery() {


  return (
  
    <Box>
      <Box>
        <Header />
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
            mt: "2%",
          }}
        >
          Gallery
        </Typography>
         <Box sx={{ mt: "25px", width: "100%",mb:"125px" }}>
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
                    className='img'
                    src={Photo1}
                    style={{ width:"37%", height:"150px",
                    }}
                  ></img>
                
                  <img
                    alt="png"
                    className='img'
                    src= {Photo2}
                    style={{ width:"37%", height:"150px" }}
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
                className='img'
                src={Photo3}
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src={Photo4}
                style={{ width:"37%", height:"150px" }}
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
                    justifyContent: {xs:"center",sm:"center",md:"flex-end"},
                    width:"100%"
                  }}
                >
        
                  <img
                    alt="png"
                    className='img'
                    src={Photo5}
                    style={{ width:"37%", height:"150px",
                    }}
                  ></img>
                
                  <img
                    alt="png"
                    className='img'
                    src={Photo6}
                    style={{ width:"37%", height:"150px" }}
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
                className='img'
                src={Photo7}
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src={Photo8}
                style={{ width:"37%", height:"150px" }}
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
                    justifyContent: {xs:"center",sm:"center",md:"flex-end"},
                    width:"100%"
                  }}
                >
        
                  <img
                    alt="png"
                    className='img'
                    src={Photo9}
                    style={{ width:"37%", height:"150px",
                    }}
                  ></img>
                
                  <img
                    alt="png"
                    className='img'
                    src={Photo10}
                    style={{ width:"37%", height:"150px" }}
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
                className='img'
                src={Photo11}
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src={Photo12}
                style={{ width:"37%", height:"150px" }}
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
                    justifyContent: {xs:"center",sm:"center",md:"flex-end"},
                    width:"100%"
                  }}
                >
                  <img
                    alt="png"
                    className='img'
                    src={Photo13}
                    style={{ width:"37%", height:"150px" }}
                  ></img>

                  <img
                    alt="png"
                    className='img'
                    src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{ width:"37%", height:"150px" }}
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
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width:"37%", height:"150px" }}
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
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
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
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width:"37%", height:"150px" }}
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
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
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
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width:"37%", height:"150px" }}
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
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
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
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "37%", height:"150px" }}
              ></img>

              <img
                alt="png"
                className='img'
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width:"37%", height:"150px" }}
              ></img>
            </Box>
          </Box>

          </Box>
          <Box>
            <Footer />
          </Box>
    </Box>
  )
}

export default Gallery
