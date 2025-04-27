import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function RedBusNavBar() {
  const location = useLocation();
  const isUserDetailsPage = location.pathname === '/user-details';
  
  const navigate = useNavigate();

  const handleUserDetails = () => {
    navigate('/user-details');
  };
  if (isUserDetailsPage) return null; //  Hide the whole navbar

  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <img src='https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png' alt='RedBus_Img'/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Bus Tickets</Nav.Link>
            
            
          </Nav>
          <Nav>
          <NavDropdown title={<FaUser style={{fontSize:16}}/>} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item onClick={handleUserDetails}>
              Sign In / Sign Out
                </NavDropdown.Item>
              </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RedBusNavBar;