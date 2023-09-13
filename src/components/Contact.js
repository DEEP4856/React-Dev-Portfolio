import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import contactimg from "../assets/img/contactImg.svg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { DotenvConfigOptions } from "../";






export const Contact =()=>{


   const[name,setName]=useState('')
   const[email,setEmail]=useState('')
   


    const form = useRef();

    // const formdetails={
    //     Name:'DEEP',
    //     email:'',
    //     message:''

    // }

   



    //  const onformupdate=(catagory,value)=>{
    //     setDetails({
    //         ...details,
    //         [catagory]:value
    //     })
    //  }

     const sendEmail =(e, value)=>{
        e.preventDefault();

        if (name.length==0||email.length==0) {
            alert("Name and Email cannot be empty")
        }else{
         
        console.log(value)

        emailjs.sendForm ("service_xn9cpil","template_v53jj0z" , form.current,"JmYLagxcOxqek5Q6j")
        .then((result) => {
            console.log(result.text);
            // after sucessfull submit
            if (result.status>199 && result.status<300) {
                
                alert("Message Sent Sucessfully")
            }
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    
    }











     };


  return(
    <section className="contact" id="contact">
        <Container>
         <div className="contact-box"   >
           <Row className="aling-items-center">
           <Col md={6}>
            <img src={contactImg} alt="contact-image"/>  
            </Col>
        <Col md={6}>
        <h1 className="get-in-touch">Get In Touch</h1>
        <Form  ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        {/* onChange={(e)=> onformupdate('Name',e.target.value)} */}
        <Form.Control type="text" placeholder="Type your Name"  name="user_name" onChange={(e)=> setName(e.target.value)}   />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  placeholder="name@example.com"  name="user_email"  onChange={(e)=> setEmail(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea"  rows={3} name="message"   />
        </Form.Group>
        <Button  className="submit" variant="primary" type="submit" >
        SEND
        </Button>
        </Form>
        </Col>



           </Row>
           </div>
        </Container>
    </section>
  )
}