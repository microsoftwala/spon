import React from 'react';
import computerImage from '../assets/icon.png';
import "../style/contact.css"
import Header from "./Header"
import Footer from "./Footer"
import location from '../assets/location.png'
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

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
          Important Contact
        </Typography>
         
        </div>
        <div className='importantcontacts'>
        <div className="row">
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Contact</span>
          </div>
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Contact</span>
          </div>
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Contact</span>
          </div>
        </div>

        <div className="row">
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Link1</span>
          </div>
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Link1</span>
          </div>
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Link1</span>
          </div>
        </div>

        <div className="row">
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Link2</span>
          </div>
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Link2</span>
          </div>
          <div className='label'>
              <img src={computerImage} alt='roundimage'/>
              <span className='label'>Link2</span>
          </div>
        </div>
          

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
