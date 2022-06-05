import { Col, Row } from 'react-bootstrap';
import '././nav.css'

//Images
import Logo from '../images/logo-white.svg'

function Nav() {
    return (
        <nav className="Nav-header">


            <Row>

                <Col>
                    <h1>LittleBigLeeds</h1>
                </Col>

                <Col>
                    <img src={Logo} height="100" width="100" className="Logo" />
                </Col>
            </Row>


        </nav>
    );
}

export default Nav;
