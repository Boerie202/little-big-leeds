import React from 'react';
// import ReactDOM from 'react-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//css
import '././AllPages.css'

//Images
import Logo from '../images/logo-white.svg'


function Nav() {
    return (
        <nav className='nav-header'>

            <Container fluid>
                <Row>
                    <Col className='nav-column-logo' > <img src={Logo} height="100" width="100" className="Logo" alt='logo'/> </Col>
                    <Col className='nav-column'> <h1 className='title'>LittleBigLeeds</h1> </Col>
                    <Col className='nav-column'> </Col>
                </Row>

                <Row className='navigation-row'>
                    <Col className='nav-list' > <Link to='/' style={{ textDecoration: 'none', textDecorationColor: '#282c34' }} > <li className='navList' > Home </li></Link> </Col>
                    <Col className='nav-list' > <Link to='/drinks' style={{ textDecoration: 'none', textDecorationColor: '#282c34' }} > <li> Drinks </li></Link> </Col>
                    <Col className='nav-list' > <Link to='/feedback' style={{ textDecoration: 'none', textDecorationColor: '#282c34' }} > <li> Feedback </li></Link> </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Nav;
