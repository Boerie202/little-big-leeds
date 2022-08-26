import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';


//-----------------------------------------------------Venue Template-------------------------------------------------------------------

{/* 
<Container fluid >
<Row className='d-flex align-items-center justify-content-center venue-page'>
<Col><h2>Title</h2><h6>Address</h6></Col>
<Col><h3>Perks</h3>
    <p className='p1'>Perk1</p><br />
    <p className='p2'>Perk2</p><br />
    <p className='p3'>Perk3</p>
</Col>
<Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
</Row>
<Row className='separator-row' /> 
</Container>
*/}


//-------------------------------------------------Data for the Cosy Vibes page---------------------------------------------------------
export function CosyDrinksData() {
    return (


        <Container fluid >

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>Blind Tyger</h2><h6>5 Cross Belgrave St, Leeds LS2 8JP</h6></Col>
                <Col><h3>Perks</h3>
                    <p className='p1'>Complimentary drink on arrival</p><br />
                    <p className='p2'>Low lighting, speak easy setting</p><br />
                    <p className='p3'>Great cocktail list</p>
                </Col>
                <Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
            </Row>

            <Row className='separator-row' />

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>Whitelocks</h2><h6>Turk's Head Yard, Leeds LS1 6HB</h6></Col>
                <Col><h3>Perks</h3>
                    <p className='p1'>Historic atmosphere</p><br />
                    <p className='p2'>Outdoor seating</p><br />
                    <p className='p3'>Warm in winter</p>
                </Col>
                <Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
            </Row>

            <Row className='separator-row' />

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>Crowd of Favours</h2><h6>4-12 Harper St, Leeds LS2 7EA</h6></Col>
                <Col><h3>Perks</h3>
                    <p className='p1'>Lots of seating</p><br />
                    <p className='p2'>Gin deals</p><br />
                    <p className='p3'>Cosy chairs</p>
                </Col>
                <Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
            </Row>

            <Row className='separator-row' />

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>The Maven</h2><h6>1 Call Ln, Leeds LS1 7DH</h6></Col>
                <Col><h3>Perks</h3>
                    <p className='p1'>Low lighting</p><br />
                    <p className='p2'>Large drinks list</p><br />
                    <p className='p3'>Private</p>
                </Col>
                <Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
            </Row>

            <Row className='separator-row' />

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>Outlaws Yacht Club</h2><h6>38 New York St, Leeds LS2 7DY</h6></Col>
                <Col><h3>Perks</h3>
                    <p className='p1'>Very comfy seating</p><br />
                    <p className='p2'>Quiz night</p><br />
                    <p className='p3'>Trendy interior</p>
                </Col>
                <Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
            </Row>

            <Row className='separator-row' />

        </Container >


    )
}

//-------------------------------------------------Data for the Fancy Vibes page--------------------------------------------------------
export function ClassyDrinksData() {

    return (

        <Container fluid >

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>The Alchemist</h2><h6>Yorkshire House, Greek St, Leeds LS1 5SH</h6></Col>
                <Col><h3>Perks</h3>
                    <p className='p1'>Interesting drinks</p><br />
                    <p className='p2'>Trim interior</p><br />
                    <p className='p3'>Friendly staff</p>
                </Col>
                <Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
            </Row>

            <Row className='separator-row' />

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                <Col><h2>Angelica</h2><h6>Level 6, Trinity, 70 Boar Ln, Leeds LS1 6HW</h6></Col>
                <Col><h3>Perks</h3>
                    <p className='p1'>Great views</p><br />
                    <p className='p2'>Outdoor terrace</p><br />
                    <p className='p3'>Attention to detail</p>
                </Col>
                <Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
            </Row>


        </Container>
    )
}