import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './AllPages.css'

//Data Imports
// import { CosyDrinksData } from './data.js';

//JSON import
import cosyVenues from './venue_data_cosy';


function DrinksCosy () {
    return (
        <div className='page-container'>
            <h2 className='page-title'> Cosy Vibes </h2>

            <div className='d-flex align-items-center justify-content-center venue-page row'>

                {cosyVenues && cosyVenues.map((cosy) => {
                    return (
                        <div key = {cosy.id} className="venue">
                            
                                <h2> {cosy.name} </h2>
                                <iframe src={cosy.address} title="map"></iframe>


                            <div className='perks-section-all'>
                                 <h3>Perks</h3>
                                    <p className='p1'> {cosy.perks[0]} </p>
                                    <p className='p2'> {cosy.perks[1]} </p>
                                    <p className='p3'> {cosy.perks[2]} </p>
                            </div>
                            <li className='additional-info-list' onClick={() => window.open( cosy.website )}>(Click for Website)</li>
                        
                        </div>
                    );
                })}
            </div>
        </div>
        
    );
}

export default DrinksCosy;