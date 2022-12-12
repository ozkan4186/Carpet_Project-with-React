import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
function BasicExample() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <NavLink className="nav"  to="/home">Anasayfa</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link to="#home">Home</Nav.Link> */}
            <NavLink className="nav" to="/communication">İletişim</NavLink>
            <NavLink className="nav" to="/return">İptal,iade Koşulları ve Gizlilik</NavLink>
            <NavLink  className="nav" to="/hizmet">Hizmet Sözleşmesi</NavLink>
          </Nav>
          <div>{currentUser.email && currentUser.displayName}</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default BasicExample;
