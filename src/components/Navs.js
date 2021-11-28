import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from "react-bootstrap"

import logo from '../imgs/logo.png';
import './nav.css'
export default function Navs() {
 return(
  <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    <img src={logo} className="logo" alt="logo azapfy" />
    </Container>
  </Navbar>
 
</>
 )
}