import React from 'react'
import {Container, Nav, Navbar, Row,Form,Button, Col} from 'react-bootstrap'
const Category = ({func}) => {
  return (
    <Row>
      <Col  className='d-flex justify-content-center m-4'>
<button onClick={()=>func('الكل')} className='btn mx-2' style={{border: '1px solid #b125'}}>الكل</button>

<button onClick={()=>func('فطار')} className='btn mx-2' style={{border: '1px solid #b125'}}>أفطار</button>
<button onClick={()=>func('غدا')} className='btn mx-2' style={{border: '1px solid #b125'}}>غداء</button>
<button onClick={()=>func('عشاء')} className='btn mx-2' style={{border: '1px solid #b125'}}>عشاء</button>
      </Col>
    </Row>
  )
}

export default Category
