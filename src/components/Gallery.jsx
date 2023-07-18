import React from 'react'
import Box from "@mui/material/Box";
import Header from './Header';
import Footer from './Footer';
import { Typography } from '@mui/material';

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
            <Footer />
          </Box>
    </Box>
  )
}

export default Gallery