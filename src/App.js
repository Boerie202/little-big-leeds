import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//React Imports
// import { Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Page Imports
import Nav from './pages/nav.js'; //------------Navigation bar import
import HomePage from './pages/home.js';
import Drinks from './pages/Drinks.js'; //------Drinks landing page import
import Feedback from './pages/feedback.js';

//Venue Page Imports: Drinks
import DrinksCosy from './pages/drinks_venues_cosy'
import DrinksClassy from './pages/drinks_venues_classy'
import DrinksBar from './pages/drinks_venues_bar'
import DrinksPub from './pages/drinks_venues_pub'



function App() {
  return (
    <div className='App'>
      <Router>

        <Nav />

        {/*----------------------------------------------Page Routing------------------------------------------------------*/}
        <Routes>
          <Route path='/' exact element={<HomePage />} />

          {/* Routes to the drinks landing page and venue sub-pages */}
          <Route path='/drinks' exact element={<Drinks />} />
          <Route path='/feedback' exact element={<Feedback />} />
          <Route path='/drinks_venues_cosy' exact element={<DrinksCosy />} />
          <Route path='/drinks_venues_classy' exact element={<DrinksClassy />} />
          <Route path='/drinks_venues_bar' exact element={<DrinksBar />}></Route>
          <Route path='/drinks_venues_pub' exact element={<DrinksPub />}></Route>



          {/* <Route path='/Food' exact element={<Food />} /> */}
          {/* <Route path='/FoodandDrinks' exact element={<foodAndDrinks />} /> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
