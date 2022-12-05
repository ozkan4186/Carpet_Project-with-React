import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
const navbar=()=> {
  return (
    <Navbar>
      <Container>
        <Link to="/home">Anasayfa</Link>
        <Link to="/communication">İletişim</Link>
        <Link to="/iade">İptal,İade koşulları ve Gizlilik</Link>
        <Link to="/hizmet">Hizmet Sözleşmesi</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;