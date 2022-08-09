import React from 'react';
// import ReactDOM from 'react-dom';
// import { Col, Row, Container } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


//Data for the Cosy Vibes Page
export function CosyDrinksData() {
    return (
        <div>
            <Container fluid >
                <Col className='venue-page-column'>
                    <Card className='venue-page-card'  >
                        <Card.Title>Blind Tyger</Card.Title>
                        <Card.Subtitle>Best spot for a date?</Card.Subtitle>
                        <br></br>
                        <Card.Text>This little gem could be described as classy yet cosy. Low lighting and plush interior design evokes a feeling of comfort, whilst the bespoke service offering and attention to detail in every drink brings forth a higher level of class. The complimentary drink on arrival doesn't hurt either.</Card.Text>
                    </Card>
                </Col>

                <Row className='separator-row' />
                <Col className='venue-page-column'>
                    <Card className='venue-page-card'>
                        <Card.Title>Whitelocks Ale House</Card.Title>
                        <Card.Subtitle>Some things just get better with age.</Card.Subtitle>
                        <br></br>
                        <Card.Text>The oldest pub in Leeds. Boasts soft seats, brass topped tables and a warm interior.  Keep in mind there’s not a lot of tables going so get there quick!</Card.Text>
                    </Card>
                </Col>
                <Row className='separator-row' />
                <Col className='venue-page-column'>
                    <Card className='venue-page-card'>
                        <Card.Title>Crowd of Favours</Card.Title>
                        <Card.Subtitle>Did someone say exposed brick?</Card.Subtitle>
                        <br></br>
                        <Card.Text>Tucked away tables & cosy armchairs are spread throughout this neat mix of art adorned and exposed brick walls. Making Crowd of Favours a popular favourite.</Card.Text>
                    </Card>
                </Col>
                <Row className='separator-row' />
                <Col className='venue-page-column'>
                    <Card className='venue-page-card'>
                        <Card.Title>The Maven</Card.Title>
                        <Card.Subtitle>Shhh, it’s a secret.</Card.Subtitle>
                        <br></br>
                        <Card.Text>One of the more difficult spots to find in Leeds but well worth the hunt. Low lighting, plush interior & secluded seating make you want the night to never end.</Card.Text>
                    </Card>
                </Col>
                <Row className='separator-row' />
                <Col className='venue-page-column'>
                    <Card className='venue-page-card'>
                        <Card.Title>Outlaws Yacht Club</Card.Title>
                        <Card.Subtitle>Couches, just allll the couches.</Card.Subtitle>
                        <br></br>
                        <Card.Text>Comfy seating to sink in to or cuddle up, board games and quiz nights. A down to earth and easy-going setting.</Card.Text>
                    </Card>
                </Col>
            </Container >
        </div>
    )
}
