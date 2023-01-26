import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './AllPages.css'

//Data Imports
import pubVenues from './venue_data_pub';



function DrinksPub() {
    return (
        <div className='page-container'>
            <h2 className='page-title'>
                Pub Vibes
            </h2>

            <div className='d-flex align-items-center justify-content-center venue-page row'>

                {pubVenues && pubVenues.map((pub) => {
                    return (
                        <div key = {pub.id} className="venue">
                            
                                <h2> {pub.name} </h2>
                                <h6> {pub.address} </h6>

                            <div className='perks-section-all'>
                                 <h3>Perks</h3>
                                    <p className='p1'> {pub.perks[0]} </p>
                                    <p className='p2'> {pub.perks[1]} </p>
                                    <p className='p3'> {pub.perks[2]} </p>
                            </div>
                            <li className='additional-info-list' onClick={() => window.open( pub.website )}>(Click for Website)</li>
                        
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DrinksPub;