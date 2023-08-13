import React from 'react';
import "../style/contact.css"
import Header from "./Header"
import Footer from "./Footer"
import { Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import Box from "@mui/material/Box";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (

    <div className="App">
    <Header/>
      <div className='appcontext'>
        </div>
        <div className="contact-section">
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: {xs:"100%",sm:"100%",md:"90%"},
            display: "flex",
            justifyContent: {md:'flex-start',xs:"center",sm:"flex-start"},
            ml: {xs:"0px",sm:"10%",md:"10%"},
            mt:"30px",mb:"20px"
          }}
        >
          Our Contact
        </Typography>
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
          
        

        </div>
        <Box className='location'>
          <Typography sx={{
            font: "enter",
            fontSize: "40px",
            fontWeight: "400",
            height: "100%",
            width: {xs:"100%",sm:"100%",md:"90%"},
            display: "flex",
            justifyContent: {md:'flex-start',xs:"center",sm:"center"},
            ml: {xs:"0px",sm:"0px",md:"10%"},
            mt:"30px"
            ,mb:"30px"
          }}>Our location</Typography>

          <Box sx={{
            width:{xs:"85%",sm:"75%",md:"70%"},
            margin:"auto",
            display:"flex",
            justifyContent:"center",
            height:"270px",
            mt:"25px",
            mb:"100px",
            alignItems:"center"
          }}>
          <img src= "https://i.ytimg.com/vi/ujtUyW30P60/maxresdefault.jpg" alt='roundimage' style={{ height:"100%",width:"100%"}}/>
        </Box>
    </Box>
        
        
      <Footer/>
        
        
      </div>
    
  );
}

export default Contact;
