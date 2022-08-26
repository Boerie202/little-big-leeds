import React from 'react';


import './AllPages.css'

//Data Imports
import { ClassyDrinksData } from './data.js';



function DrinksClassy() {
    return (
        <div className='page-container'>
            <h2 className='page-title'>
                Classy Vibes
            </h2>

            <ClassyDrinksData />

        </div>

    );
}

export default DrinksClassy;