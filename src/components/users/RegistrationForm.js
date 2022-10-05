import React from 'react'
import { Formik, Form } from 'formik'
import RegistrationSchema from './Schemas/RegistrationSchema'
import FormikControl from './Inputs/FormikControl'
import { Link } from 'react-router-dom'

export default function RegistrationForm() {

    const options = [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
        { key: 'other', value: 'Other' },
    ]

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        phone: '',
        dob: '',
    }

    const onSubmit = (values, action) => {
        console.log('Form data', values)
        action.resetForm();
    }
    return (
        <>
            <button className='btn btn-success mt-3 mx-3'>
                <Link to='/login' style={{color:'white', textDecoration:'none'}}>
                Login
                </Link>
            </button>
        <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh', width: '98vw' }}>
            <Formik initialValues={initialValues} validationSchema={RegistrationSchema} onSubmit={onSubmit} >
                {
                    (formik) => {
                        return (
                            <Form className='w-25'>
                                <FormikControl control='input' type='name' name='name' label='Username' />
                                <FormikControl control='input' type='email' name='email' label='Email' />
                                <div className='row flex-wrap'>
                                    <div className='col'>
                                        <FormikControl control='input' type='password' name='password' label='Password' />
                                    </div>
                                    <div className='col'>
                                        <FormikControl control='input' type='password' name='confirmPassword' label='Confirm Password' />
                                    </div>
                                </div>
                                <FormikControl control='input' type='text' name='phone' label='Phone Number' />
                                <FormikControl control='date' label='Date of Birth' name='dob' />
                                <FormikControl className='flex-wrap' control='radio' name='gender' label='Gender' options={options} />
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
