import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './AllPages.css'

//Data Imports
import classyVenues from './venue_data_classy';



function DrinksClassy() {
    return (
        <div className='page-container'>
            <h2 className='page-title'>
                Classy Vibes
            </h2>

            <div className='d-flex align-items-center justify-content-center venue-page row'>

                {classyVenues && classyVenues.map((classy) => {
                    return (
                        <div key = {classy.id} className="venue">
                            
                                <h2> {classy.name} </h2>
                                <h6> {classy.address} </h6>

                            <div className='perks-section-all'>
                                 <h3>Perks</h3>
                                    <p className='p1'> {classy.perks[0]} </p>
                                    <p className='p2'> {classy.perks[1]} </p>
                                    <p className='p3'> {classy.perks[2]} </p>
                            </div>
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

export default DrinksClassy;