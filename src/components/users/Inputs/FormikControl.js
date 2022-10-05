import React from 'react'
import DatePicker from './DatePicker'
import Input from './Input'
import RadioButtons from './RadioButtons'

export default function FormikControl(props) {
    const {control, ...rest} = props
    switch(control) {
        case 'input': return <Input {...rest}/>
        case 'radio': return <RadioButtons {...rest}/>
        case 'date': return <DatePicker {...rest} />
        default:
            return null
    }
}
