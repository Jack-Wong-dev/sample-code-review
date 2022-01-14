import React, {useEffect, useState} from 'react';

import StudentCard from '../studentCard/StudentCard';

function StudentList(props) {

    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);

    useEffect(()=> {
        fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setStudents(data.students)
        });
    },[])
    
    return (
        <div className="studentList">
            {loading && 'Loading...'}  
            {
                students.length > 0 && 
                students.map(student => {
                    return (
                        <StudentCard 
                            key={student.id}
                            studentInfo={student}
                        />
                    )
                })
            }  
        </div>
    );
}

export default StudentList;