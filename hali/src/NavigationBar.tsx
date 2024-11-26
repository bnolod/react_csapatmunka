import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';

export const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hali</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/post-listazas">Posztok listázva</Nav.Link>
            <Nav.Link as={Link} to="/post-hozzaadas">Poszt hozzáadása</Nav.Link>
            <Nav.Link as={Link} to="/post-torles">Poszt törlése</Nav.Link>
            <Nav.Link as={Link} to="/post-szerkesztes">Poszt szerkesztése</Nav.Link>
            <Nav.Link as={Link} to="/post-kereses">Poszt keresése</Nav.Link>
            <Nav.Link as={Link} to="/post-rendezes">Poszt rendezése</Nav.Link>
            <Nav.Link as={Link} to="/post-pagination">Poszt lapozása</Nav.Link>
            <Nav.Link as={Link} to="/post-novekvocsokkeno">Növekvő/csökkenő posztok</Nav.Link>
            <Nav.Link as={Link} to="/post-togglesw">Toggle Switch posztok</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
