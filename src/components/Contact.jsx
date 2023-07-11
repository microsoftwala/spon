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
          Contact Us
        </Typography>
          <Typography sx={{ fontSize:"20px",mb:"50px",display:"flex",justifyContent:"flex-start",ml:"10%" }}>Please fill out the form below to get in touch with us:</Typography>
          <div className='formss'>
          <form>
            <div>
              {/* <label htmlFor="name">Name:</label> */}
              <input type="text" placeholder="Name" id="name" name="name" />
            </div>
            <div>
              {/* <label htmlFor="email">Email ID:</label> */}
              <input type="email"placeholder="Email" id="email" name="email" />
            </div>
            <div>
              {/* <label htmlFor="mobile">Mobile Number:</label> */}
              <input type="tel"  placeholder="Mobile" id="mobile" name="mobile" />
            </div>
            <div>
              <textarea id="message" placeholder="Message" name="message" rows="4" />
            </div>
            <button type="submit">Submit</button>
          </form>
          </div>
        </div>
        <div className='importantcontacts'>
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
            mt:"70px",
            mb:"25px"
          }}
        >
          Important Contact
        </Typography>
          <div className="row">
          <img src={computerImage} alt='roundimage'/>
          <span className='label'>Contact</span>
          <img src={computerImage} alt='roundimage'/>
          <span className='label'>Contact</span>
          <img src={computerImage} alt='roundimage'/>
          <span className='label'>Contact</span>
          
        </div>
        <div className="row">
        <img src={computerImage} alt='roundimage'/>
          <span className='label'>Link 1</span>
          <img src={computerImage} alt='roundimage'/>
          <span className='label'>Link 1</span>
          <img src={computerImage} alt='roundimage'/>
          <span className='label'>Link 1</span>
        </div>
        <div className="row">
        <img src={computerImage} alt='roundimage'/>
          <span className='label'>Link 2</span>
          <img src={computerImage} alt='roundimage'/>
          <span className='label'>Link 2</span>
          <img src={computerImage} alt='roundimage'/>
          <span className='label'>Link 2</span>
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
          }}>Our location</Typography>
          <Box sx={{
            backgroundColor: "#D9D9D9",
            width:{xs:"85%",sm:"75%",md:"70%"},
            margin:"auto",
            display:"flex",
            justifyContent:"center",
            height:"270px",
            mt:"50px",
            mb:"100px",
            alignItems:"center"
          }}>
          <img src= {location} alt='roundimage' style={{}}/>
        </Box>
    </Box>
        
        
      <Footer/>
        
        
      </div>
    
  );
}

export default Contact;