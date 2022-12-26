import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './AllPages.css'

//Data Imports
import barVenues from './venue_data_bar';



function DrinksBar() {
    return (
        <div className='page-container'>
            <h2 className='page-title'>
                Bar Vibes
            </h2>

            <div className='d-flex align-items-center justify-content-center venue-page row'>

                {barVenues && barVenues.map((bar) => {
                    return (
                        <div key = {bar.id} className="venue">
                            
                                <h2> {bar.name} </h2>
                                <h6> {bar.address} </h6>

                            <div className='perks-section-all'>
                                 <h3>Perks</h3>
                                    <p className='p1'> {bar.perks[0]} </p>
                                    <p className='p2'> {bar.perks[1]} </p>
                                    <p className='p3'> {bar.perks[2]} </p>
                            </div>
                            <li className='additional-info-list' onClick={() => window.open( bar.website )}>Website</li>
                        
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DrinksBar;