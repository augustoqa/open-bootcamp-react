import { ErrorMessage, Form, Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum'
import { User } from '../../../models/user.class'

const registerFormik = () => {
  let user = new User()

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER,
  }

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Username too short')
      .max(12, 'Username too long')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
      .required('Role is required'),
    password: Yup.string()
      .min(8, 'Password too short')
      .required('Password is required'),
    confirm: Yup.string()
      .when('password', {
        is: (value) => value && value.length > 0,
        then: Yup.string().oneOf([Yup.ref('password')], 'Password must match!'),
      })
      .required('You must confirm the password'),
  })

  const submit = (values) => {
    alert('Register user')
  }

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor='username'>Username</label>
            <Field
              id='username'
              type='text'
              name='username'
              placeholder='Your username'
            />
            {errors.username && touched.username && (
              <ErrorMessage name='username' />
            )}

            <label htmlFor='email'>Email</label>
            <Field
              id='email'
              type='email'
              name='email'
              placeholder='your@mail.com'
            />

            {errors.email && touched.email && <ErrorMessage name='email' />}

            <label htmlFor='password'>Password</label>
            <Field
              id='password'
              name='password'
              type='password'
              placeholder='password'
            />
            {errors.password && touched.password && (
              <ErrorMessage name='password' />
            )}
            <label htmlFor='confirm'>Password Confirm</label>
            <Field
              id='confirm'
              name='confirm'
              type='password'
              placeholder='confirm'
            />
            {errors.confirm && touched.confirm && (
              <ErrorMessage name='confirm' />
            )}

            <button type='submit'>Register Acount</button>
            {isSubmitting ? <p>Sending your credentils...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default registerFormik
