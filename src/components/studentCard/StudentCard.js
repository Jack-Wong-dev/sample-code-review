import React, {useState} from 'react';
import { FaPlus, FaMinus, FaMenu } from 'react-icons/fa';

import './StudentCard.scss';

function StudentCard({studentInfo}) {
    const [showGrades, setShowGrades] = useState(false);

    const {firstName, pic, lastName, email, company, skill, grades} = studentInfo;

    const [showTestScores, setShowTestScores] = useState('true');
    
    const averageGrade = (grades) => {
        return grades.reduce((a,b) => a + Number(b), 0) / grades.length;
    }

    const checkShowGrades = () => {
        if(showGrades) return true;
        return false;
    }

    let average = averageGrade(grades)
    let name = `${firstName} ${lastName}` 
    let testNumber = [1,2,3,4,5,6,7,8,9,10];
    let counter = -1;
    console.log(counter);


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
                <div class="studentCard--gradeReport" data-testid="studentCard--gradeReport" style={{display: checkShowGrades() == true ? 'block' : 'none'}}>
                    {
                    grades.map(grade => {
                        counter += 1
                        return (
                            <div>{"Test " + testNumber[counter] + ": " + grade + "%"}</div>
                        )
                    })}
                </div>  
            </div>
            <div className="plusIcon" data-testid="plusIcon" onClick={()=> setShowGrades(!showGrades)}>
                {!showGrades ? <FaPlus /> : <FaMinus className="minusIcon"  />}
            </div>
        </div>
    );
}

export default StudentCard;