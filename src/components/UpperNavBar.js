import React from 'react'
import {Container, Nav, Navbar, Row,Form,Button} from 'react-bootstrap'
const UpperNavBar = () => {
  return (
    <Row>
      <Navbar expand="lg" className="bg-body-tertiary" bg='dark' variant='dark'>
      <Container >
        <Navbar.Brand href="#">مطعم جديد </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="..ابحث"
              placeholder="بحث"
              className="me-2"
              aria-label="بحث"
            />
            <button className='btn-search mx-2' >بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Row>
  )
}

export default UpperNavBar
