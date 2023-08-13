import React, { useEffect, useState, useRef } from 'react';
import teamMembers from './teamMembersaData';
import '../style/team.css';
import Header from "./Header"
import Box from "@mui/material/Box";
import photo from "../assets/Group1.1.png"
import photo1 from "../assets/Group2.1.jpg"
import Footer from "./Footer"

const TeamMember = ({ name, role, team, image, linkedin }) => (
  <div className="team-member">
    <img src={image} alt={name} className="member-image" />
    <p>{name}</p>
    <p className='role'>{role}</p>
    <a href={linkedin} target="_blank" rel="noopener noreferrer"><b>LinkedIn</b></a>
  </div>
);



const TeamGrid = () => {

  const [selectedYear, setSelectedYear] = useState(2023);

  const teamMembersRef = useRef(null);

  const getTeamMembersByYear = (year) => {
    return teamMembers.filter((member) => member.year === year);
  };

  const handleYearClick = (year, event) => {
    setSelectedYear(year);

    if (teamMembersRef.current) {
      teamMembersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div >
    <div>
      <Header />
      </div>
    <div>
      <h1 ref={teamMembersRef} style={{ fontWeight:"bold" }}>Team Members - {selectedYear}</h1>
      <div className="team-grid">
        <h2 className='sub-heading' style={{fontWeight:"bold"}}>Mentors</h2>
        <div className="team-row mentors-row">
          {getTeamMembersByYear(selectedYear)
            .filter((member) => member.team === 'Mentors')
            .map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                image={member.image} 
                role={member.role} 
                team={member.team} 
                linkedin={member.linkedin} 
              />
            ))}
        </div>
      </div>

      <div className="team-grid">
        <h2 className='sub-heading' style={{fontWeight:"bold"}}>HQ</h2>
        <div className="team-row">
          {getTeamMembersByYear(selectedYear)
            .filter((member) => member.team === 'HQ')
            .map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                image={member.image} 
                role={member.role} 
                team={member.team} 
                linkedin={member.linkedin} 
              />            
            ))}
        </div>
      </div>

      <div className="team-grid people-8">
        <h2 className='sub-heading' style={{fontWeight:"bold"}}>Team Roll Cage</h2>
        <div className="team-row ">
          {getTeamMembersByYear(selectedYear)
            .filter((member) => member.team === 'Team Roll Cage')
            .map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                image={member.image} 
                role={member.role} 
                team={member.team} 
                linkedin={member.linkedin} 
              />            
            ))}
        </div>
      </div>

      <div className="team-grid people-8">
        <h2 className='sub-heading' style={{fontWeight:"bold"}}>Team Suspension</h2>
        <div className="team-row">
          {getTeamMembersByYear(selectedYear)
            .filter((member) => member.team === 'Team Suspension')
            .map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                image={member.image} 
                role={member.role} 
                team={member.team} 
                linkedin={member.linkedin} 
              />
            ))}
        </div>
      </div>

      <div className="team-grid">
        <h2 className='sub-heading' style={{fontWeight:"bold"}}>Team Powertrain</h2>
        <div className="team-row">
          {getTeamMembersByYear(selectedYear)
            .filter((member) => member.team === 'Team Powertrain')
            .map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                image={member.image} 
                role={member.role} 
                team={member.team} 
                linkedin={member.linkedin} 
              />            
            ))}
        </div>
      </div>

      <div className="team-grid">
        <h2 className='sub-heading' style={{fontWeight:"bold"}}>Team DAQ & Electronics</h2>
        <div className="team-row">
          {getTeamMembersByYear(selectedYear)
            .filter((member) => member.team === 'Team DAQ & Electronics')
            .map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                image={member.image} 
                role={member.role} 
                team={member.team} 
                linkedin={member.linkedin} 
              />            
            ))}
        </div>
      </div>

      <div className="team-grid">
        <h2 className='sub-heading' style={{fontWeight:"bold"}}>Team Brakes</h2>
        <div className="team-row">
          {getTeamMembersByYear(selectedYear)
            .filter((member) => member.team === 'Team Brakes')
            .map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                image={member.image} 
                role={member.role} 
                team={member.team} 
                linkedin={member.linkedin} 
              />            
            ))}
        </div>
      </div>

      <div className="team-grid">
        <h2 className='sub-heading' style={{fontWeight:"bold"}}>Team Steering</h2>
        <div className="team-row">
          {getTeamMembersByYear(selectedYear)
            .filter((member) => member.team === 'Team Steering')
            .map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                image={member.image} 
                role={member.role} 
                team={member.team} 
                linkedin={member.linkedin} 
              />            
            ))}
        </div>
      </div>

       <Box sx={{ display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",width:{xs:"100%",sm:"95%",md:"90%"},m:"auto"}} className='button-container'>
          <Box sx={{m:"10px",width:"100%"}}>
          <span style={{fontFamily:"Roboto",fontSize:"25px",fontWeight:"bold"}}>2023</span>
          <img src={photo} alt="pic2023" onClick={() => handleYearClick(2023)} style={{display:"flex",justifyContent:"center",margin:"auto",height:"175px",width:"250px",borderRadius:"10px" }}></img>
          </Box>
          <Box sx={{m:"10px",width:"100%"}}>
          <span style={{fontFamily:"Roboto",fontSize:"25px",fontWeight:"bold"}}>2022</span>
          <img  src={photo1} alt='pic2022' onClick={() => handleYearClick(2022)} style={{display:"flex",justifyContent:"center",margin:"auto",height:"175px",width:"250px",borderRadius:"10px" }}></img>
          </Box>
        </Box>
    </div>
      <div><Footer/></div></div>
  );
};


export default TeamGrid;
