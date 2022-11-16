import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

import './AllPages.css'

//Data Imports
// import { CosyDrinksData } from './data.js';

//JSON import
import Venues from './venue_data';


function DrinksCosy () {
    return (
        <div className='page-container fluid'>
            <h2 className='page-title'>
                Cosy Vibes
            </h2>

            <Row className='d-flex align-items-center justify-content-center venue-page'>

                {Venues && Venues.map((venue) => {
                    return (
                        <div key = {venue.id}>
                    
                                <h2> {venue.name} </h2>
                                <h6> {venue.address} </h6>
                                
                                 <h3>Perks</h3>
                                    <p className='p1'> {venue.perks[0]} </p> <br />
                                    <p className='p2'> {venue.perks[1]} </p> <br />
                                    <p className='p3'> {venue.perks[2]} </p>
                            
                            <Col className='additional-info-list'><li>Gallery</li><li className='coming-soon'>Coming Soon</li><li>Menu</li><li className='coming-soon'>Coming Soon</li></Col>
                        
                        </div>
                    );
                })}
            </Row>
        </div>
        
    );
}

export default DrinksCosy;