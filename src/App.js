import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

//React Imports
// import { Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Page Imports
import Nav from './pages/nav.js'//------------Navigation bar import
import Drinks from './pages/Drinks.js'//------Drinks landing page import

//Venue Page Imports: Drinks
import DrinksCosy from './pages/drinks_venues_cosy'



function App() {
  return (
    <div className='App'>
      <Router>

        <Nav />

        {/*-------------page routing----------------*/}
        <Routes>
          {/* <Route path='/' exact element={<Home />} /> */}
          <Route path='/Drinks' exact element={<Drinks />} />
          <Route path='/drinks_venues_cosy' exact element={<DrinksCosy />} />
          {/* <Route path='/Food' exact element={<Food />} /> */}
          {/* <Route path='/FoodandDrinks' exact element={<foodAndDrinks />} /> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
