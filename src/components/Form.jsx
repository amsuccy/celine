import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const Form = () => {
    let validationSchema = yup.object().shape({
        fullName: yup.string().required("The full name field is required"),
        email: yup.string().email().required("The email field is required"),
        age: yup.number().required("The age field is required").min(18).max(100),
        confirmPassword: yup.string().required("The confirm password feild is required").min(8),
        confirmPassword: yup.string().required("The confirm password feild is required").oneOf([yup.ref("password"), null], "passwords do not match")
    })
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(validationSchema)
    })
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div>
        <form action="">
            <label htmlFor="name">Full name:</label> <input type="text" placeholder='Full name...' {...register('Fullname')} /> <br /> <br />
            {errors.fullName && <p>{errors.fullName?.message}</p>} 
            <label htmlFor="email">Email:</label><input type="text" placeholder='Email'{...register('email')} /> <br /><br />
            {errors.email && <p>{errors.email?.message}</p>} 
            <label htmlFor="age">Age:</label><input type="text" placeholder='Age'{...register('age')} /> <br /><br />
            {errors.age && <p>{errors.age?.message}</p>} 
            <label htmlFor="password">Password:</label><input type="password" placeholder='Password'{...register('password')} /> <br /><br />
            {errors.password && <p>{errors.password?.message}</p>} 
            <label htmlFor="password_confirm">Confirm Password:</label><input type="password" placeholder='confirm your password'{...register('password confirm')} /> <br /> <br /> <br />
            {errors.Confirmpassword && <p>{errors.confirmPassword?.message}</p>   }
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form