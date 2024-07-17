import React from 'react'
import {Container, Nav, Navbar, Row,Form,Button, Col} from 'react-bootstrap'
const Category = () => {
  return (
    <Row>
      <Col  className='d-flex justify-content-center m-4'>
<button className='btn mx-2' style={{border: '1px solid #b125'}}>الكل</button>

<button className='btn mx-2' style={{border: '1px solid #b125'}}>أفطار</button>
<button className='btn mx-2' style={{border: '1px solid #b125'}}>غداء</button>

      </Col>
    </Row>
  )
}

export default Category
