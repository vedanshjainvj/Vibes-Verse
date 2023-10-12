// Imports from react
import { useState,useRef } from 'react';
// Imports from react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Toastify is imported to generate toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Emailjs is used to facilitate Email feature
import emailjs from '@emailjs/browser';
// Importing components from folder structure
import Footer from './Footer';

function Contact() {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_el3bih6', 'template_yugw37x', form.current, 'EhRjdbvxa7IhUWc2V')
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) {
          // Email sent successfully
          notify(); // Show success message
        } else {
          console.log('Email not sent successfully');
          pleaseFill(); // Show an error message or take other appropriate actions
        }
      })
      .catch((error) => {
        console.log('Email not sent successfully:', error);
        pleaseFill(); // Show an error message or take other appropriate actions
      });
  };
  
    const notify = () => toast.success('Thanks for contacting us !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    const pleaseFill = () => toast.error('Please fill the data', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    message: ""

  })

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuserData({
      ...userData,[name]:value
    })
  }
  const submitData = async (e) => {
    e.preventDefault();
    const {name,email,mobile,message} = userData
    if (name&&email&&mobile&&message){
    const res = fetch('https://vibesversedata-default-rtdb.firebaseio.com/userDataRecords.json',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,mobile,message
      })
    })
    if(res) {
      setuserData({
        name: "",
    email: "",
    mobile: "",
    password: "",
    message: ""
      })
      notify()
    } else {
      pleaseFill()
    } 
  } else {
    pleaseFill()
  }
  }

  return (
    <>
    <Form method='post' ref={form} onSubmit={sendEmail} className='px-20 py-10'>
      <Form.Group className="mb-3 bg-gray-800" controlId="formBasicName">
        <Form.Label className='bg-gray-800 pl-2 pt-2 text-lg'>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='name'
        value={userData.name}
        onChange={postUserData} />
      </Form.Group>
      <Form.Group className="mb-3  bg-gray-800" controlId="formBasicEmail">
        <Form.Label className='bg-gray-800 pl-2 pt-2 text-lg'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'
        value={userData.email}
        onChange={postUserData} />
      </Form.Group>
      <Form.Group className="mb-3  bg-gray-800" controlId="formBasicMobile">
        <Form.Label className='bg-gray-800 pl-2 pt-2 text-lg'>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile Number" name='mobile'
        value={userData.mobile}
        onChange={postUserData} />
      </Form.Group>

      <Form.Group className="mb-3  bg-gray-800" controlId="formBasicPassword">
        <Form.Label className='bg-gray-800 pl-2 pt-2 text-lg'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'
        value={userData.password}
        onChange={postUserData} />
      </Form.Group>
      <Form.Group className="mb-3  bg-gray-800" controlId="formBasicPassword">
        <Form.Label className='bg-gray-800 pl-2 pt-2 text-lg'>Message</Form.Label>
        <Form.Control type="text" placeholder="Password" name='message'
        value={userData.message}
        onChange={postUserData} />
      </Form.Group>
      <Form.Group className="mb-3  bg-gray-800" controlId="formBasicCheckbox">
        <Form.Check  type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={submitData} variant="primary" type="submit">
        Submit
        <ToastContainer />
      </Button>
    </Form>
    <Footer></Footer>
    </>
  );
}

export default Contact;