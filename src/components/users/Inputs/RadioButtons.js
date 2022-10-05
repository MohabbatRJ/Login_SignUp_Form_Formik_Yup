import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export default function RadioButtons(props) {
    const { label, name, options, ...rest } = props

    return (
        <div >
            <div>
                <label className='fw-bold'>{label}</label>
            </div>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map((option) => {
                            return (
                                <React.Fragment key={option.key} >
                                    <input className='mx-2 mb-2 fw-semibold me-2' type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                                    <label className='fw-semibold me-4' htmlFor={option.value}>{option.value}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
