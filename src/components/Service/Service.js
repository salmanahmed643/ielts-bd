import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceSection from '../ServiceSection/ServiceSection';

const Service = () => {
    // useState
    const [services, setServices] = useState([]);

    // useEffect
    useEffect( () => {
        fetch('./serviceSection.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);



    return (
        <div className="py-5">
            <Container>
                <div className="text-center py-5">
                    <h1 className="text-info fw-bold"> Meet new friends </h1>
                    <h3>  and learn from experts  </h3>
                </div>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.map(service => <ServiceSection
                            key={service.id}
                            service={service}
                        ></ServiceSection>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;