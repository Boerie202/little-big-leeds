import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//CSS Imports
import { Col, Row } from 'react-bootstrap';
import './AllPages.css'



function Feedback (){
    return(
        <div className='page-container'>
            <h2 className='page-title'>
                Feedback
            </h2>
            

                <div className='d-flex align-items-center justify-content-center'>
                    <Row >
                        <Col className='feedback'>
                            <h2>E-mail</h2>
                            <button onClick={() => window.open("mailto:littlebigleeds@gmail.com?")}>littlebigleeds@gmail.com</button>
                        </Col>
                    </Row>
                </div>

                <div>
                    <p className='feedback-additional'>
                        Please feel free to submit feedback on site functionality and the information provided. <br />
                        LittleBigLeeds is constantly evolving and always looking to improve. All feedback will be taken into consideration.
                    </p>
                </div>

        </div>
    );
}

export default Feedback;