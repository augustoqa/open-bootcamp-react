import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const loginFormik = () => {
  const initialCredentials = {
    email: '',
    password: '',
  }

  return (
    <div>
      <h4>Login Form</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
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
            <button type='submit'>Submit</button>
            {isSubmitting ? <p>Login your credentils...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default loginFormik
