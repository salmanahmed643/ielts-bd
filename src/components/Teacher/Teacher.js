import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './teacher.css'

const Teacher = (props) => {
    const {name, speaks, special, ratting, description, img} = props.teacher;



    return (
        <Card className="teacher_card text-center">
            <div className="card_img">
                <img src={img} alt="" />
                <h6 className="mt-2"> Name: {name} </h6>
                <p className="special"> Language: {speaks} </p>
                <p className="fw-bold"> <i className="fas fa-star"></i> {ratting} </p>
            </div>


            <div className="card_body h-100">
                <p className="fw-bold mt-4"> Special:  {special} </p>
                <p> <small className="text-muted"> {description} </small> </p>
            </div>


            <div className="py-4">
                <Button className="teacher_btn" variant="secondary"> Send Message </Button>
            </div>
        </Card>
    );
};

export default Teacher;