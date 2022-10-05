import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export default function Input(props) {
    const {label, name, ...rest} = props
    return (
        <div >
            <label className='fw-bold'  htmlFor={name}>{label}</label>
            <Field className='form-control mb-2 shadow-none border-dark' id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
