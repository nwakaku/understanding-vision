// import React,{ useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
// import { UserContext } from '../userContext';
import TextError from './TextError';
// import { auth } from '../firebase';
import { Link, useHistory } from "react-router-dom"


export const SignCp = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        comfirmPassword: ''
    }

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
        comfirmPassword: Yup.string().required('Required')
    });

    const onSubmit = (values) => {
        
          console.log("clicked", values)
      };
          

    return (
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor='username'> DisplayName</label>
                            <Field type='text' id='username' name='username' className="form-control"/>
                            <ErrorMessage name='username' component={TextError}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor='email'> E-mail</label>
                            <Field type='text' id='email' name='email' className="form-control"/>
                            <ErrorMessage name='email' component={TextError}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor='password'> Password</label>
                            <Field type='password' id='password' name='password' className="form-control"/>
                            <ErrorMessage name='password' component={TextError}/>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='comfirmPassword'>ComfirmPassword</label>
                            <Field type='password' id='comfirmPassword' name='comfirmPassword' className="form-control"/>
                            <ErrorMessage name='comfirmPassword' component={TextError}/>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block btn-lg"  type='submit'>Register</button>
                        </div>

                        <div className="text-center small">
                            Need an account? <Link to='/login'>Log in</Link>
                        </div>
                    </Form>
            </Formik>
    )
}
