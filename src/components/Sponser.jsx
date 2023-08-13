import React from "react";
import "../style/gallery.css"
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DownloadButton from "./Download";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from "./Header"
import Footer from "./Footer"
import Ansys from "../assets/ansys.png"
import Blaze from "../assets/Blaze.png"
import Download from "../assets/download.jpg"
import C2M from "../assets/G2M.png"
import HDFC from "../assets/HDFC.png"
import Indian from "../assets/Indian Bank.jpg"
import Overseas from "../assets/Indian Overseas Bank.png"
import IIITDM from "../assets/IIITDM.png"
import Koshi from "../assets/koshi motors.jpg"
import Scolrian from "../assets/scolarian.png"
import Solid from "../assets/solidworks.png"
import TLC from "../assets/TLC Logo.png"


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
            fontWeight:"bold"
          }}
        >
          Our Achievements
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
          <Typography
            sx={{
              pr: "5%",
              fontSize: "16px",
              fontWeight: "400",
              width: "100%",
              height: "100%",mb:"5%"
            }}
          >
            We achieved an All India Rank of 43 among 116 teams that participated in the SAEINDIA mBaja 2023 and secured 8th position among the Tamil Nadu Colleges that participated. We are placed 3rd among the Centrally Funded Technical Institutes (CFTIs).We hope that our achievements in this competition will inspire other students to participate in such competitions and strive towards excellence.
          </Typography>

          <img
            alt="png"
            src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            style={{ margin: "auto", width: "100%", borderRadius: "5px",height:"300px" }}
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
              paddingTop:"30px",
              fontWeight:"bold"
            }}
          >
            Why Sponser Us
          </Typography>

          <Box sx={{ width: "80%", ml: "10%", mt: "50px"}}>
            <Box sx={{ display: {xs:"grid",sm:"flex",md:"flex"},
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyContent: "flex-start" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img>
              <Typography
                sx={{
                  fontSize: "17px",
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
            <Box sx={{ display: {xs:"grid",sm:"flex",md:"flex"},
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyContent: "flex-start" }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img>
              <Typography
                sx={{
                  fontSize: "17px",
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
            <Box sx={{ display: {xs:"grid",sm:"flex",md:"flex"},
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyContent: "flex-start"   }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "100%", height: "123px" }}
              ></img>
              <Typography
                sx={{
                  fontSize: "17px",
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
            <Box sx={{ display: {xs:"grid",sm:"flex",md:"flex"},
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyContent: "flex-start"   }}>
              <img
                alt="png"
                src="https://images.unsplash.com/photo-1687220294041-27d462fb2092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                style={{ width: "123px", borderRadius: "50%", height: "123px" }}
              ></img>
              <Typography
                sx={{
                  fontSize: "17px",
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
              fontWeight:"bold"
            }}
          >
            {" "}
            Our Past Sponsers
          </Typography>

          <Box sx={{ mt: "40px", width: "100%" }}>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "flex" },
                flexWrap:"wrap",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                display: "grid",
                gridTemplateColumns: {xs:"repeat(2, 1fr)",md:"repeat(4, 1fr)",sm:"repeat(2, 1fr)"},
                  justifyContent: "center"
                  
                }}
              >
                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={Ansys}
                    style={{
                      width: "90px",
                      // borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                      mr:"15px",
                      fontWeight:"bold"
                    }}
                  >
                    Ansys
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px" }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                <div >
                  <img
                    alt="png"
                    src={Blaze}
                    // className="circular-image"
                    style={{
                      width: "90px",
                      height: "90px",
                      // borderRadius: "50%",
                      
                    }}
                  ></img></div></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      // ml: "50px",
                      fontWeight: "400",
                      mt: "2%",
                      fontWeight:"bold",
                      display:"flex",
                      justifyContent:"center"
                    }}
                  >
                    Blaze
                  </Typography>
                </Box>
                
                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={Download}
                    style={{
                      width: "90px",
                      // borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                      mr:"15px"
                      ,fontWeight:"bold"
                    }}
                  >
                    Accurate Rings
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={Overseas}
                    style={{
                      width: "90px",
                      // borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "10px",
                      fontWeight: "400",
                      mt: "2%",
                      fontWeight:"bold"
                    }}
                  >
                    Indian <br/>
                    Overseas Bank
                  </Typography>
                </Box>

              </Box>

            </Box>
            </Box>

            <Box sx={{  mt:{xs:"10px",sm:"10px",md:"40px"}, width: "100%" }}>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                display: "grid",
                gridTemplateColumns: {xs:"repeat(2, 1fr)",md:"repeat(4, 1fr)",sm:"repeat(2, 1fr)"},
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={C2M}
                    style={{
                      width: "80px",
                      // borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mr:"15px"
                      ,fontWeight:"bold"
                    }}
                  >
                    G2M
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={HDFC}
                    style={{
                      width: "90px",
                      // borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                      fontWeight:"bold"
                    }}
                  >
                    HDFC
                  </Typography>
                </Box>
                
                <Box sx={{ display: "block", ml: "2%",paddingLeft:"30px",paddingRight:"30px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={Indian}
                    style={{
                      width: "90px",
                      // borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                      mr:"20px",
                      fontWeight:"bold"
                    }}
                  >
                    Indian Bank
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={Solid}
                    style={{
                      width: "90px",
                      // borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                      fontWeight:"bold"
                    }}
                  >
                    SolidWorks
                  </Typography>
                </Box>

              </Box>

            </Box>
            </Box>


            <Box sx={{  mt:{xs:"10px",sm:"10px",md:"40px"}, width: "100%" }}>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                display: "grid",
                gridTemplateColumns: {xs:"repeat(2, 1fr)",md:"repeat(4, 1fr)",sm:"repeat(2, 1fr)"},
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={IIITDM}
                    style={{
                      width: "90px",
                      borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                      mr:"15px",
                      fontWeight:"bold"
                    }}
                  >
                    IIITDM
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center",mt:"30px" }}>
                  <img
                    alt="png"
                    src={Scolrian}
                    style={{
                      width: "100px",
                      height:"50px"
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "20px",
                      fontWeight: "400",
                      mt: "3%",
                      fontWeight:"bold"
                    }}
                  >
                    Scolarian <br/>Racing
                  </Typography>
                </Box>
                
                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center" }}>
                  <img
                    alt="png"
                    src={TLC}
                    style={{
                      width: "90px",
                      // borderRadius: "50%",
                      height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "2%",
                      mr:"15px",
                      fontWeight:"bold"
                    }}
                  >
                    Teaching <br/> Learning Centre
                  </Typography>
                </Box>

                <Box sx={{ display: "block", ml: "2%",paddingLeft:"25px",paddingRight:"25px",mt:{xs:"40px",sm:"40px",md:"0px"} }}>
                <Box sx={{ display:"flex",justifyContent:"center",mt:"30px" }}>
                  <img
                    alt="png"
                    src={Koshi}
                    style={{
                      width: "90px",
                      // borderRadius: "50%",
                      // height: "90px",
                    }}
                  ></img></Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      ml: "26px",
                      fontWeight: "400",
                      mt: "6%",
                      fontWeight:"bold"
                    }}
                  >
                   Koshi <br/>Motors
                  </Typography>
                </Box>

              </Box>

            </Box>
            </Box>


          
          </Box>

         

        <Box sx={{ mt: "80px", mb: "125px" }}>
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
              fontWeight:"bold"
            }}
          >
            Want to Support Us
          </Typography>

          <Typography
            sx={{
              font: "enter",
              fontSize: "20px",
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

          <Box >
            
          <h3 style={{fontFamily:"Roboto", fontWeight:"bold",fontSize:"25px",marginBottom:"7px"}}> (Team Captain) </h3>
        <Box  sx={{ display:{xs:"block",sm:"block",md:"flex"},
        justifyContent:{xs:"center",sm:"center",md:"space-evenly"},m:"auto"}}>
          <Box sx={{m:"5px"}}>
              <span><PhoneIcon/>+918235092655</span>
          </Box>
          <Box sx={{m:"5px"}}>
              <a href='https://instagram.com/trashguypiyush?igshid=MzRlODBiNWFlZA==' target="__blank"><InstagramIcon/>Piyush Kumar</a>
          </Box>
          <Box sx={{m:"5px"}}>
              <LinkedInIcon/>
              <a href="https://www.linkedin.com/in/piyush243kr" target='__blank'>Piyush Kumar</a>
          </Box>
        </Box>

          <br></br>
          <h3 style={{fontFamily:"Roboto", fontWeight:"bold",fontSize:"25px",marginBottom:"7px"}}>(Team Manager)</h3>
          <Box  sx={{ display:{xs:"block",sm:"block",md:"flex"},
        justifyContent:{xs:"center",sm:"center",md:"space-evenly"},m:"auto"}}>
          <Box sx={{m:"5px"}}>
              <span ><PhoneIcon/>+917671967392</span>
          </Box>
          <Box sx={{m:"5px"}}>
              <InstagramIcon/>
              <a href='https://instagram.com/ravishanand9?igshid=MzRlODBiNWFlZA==' target="__blank">Ravish Anand</a>
          </Box>
          <Box sx={{m:"5px"}}>
              <LinkedInIcon/>
              <a href="https://www.linkedin.com/in/ravish-anand-" target='__blank'>Ravish Anand</a>
          </Box>
        </Box>

          <br></br>
          <h3 style={{fontFamily:"Roboto",marginBottom:"7px", fontWeight:"bold",fontSize:"25px"}}>(Team Vice captain)</h3>
          <Box  sx={{ display:{xs:"block",sm:"block",md:"flex"},
        justifyContent:{xs:"center",sm:"center",md:"space-evenly"},m:"auto"}}>
          <Box >
              <span><PhoneIcon/>+917358082120</span>
          </Box>
          <Box sx={{m:"5px"}}>
              <InstagramIcon/>
              <a href='https://instagram.com/akhil_akhilesh2003?igshid=MzRlODBiNWFlZA==' target="__blank">M Akhilesh</a>
          </Box>
          <Box sx={{m:"5px"}}>
              <LinkedInIcon/>
              <a href="https://www.linkedin.com/in/akhilesh-m-6866b1248" target='__blank'>M Akhilesh</a>
          </Box>
        </Box>

          <br></br>
          <h3 style={{fontFamily:"Roboto",marginBottom:"7px", fontWeight:"bold",fontSize:"25px"}}>(Team Joint Manager)</h3>
          <Box  sx={{ display:{xs:"block",sm:"block",md:"flex"},
        justifyContent:{xs:"center",sm:"center",md:"space-evenly"},m:"auto"}}>
          <Box sx={{m:"5px"}}>
              <span > <PhoneIcon/>+917305951230</span>
          </Box>
          <Box sx={{m:"5px"}}>
              <InstagramIcon/>
              <a href='https://instagram.com/jb_16_03?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D' target="__blank">Jana Balaji</a>
          </Box>
          <Box sx={{m:"5px"}}>
              <LinkedInIcon/>
              <a href="https://www.linkedin.com/in/jana-balaji-818b18228" target='__blank'>Jana Balaji</a>
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
