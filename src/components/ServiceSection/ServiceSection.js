import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceSection.css'

const ServiceSection = (props) => {
    const {title, description} = props.service;


    return (
        <Col className="service_section_card">
            <Card className="h-100">
                <Card.Body  className="text-center">
                    <Card.Title className="service_section_title py-3 fw-bold">{title}</Card.Title>
                    <Card.Text className="py-3">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceSection;