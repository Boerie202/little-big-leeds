import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//React Imports
// import { Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Page Imports
import Nav from './pages/nav.js'//------------Navigation bar import
import Drinks from './pages/Drinks.js'//------Drinks landing page import

//Venue Page Imports: Drinks
import DrinksCosy from './pages/drinks_venues_cosy'
import DrinksClassy from './pages/drinks_venues_classy'



function App() {
  return (
    <div className='App'>
      <Router>

        <Nav />

        {/*----------------------------------------------Page Routing------------------------------------------------------*/}
        <Routes>
          {/* <Route path='/' exact element={<Home />} /> */}

          {/* Routes to the drinks landing page and venue sub-pages */}
          <Route path='/Drinks' exact element={<Drinks />} />
          <Route path='/drinks_venues_cosy' exact element={<DrinksCosy />} />
          <Route path='/drinks_venues_classy' exact element={<DrinksClassy />} />



          {/* <Route path='/Food' exact element={<Food />} /> */}
          {/* <Route path='/FoodandDrinks' exact element={<foodAndDrinks />} /> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
