import React from 'react';
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

            <div className='d-flex align-items-center justify-content-center venue-page row'>

                {Venues && Venues.map((venue) => {
                    return (
                        <div key = {venue.id} className="venue">
                            
                                <h2> {venue.name} </h2>
                                <h6> {venue.address} </h6>
                           
                                 <h3>Perks</h3>
                                    <p className=' !important p1 d-flex align-items-center justify-content-center'> {venue.perks[0]} </p>
                                    <p className='p2'> {venue.perks[1]} </p>
                                    <p className='p3'> {venue.perks[2]} </p>
                       
                            <li className='additional-info-list'>Gallery</li>
                                    <li className='coming-soon'>Coming Soon</li>
                            <li className='additional-info-list'>Menu</li>
                                    <li className='coming-soon'>Coming Soon</li>
                        
                        </div>
                    );
                })}
            </div>
        </div>
        
    );
}

export default DrinksCosy;