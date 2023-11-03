import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import Bot from "../assets/Bot.png"

function Signup(){
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //image states :
    const [img, setImg] = useState(null);
    const [uploadingImg, setUploadingImg] = useState(false);
    const [preview, setPreview] = useState(null);

    function validateImg(e){
      console.log("ValidateImg entered");
      console.log(e);
      const file = e.target.files[0];
      console.log(file);
      if(file.size >= 1048576){
        return alert('Image is too big!');
      }
      else{
        setImg(file);
        setUploadingImg(true);
        setPreview(URL.createObjectURL(file));
      }
    }

    function handleSubmit(e){
      e.preventDefault();

      if(!img){
        alert("Upload your profile picture");
      }
      else{
        
      }
    }


  return (
    <Container>
      <Row>
        <Col md={6} className='signup__bg'></Col>
        <Col md={6} className='d-flex align-items-start justify-content-center flex-column display-7 gap-5'>
          <Form style={{ width: "100%", maxWidth: 500 }} onSubmit={handleSubmit} >
            {/* <h2 className='signup__header'>Your account is being <span className='signup__header__span'>CREATED ⚒️</span></h2> */}
            <div className='mb-3 d-flex align-items-center justify-content-center flex-column'>
              <img src={ preview || Bot} alt="BOT" width={150} height={150} style={{borderRadius:"50%", objectFit:"cover", border:"5px solid black"}}/>
              <label htmlFor="image-upload" className='image__upload__label'>
                <i className='fas fa-xl fa-plus-circle add-picture-icon'></i>
              </label>
              <input type="file" id='image-upload' hidden accept='image/png, image/jpeg, image/jpg'  onChange={validateImg}/>
            </div>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='signup__label'>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name"  onChange={(e) => setName(e.target.value)} value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='signup__label'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='signup__label'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}  />
            </Form.Group>
            <Button variant="primary" type="submit">
              SIGNUP
            </Button>
            <div>
              <p className='text-center'> Already have an Account? <Link to="/login" >Login</Link></p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup