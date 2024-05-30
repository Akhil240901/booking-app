import React from 'react'
import {Form, Input} from 'antd';
import { Link } from 'react-router-dom';
import "../styles/register.css";
const Register = () => {
  const onFinishHandler=(value)=>{
        console.log(value);
  }
  return (
    <>
      <div className='form-container'>
           <Form layout='vertical' onFinish={onFinishHandler} className='card p-4 form-style'>
               <h1 className='text-center'>Register</h1>
               <Form.Item label="Name" name="name">
                   <Input type='text' required/>
               </Form.Item>
               <Form.Item label="Email" name="email">
                   <Input type='email' required/>
               </Form.Item>
               <Form.Item label="Password" name="password">
                   <Input type='password' required/>
               </Form.Item>
               <Link to='/login' className='m-2'>
                Already registered user,login here?
               </Link>
               <button className='btn btn-primary '>Register</button>
           </Form>
      </div>
    </>
  )
}

export default Register