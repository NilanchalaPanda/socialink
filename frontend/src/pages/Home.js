import React from 'react'
import {Row, Col, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./Home.css"

function Home() {
  return (
    <Row>
      <Col>
        <div>
          <h1>Share the information with your world</h1>
          <p>Chat helps to share love</p>
          <LinkContainer to="/chat">
            <Button variant='success' > Get Started <i className='fas fa-comments home-message-icon' /> </Button>
          </LinkContainer>
        </div>
      </Col>
    </Row>
  )
}

export default Home