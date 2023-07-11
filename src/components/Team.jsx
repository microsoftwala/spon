import React, { useEffect, useState, useRef } from 'react';
import teamMembers from './teamMembersaData';
import '../App.css';
import Header from "./Header"
import Footer from "./Footer"

const TeamMember = ({ image, name, role, link }) => (
  <div className='team-member'>
    <img className='member-image' src={image} alt={name} />
    <p>{name}</p>
    <p className='role'>{role}</p>
    <a href={link}>Linkedin</a>
  </div>
);

const TeamGrid = () => {
  const [membersPerRow, setMembersPerRow] = useState(4);
  const [selectedYear, setSelectedYear] = useState(2023);
  const buttonsPerRow = 3;

  const teamMembersRef = useRef(null);

  useEffect(() => {
    const calculateMembersPerRow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setMembersPerRow(2);
      } else if (screenWidth >= 768 && screenWidth < 992) {
        setMembersPerRow(3);
      } else if (screenWidth >= 992 && screenWidth < 1200) {
        setMembersPerRow(4);
      } else {
        setMembersPerRow(4);
      }
    };

    calculateMembersPerRow();

    window.addEventListener('resize', calculateMembersPerRow);
    return () => {
      window.removeEventListener('resize', calculateMembersPerRow);
    };
  }, []);

  const years = Array.from({ length: 7 }, (_, index) => 2023 - index).reverse();

  const handleYearClick = (year) => {
    setSelectedYear(year);

    if (teamMembersRef.current) {
      teamMembersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredMembers = selectedYear ? teamMembers.filter((member) => member.year === selectedYear) : teamMembers;
  const rows = Math.ceil(filteredMembers.length / membersPerRow);

  const filteredYears = years.filter((year) => year !== selectedYear).reverse();

  return (
    <div>
      <Header/>
      <h2 ref={teamMembersRef} style={{ display:"flex",justifyContent:"center",margin:"auto",padding:"0px",marginTop:"30px" }}>Team Members - {selectedYear}</h2>
      <div className='team-grid'>
      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className='team-row'>
          {filteredMembers.slice(rowIndex * membersPerRow, rowIndex * membersPerRow + membersPerRow).map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              link={member.link}
            />
          ))}
        </div>
      ))}
      </div>
      <h2 style={{ display:"flex",justifyContent:"center",margin:"auto",padding:"0px" }} >{selectedYear === 2023 ? 'Past Teams' : 'Other Teams'}</h2>
      <div className="button-container">
        {Array.from({ length: Math.ceil(filteredYears.length / buttonsPerRow) }).map((_, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {filteredYears.slice(rowIndex * buttonsPerRow, rowIndex * buttonsPerRow + buttonsPerRow).map((year) => (
              <button key={year} onClick={() => handleYearClick(year)} >
                {year}
              </button>
            ))}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default TeamGrid;