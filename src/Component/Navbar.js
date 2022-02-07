import React,{useState} from 'react';
import { Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap';
import Navlogo from '../Images/COVIDLogo.png'
import { Fade as Hamburger } from 'hamburger-react'


const NavbarBackground = {
    backgroundColor:"#1788f0",
}
const Navbars = () => {
  const [isOpen, setOpen] = useState(false)
 
  return <Navbar collapseOnSelect expand="lg"  style={NavbarBackground} variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img className='navlogo' src={Navlogo} alt="" /></Navbar.Brand>
    <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
    <Navbar.Collapse id="responsive-navbar-nav" className={`${isOpen ? "show" : ""}`}>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">News</Nav.Link>
        <Nav.Link href="#pricing">Data</Nav.Link>
        <Nav.Link href="#pricing">Cluster</Nav.Link>
        <Nav.Link href="#pricing">Visualization</Nav.Link>
      </Nav>
      <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="secondary">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Container>
  </Navbar>;
};

export default Navbars;
