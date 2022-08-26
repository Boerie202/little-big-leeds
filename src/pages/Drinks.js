import React from 'react';
// import ReactDOM from 'react-dom';
import { Col, Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './AllPages.css'

//Data Imports
// import { CosyDrinks } from './data.js';



function drinksPage() {
    return (
        <div className='page-container'>
            <h2 className='page-title'>
                Drinks
            </h2>
            <Container fluid>
                <Row>
                    <Col>
                        <Card className='landing-page-card'>
                            <Card.Title className='drinks-landing-page-content'>Cosy Vibes</Card.Title>
                            <Link to='/drinks_venues_cosy' style={{ textDecoration: 'none', textDecorationColor: '#282c34' }} > <button>More info</button></Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='landing-page-card'>
                            <Card.Title className='drinks-landing-page-content'>Classy Vibes</Card.Title>
                            <Link to='/drinks_venues_classy' style={{ textDecoration: 'none', textDecorationColor: '#282c34' }} > <button>More info</button></Link>
                        </Card>
                    </Col>
                </Row>
                <Row className='separator-row' />
                <Row>
                    <Col>
                        <Card className='landing-page-card'>
                            <Card.Title className='drinks-landing-page-content'>Pub Vibes</Card.Title>
                            <button>More info</button>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='landing-page-card'>
                            <Card.Title className='drinks-landing-page-content'>Bar Vibes</Card.Title>
                            <button>More info</button>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default drinksPage;