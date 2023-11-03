import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <Container>
      <Row>
        <Col md={6} className='d-flex align-items-start justify-content-center flex-column display-7 gap-5 '>
          <h2 className='login__header'>Start chatting with your <span className='login__header__span'>old friend</span></h2>
          <Form style={{ width:"100%", maxWidth:500 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='login__label'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='login__label'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
            <div>
              <p className='text-center'> Don't have an Account? <Link to="/signup" >Sign-Up</Link></p>
            </div>
          </Form>
        </Col>
        <Col md={6} className='login__bg'></Col>
      </Row>
    </Container>
  )
}

export default Login


