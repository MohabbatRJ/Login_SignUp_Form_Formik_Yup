import * as Yup from 'yup'

const RegistrationSchema = Yup.object({
    name: Yup.string().min(4, 'Username must be atleast 4 Characters').required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
    gender: Yup.string().required('Required'),
    phone: Yup.number().required('Required'),
    dob: Yup.date().required('Required').nullable()
 
})

export default RegistrationSchema;