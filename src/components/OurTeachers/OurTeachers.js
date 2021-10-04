import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';
import './ourTeacher.css'

const OurTeachers = () => {
    // useState
    const [teachers, setTeachers] = useState([]);

    // useEffect
    useEffect( () => {
        fetch('./ourTeachers.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    }, []);


    
    return (
        <div className="teacher_container py-5">
            <Container>
                <Row xs={1} md={4} className="teachers">
                    {
                        teachers.map(teacher => <Teacher
                            key={teacher.id}
                            teacher={teacher}
                        ></Teacher>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default OurTeachers;