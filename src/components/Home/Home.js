import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import HomePageService from '../HomePageService/HomePageService';
import './home.css'

const Home = () => {
    // useState
    const [services, setServices] = useState([]);

    // useEffect
    useEffect( () => {
        fetch('./homePageService.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);


    
    return (
        <div>
            <h1 className="service_title text-center p-5"> IELTS Test Type </h1>
            <Container>
                <Row xs={2} md={2} lg={4} className="g-4 py-5">
                    {
                        services.map(service => <HomePageService
                            key={service.id}
                            service={service}
                        ></HomePageService>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;