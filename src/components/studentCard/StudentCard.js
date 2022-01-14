import React from 'react';

import './StudentCard.scss';

function StudentCard({studentInfo}) {

    const {firstName, pic, lastName, email, company, skill, grades} = studentInfo;
    
    const averageGrade = (grades) => {
        return grades.reduce((a,b) => a + Number(b), 0) / grades.length;
    }

    let average = averageGrade(grades)
    let name = `${firstName} ${lastName}` 

    return (
        <div className="studentCard">
            
            <img 
                className="studentCard__profileImage" data-testid="studentCard__profileImage"
                src={pic} 
                alt="Student Image"
            />  
        
            <div className="studentCard__studentInfo">
                <div className="studentCard__studentName" data-testid="studentCard__studentName">{name}</div> 
                <div className="studentCard__studentEmail" >Email: {email}</div> 
                <div className="studentCard__studentCompany" >Company: {company}</div>     
                <div className="studentCard__studentSkill" >Skill: {skill}</div>     
                <div className="studentCard__studentAverage" >Average: {average}% </div>     
            </div>
        </div>
    );
}

export default StudentCard;