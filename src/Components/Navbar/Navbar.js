import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import flagicon  from "../../figures/red-flag.png"
import searchicon  from "../../figures/search.png"

const Navigationbar = () => {
    return (
        <Navbar expand="lg"className="w-50 mx-auto d-flex justify-content-center align-items-center">
        <Container fluid>
          <Navbar.Brand href="/">
            <img className='img-fluid w-25' src={flagicon} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='mx-2' href="#action1">Your Kits</Nav.Link>
              <Nav.Link className='mx-2' href="#action2"><img style={{width: '20px'}} className='img-fluid' src={searchicon} alt="" /></Nav.Link>
              
              <Nav.Link className='mx-2' href="#" disabled>
                Icons
              </Nav.Link>
              <Nav.Link className='mx-2' href="#" disabled>
                Docs
              </Nav.Link>
              <Nav.Link className='mx-2' href="#" disabled>
                Plans
              </Nav.Link>
              <Nav.Link className='mx-2' href="#" disabled>
                Support
              </Nav.Link>
              <Nav.Link className='mx-2' href="#" disabled>
                Podcast
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigationbar;