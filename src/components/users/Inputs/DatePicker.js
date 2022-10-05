import React from 'react'
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePicker(props) {
    const { label, name, ...rest } = props
    // const { setFieldValue } = useFormikContext();
//   const [field] = useField(props);
    return (
        <div >
            <label className='fw-bold' htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <DateView className='form-control mb-2 shadow-none border-dark' id={name} {...field} {...rest} onChange={val => setFieldValue(name, val)} selected={(value && new Date(value)) || null} 
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
