import { Form, Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import FormikControl from './Inputs/FormikControl';
import { LoginSchema } from './Schemas/LoginSchema';

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (values, action) => {
    console.log('Form data', values)
    action.resetForm();
  }
  return (
    <>
      <button className='btn btn-success mt-3 mx-3'>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
          Registration
        </Link>
      </button>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh', width: '98vw' }}>
        <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={onSubmit} >
          {
            (formik) => {
              return (
                <Form className='w-25'>
                  <FormikControl control='input' type='email' name='email' label='Email' />
                  <FormikControl control='input' type='password' name='password' label='Password' />
                  <button type='submit' className='btn btn-dark my-2' disabled={!formik.isValid}>Submit</button>
                </Form>
              )
            }
          }
        </Formik>
      </div>
    </>
  )
}
