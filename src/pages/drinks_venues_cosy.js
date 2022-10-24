import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

import './AllPages.css'

//Data Imports
import { CosyDrinksData } from './data.js';

//JSON import
import Venues from './venue_data';



function DrinksCosy() {
    return (
        <div className='page-container'>
            <h2 className='page-title'>
                Cosy Vibes
            </h2>

            <Row className='d-flex align-items-center justify-content-center venue-page'>
                {Venues.map((data, key) => {
                    return (
                        <h2 key={key}> {data.name} </h2>,
                        <h6 key={key}> {data.address} </h6>
                    );
                })}
            </Row>
            {/* <CosyDrinksData /> */}


        </div>

    );
}

export default DrinksCosy;