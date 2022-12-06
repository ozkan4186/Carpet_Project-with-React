import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function BasicExample() {
  return (
    <Navbar bg="info" expand="lg"  >
      <Container>
         <Nav.Link href="#home">Anasayfa</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#link">İletişim</Nav.Link>
            <Nav.Link href="#link">İptal,iade Koşulları ve Gizlilik</Nav.Link>
            <Nav.Link href="#link">Hizmet Sözleşmesi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default BasicExample;
