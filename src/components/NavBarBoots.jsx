import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-bg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/img/lYYrYy.png"
            alt="Logo"
            width="100%"
            height="100%"
            className="d-inline-block align-top"
            style={{ marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
  <Nav>
    <Nav.Link href="" style={{ color: 'white' }}>Pacientes</Nav.Link>
    <Nav.Link eventKey={2} href="ReportPage" style={{ color: 'white' }}>
      Soporte
    </Nav.Link>
  </Nav>

  <Nav className="ms-auto">
    <Nav.Link href="#salir" style={{ color: 'white', backgroundColor: '#0076C0', borderRadius: '5px', marginLeft: '10px', padding: '5px 15px' }}>
      Salir
    </Nav.Link>
    <Nav.Link eventKey={2} href="#" style={{ color: 'white' }}>
      <img
        src="/img/user.png"
        alt="user"
        width="100%"
        height="100%"
        className="d-inline-block align-top"
        style={{ marginRight: '10px' }}
      />
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;