import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';


//Venue Template

{/* <Row className='d-flex align-items-center justify-content-center'>
<Col><h2>Title</h2> <p>Subtitle</p><li>Address</li></Col>
<Col><h3>Perks</h3><li>Perk1</li> <li>Perk2</li><li>Perk3</li></Col>
<Col className='additional-info-list'><li>Gallery</li><li>Menu</li></Col>
</Row> */}


//Data for the Cosy Vibes Page
export function CosyDrinksData() {
    return (


        <Container fluid >

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>Blind Tyger</h2> <p>Great spot for a date</p><li>5 Cross Belgrave St, Leeds LS2 8JP</li></Col>
                <Col><h3>Perks</h3><li>Complimentary drink on arrival</li> <li>Low lighting, speak easy setting</li><li>Great cocktail list</li></Col>
                <Col className='additional-info-list'><li>Gallery</li><li>Menu</li></Col>
            </Row>

            <Row className='separator-row' />

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>Whitelocks Ale House</h2> <p>Some things just get better with age</p><li>Turk's Head Yard, Leeds LS1 6HB</li></Col>
                <Col><h3>Perks</h3><li>Historic atmosphere</li> <li>Outdoor seating</li><li>Warm in winter</li></Col>
                <Col className='additional-info-list'><li>Gallery</li><li>Menu</li></Col>
            </Row>

            <Row className='separator-row' />

        </Container >


    )
}
