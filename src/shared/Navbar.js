import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { render } from "react-dom";
import React from "react";
import Latest from "../components/Latest_trek";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navbar.css";
import { Route} from "react-router";
import { Link } from 'react-router-dom';

function Header() {
  // return (
  //   <Navbar bg="light" expand="lg">
  //     <Container>
  //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link href="/#home">Home</Nav.Link>
  //           <Nav.Link href="/about">Link</Nav.Link>
  //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //             <NavDropdown.Item href="contact">Action</NavDropdown.Item>
  //             <NavDropdown.Item href="#action/3.2">
  //               Another action
  //             </NavDropdown.Item>
  //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //             <NavDropdown.Divider />
  //             <NavDropdown.Item href="#action/3.4">
  //               Separated link
  //             </NavDropdown.Item>
  //           </NavDropdown>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );

  return (
    <div className="main_banner sticky-top">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <Link className="navbar-brand" href="/">
          LOGO HERE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Dashboard</Link>
            <Link to="/" className="nav-item nav-link">Admin</Link>
        
            
            {/* <Link to="/home" className="nav-item nav-link">Home</Link>
            <Link to="/home" className="nav-item nav-link">Home</Link>  
            <Link to="/home" className="nav-item nav-link">Home</Link>
            <Link to="/home" className="nav-item nav-link">Home</Link> */}
          </div>
        </div>
      </nav>
      
      <Route path="/me" exact render={() => <h1>hello</h1> } />
      <Route path="/home" exact component={Latest} />
    </div>
    
  );

}

export default Header;

