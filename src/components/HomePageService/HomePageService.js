import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './HomePageService.css'

const HomePageService = (props) => {
    const {name, img, service, price} = props.service;

    
    return (
        <Col>
            <Card className="service_home h-100">
                
                <Card.Img variant="top" src={img} />

                <Card.Body>
                    <Card.Title> <h4 className="service_name"> {name} </h4> </Card.Title>
                    <Card.Text>
                        <h6 className="service_details mt-4"> {service} </h6>
                    </Card.Text>
                </Card.Body>

                <div>
                    <p className="fw-bolder ms-3"> <small> Price ${price} </small> </p>
                </div>

                <Button className="regular_btn" variant="light"> More Info </Button>
            </Card>
        </Col>
    );
};

export default HomePageService;