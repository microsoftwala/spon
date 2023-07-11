import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DownloadButton from "./Download";
import { Link } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"


function Sponser() {
  return (
    <Box>
      <Box><Header />
      </Box>

      <Box>
        <Typography
          sx={{
            mt:"30px",
            font: "enter",
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: {xs:"100%",sm:"100%",md:"90%"},
            display: "flex",
            justifyContent: {md:'flex-start',xs:"center",sm:"center"},
            ml: {xs:"0px",sm:"0px",md:"10%"},
          }}
        >
          Our Achievements
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
          <Typography
            sx={{
              pr: "5%",
              fontSize: "22px",
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
            height="300px"
            style={{ margin: "auto", width: "100%", borderRadius: "5px",height:"350px" }}
          ></img>
        </Box>

        <Box
          sx={{
            mt: "125px",
            width: "100%",
            height: "100%",
            backgroundColor: "#D9D9D9",
            paddingBottom: "100px",
          }}
        >
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
            }}
          >
            Why Sponser Us
          </Typography>

          <Box sx={{ width: "80%", ml: "10%", mt: "50px" }}>
            <Box sx={{ display: "flex" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img>
              <Typography
                sx={{
                  fontSize: "22px",
                  ml: "26px",
                  fontWeight: "400",
                  mt: "2%",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "80%", ml: "10%", mt: "81px" }}>
            <Box sx={{ display: "flex" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img>
              <Typography
                sx={{
                  fontSize: "22px",
                  ml: "26px",
                  fontWeight: "400",
                  mt: "2%",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "80%", ml: "10%", mt: "81px" }}>
            <Box sx={{ display: "flex" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "100%", height: "123px" }}
              ></img>
              <Typography
                sx={{
                  fontSize: "22px",
                  ml: "26px",
                  fontWeight: "400",
                  mt: "2%",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "80%", ml: "10%", mt: "81px" }}>
            <Box sx={{ display: "flex" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img>
              <Typography
                sx={{
                  fontSize: "22px",
                  ml: "26px",
                  fontWeight: "400",
                  mt: "2%",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: "75px", width: "80%", ml: "10%" }}>
          <Box
            sx={{
              display: { xs: "block", sm: "flex", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ display: "block" }}>
            <Box sx={{ display:"flex",justifyContent:"center" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img>
              </Box>
              <DownloadButton
                url="https://example.com/myfile.pdf"
                filename="myfile.pdf"
                name="Sponsership Brochure Download "
              />
            </Box>

            <Box sx={{ display: "block" }}>
            <Box sx={{ display:"flex",justifyContent:"center" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img></Box>
              <DownloadButton
                url="https://example.com/myfile.pdf"
                filename="myfile.pdf"
                name="Collaborate Download"
              />
            </Box>

            <Box sx={{ display: "block" }}>
            <Box sx={{ display:"flex",justifyContent:"center" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img>
              </Box>
              <DownloadButton
                url="https://example.com/myfile.pdf"
                filename="myfile.pdf"
                name="Crowd Funding Download"
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: "100px", width: "90%", ml: "5%" }}>
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
            }}
          >
            {" "}
            Our Past Sponsers
          </Typography>

          <Box sx={{ mt: "71px", width: "100%" }}>
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
                <Box sx={{ display: "block", ml: "2%" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "center",
                  ml: {xs:"2%",sm:"8%",md:"8%"},
                }}
              >
                <Box sx={{ display: "block", mr: { xs: "0%", sm: "4.3%" } }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: {xs:"0%"},mr:{sm:"7%"}}}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: "71px", width: "100%" }}>
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
                <Box sx={{ display: "block", ml: "2%" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "center",
                  ml: {xs:"2%",sm:"8%",md:"8%"},
                }}
              >
                <Box sx={{ display: "block", mr: { xs: "0%", sm: "4.3%" } }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: {xs:"0%"},mr:{sm:"7%"}}}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>


          <Box sx={{ mt: "71px", width: "100%" }}>
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
                <Box sx={{ display: "block", ml: "2%" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "center",
                  ml: {xs:"2%",sm:"8%",md:"8%"},
                }}
              >
                <Box sx={{ display: "block", mr: { xs: "0%", sm: "4.3%" } }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: {xs:"0%"},mr:{sm:"7%"}}}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>


          <Box sx={{ mt: "71px", width: "100%" }}>
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
                <Box sx={{ display: "block", ml: "2%" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "center",
                  ml: {xs:"2%",sm:"8%",md:"8%"},
                }}
              >
                <Box sx={{ display: "block", mr: { xs: "0%", sm: "4.3%" } }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: {xs:"0%"},mr:{sm:"7%"}}}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>     <Typography
                    sx={{
                      fontSize: "20px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                    }}
                  >
                    Sponser_name
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>

        <Box sx={{ mt: "125px", mb: "125px" }}>
          <Typography
            sx={{
              font: "enter",
              fontSize: { xs: "35px", sm: "35px", md: "40px" },
              fontWeight: "400",
              height: "100%",
              width: {xs:"100%",sm:"100%",md:"90%"},
              display: "flex",
              justifyContent: {md:'flex-start',xs:"center",sm:"center"},
              ml: {xs:"0px",sm:"0px",md:"10%"},
            }}
          >
            Want to Support Us
          </Typography>

          <Typography
            sx={{
              font: "enter",
              fontSize: "22px",
              fontWeight: "400",
              height: "100%",
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              ml: "7%",
              mt: { xs: "8%", sm: "3%" },
              mb: "30px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Typography
                  sx={{
                    fontSize: "15px",
                    ml: "10px",
                    fontWeight: "400",
                    mt: "5%",
                  }}
                >
                  Contact1
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Link
                  to="/"
                  style={{
                    fontSize: "16.5px",
                    ml: "10px",
                    fontWeight: "400",
                    marginTop: "5%",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                    paddingLeft: "12px",
                  }}
                >
                  Link1
                </Link>
              </Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Link
                  to="/"
                  style={{
                    fontSize: "16.5px",
                    ml: "10px",
                    fontWeight: "400",
                    marginTop: "5%",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                    paddingLeft: "12px",
                  }}
                >
                  Link2
                </Link>
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Typography
                  sx={{
                    fontSize: "15px",
                    ml: "10px",
                    fontWeight: "400",
                    mt: "5%",
                  }}
                >
                  Contact1
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Link
                  to="/"
                  style={{
                    fontSize: "16.5px",
                    ml: "10px",
                    fontWeight: "400",
                    marginTop: "5%",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                    paddingLeft: "12px",
                  }}
                >
                  Link1
                </Link>
              </Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Link
                  to="/"
                  style={{
                    fontSize: "16.5px",
                    ml: "10px",
                    fontWeight: "400",
                    marginTop: "5%",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                    paddingLeft: "12px",
                  }}
                >
                  Link2
                </Link>
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Typography
                  sx={{
                    fontSize: "15px",
                    ml: "10px",
                    fontWeight: "400",
                    mt: "5%",
                  }}
                >
                  Contact1
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Link
                  to="/"
                  style={{
                    fontSize: "16.5px",
                    ml: "10px",
                    fontWeight: "400",
                    marginTop: "5%",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                    paddingLeft: "12px",
                  }}
                >
                  Link1
                </Link>
              </Box>
              <Box sx={{ display: "flex", mb: "10px" }}>
                <img
                  alt="png"
                  src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  style={{ width: "38px", borderRadius: "50%", height: "38px" }}
                ></img>
                <Link
                  to="/"
                  style={{
                    fontSize: "16.5px",
                    ml: "10px",
                    fontWeight: "400",
                    marginTop: "5%",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                    paddingLeft: "12px",
                  }}
                >
                  Link2
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
      <Footer /></Box>
    </Box>
  );
}

export default Sponser;
