import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function About() {
  return (
    <Box>
      <Box>Header</Box>

      <Box>
        <Typography
          sx={{
            font: "enter",
            fontSize: "48px",
            fontWeight: "400",
            height: "100%",
            width: "90%",
            display: "flex",
            justifyContent: "flex-start",
            ml: "10%",
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
            style={{ margin: "auto", width: "100%", borderRadius: "5px" }}
          >
            <source src="../assets/1.mp4" type="video/mp4" />
          </video>

          <Typography
            sx={{
              pl: { xs: "0px", sm: "0px", md: "5%" },
              fontSize: "24px",
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
            width: "90%",
            display: "flex",
            justifyContent: "flex-start",
            ml: "10%",
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
            height="350px"
            style={{ margin: "auto", width: "100%", borderRadius: "5px" }}
          ></img>

          <Typography
            sx={{
              pl: { xs: "0px", sm: "0px", md: "5%" },
              fontSize: "24px",
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
              fontSize: "24px",
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

          <img
            alt="png"
            src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            height="350px"
            style={{ margin: "auto", width: "100%", borderRadius: "5px" }}
          ></img>
        </Box>

        <Typography
          sx={{
            font: "enter",
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: "90%",
            display: "flex",
            justifyContent: "flex-start",
            ml: "10%",
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
            height="350px"
            style={{ margin: "auto", width: "100%", borderRadius: "5px" }}
          ></img>

          <Typography
            sx={{
              pl: { xs: "0px", sm: "0px", md: "5%" },
              fontSize: "24px",
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
            width: "90%",
            display: "flex",
            justifyContent: "flex-start",
            ml: "10%",
            mt: "12%",
          }}
        >
          Gallery
        </Typography>

        <Box sx={{ mt: "71px", width: "100%",mb:"125px" }}>
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "block", sm: "flex", md: "flex" },
                justifyContent: "center",
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "205px", height: "122px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "205px", height: "122px" }}
              ></img>
            </Box>

            <Box
              sx={{
                display: { xs: "block", sm: "flex", md: "flex" },
                justifyContent: "center",
              }}
            >
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "205px", height: "122px" }}
              ></img>

              <img
                alt="png"
                src="https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "205px", height: "122px" }}
              ></img>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "center",
                }}
              >
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "205px", height: "122px" }}
                ></img>

                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "205px", height: "122px" }}
                ></img>
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "center",
                }}
              >
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "205px", height: "122px" }}
                ></img>

                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "205px", height: "122px" }}
                ></img>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "center",
                }}
              >
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "205px", height: "122px" }}
                ></img>

                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "205px", height: "122px" }}
                ></img>
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "center",
                }}
              >
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "205px", height: "122px" }}
                ></img>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1604798756392-b78585747a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "205px", height: "122px" }}
                ></img>
              </Box>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: { xs: "block", sm: "block", md: "flex" },
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "block", sm: "flex", md: "flex" },
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1604798756392-b78585747a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                    style={{ width: "205px", height: "122px" }}
                  ></img>

                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{ width: "205px", height: "122px" }}
                  ></img>
                </Box>

                <Box
                  sx={{
                    display: { xs: "block", sm: "flex", md: "flex" },
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{ width: "205px", height: "122px" }}
                  ></img>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1607966488728-586ee1dd5491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                    style={{ width: "205px", height: "122px" }}
                  ></img>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>footer</Box>
      </Box>
    </Box>
  );
}

export default About;