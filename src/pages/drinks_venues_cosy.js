import React from 'react';


import './AllPages.css'

//Data Imports
import { CosyDrinksData } from './data.js';



function DrinksCosy() {
    return (
        <div className='page-container'>
            <h2 className='page-title'>
                Cosy Vibes
            </h2>

            <CosyDrinksData />

        </div>

    );
}

export default DrinksCosy;