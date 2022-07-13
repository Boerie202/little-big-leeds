import { Col, Row } from 'react-bootstrap';
import '././nav.css'

//Images
import Logo from '../images/logo-white.svg'

function Nav() {
    return (
        <nav className='Nav-header'>


            <Row>
                <Col>
                    <img src={Logo} height="100" width="100" className="Logo" />
                </Col>

                <Col>
                    <h1>LittleBigLeeds</h1>
                </Col>

            </Row>


        </nav>
    );
}

export default Nav;
