// import React,{ useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
// import { UserContext } from '../userContext';
import TextError from './TextError';
// import { auth } from '../firebase';
import { Link, useHistory } from "react-router-dom"


export const LoginCp = () => {
    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = (values) => {
        
          console.log("clicked", values)
      };
          

    return (
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <div className="card">

                    <Form>
                        <div className="form-outline mb-4">
                            <label htmlFor='email' className='form-label'> E-mail</label>
                            <Field type='text' id='email' name='email' className="form-control"/>
                            <ErrorMessage name='email' component={TextError}/>
                        </div>

                        <div className="form-outline mb-4">
                            <label htmlFor='password' className='form-label'> Password</label>
                            <Field type='password' id='password' name='password' className="form-control"/>
                            <ErrorMessage name='password' component={TextError}/>
                        </div>

                                                <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                            {/* <!-- Checkbox --> */}
                            <div class="form-check">
                                <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="form2Example3"
                                checked
                                />
                                <label class="form-check-label" for="form2Example3"> Remember me </label>
                            </div>
                            </div>

                            <div class="col">
                            {/* <!-- Simple link --> */}
                            <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                        {/* <!-- Register buttons --> */}
                        <div class="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                            <p>or sign up with:</p>
                            <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-google"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-twitter"></i>
                            </button>

                            <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-github"></i>
                            </button>
                            </div>

                    </Form>
                </div>
            </Formik>
    )
}

