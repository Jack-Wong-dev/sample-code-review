import { render } from '@testing-library/react';

import StudentCard from '../StudentCard';

let student = {
    city: "Fushë-Muhurr",
    company: "Yadel",
    email: "iorton0@imdb.com",
    firstName: "Ingaberg",
    grades: ['78', '100', '92', '86', '89', '88', '91', '87'],
    id: "1",
    lastName: "Orton",
    pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
    skill: "Oracle"
}


describe('a card to render the information of one student', () => {
    it('renders properly', () => {
        render(<StudentCard studentInfo={student}/>)
    })

    //it needs to show image, name, email company skill average

    it('shows the image of the student', () => {
        const {getByTestId} = render(<StudentCard studentInfo={student} />);
        const image = getByTestId('studentCard__profileImage');

        expect(image).toBeInTheDocument();
        expect(image.src).toContain("https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg")
        expect(image.alt).toContain('Student Image');
    });

    it('shows the name of the student', () => {
        const {getByTestId, getByText} = render(<StudentCard studentInfo={student}/>);

        expect(getByTestId('studentCard__studentName')).toBeInTheDocument()
        expect(getByText("Ingaberg Orton")).toBeInTheDocument();
        expect(getByTestId('studentCard__studentName')).toHaveTextContent('Ingaberg Orton');

    })

    // write tests for the rest of the student card 



})
