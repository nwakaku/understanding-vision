import React,{ useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import {SimContext} from '../../SimContext';
import TextError from './TextError';
// import { auth } from '../firebase';
import { Link, useHistory } from "react-router-dom"


export const SignCp = () => {
    const {signup, users} = useContext(SimContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory();

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
        if(values.comfirmPassword !== values.password){
            return setError('password do not match')
        }
        setError('');
        setLoading(true);
        const email = values.email;
        const password = values.password;
        const fullName = values.username;
        signup(email, password, fullName)
          .then((ref) => {
            setLoading(false);
            history.push("/")
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
          console.log("clicked", values)
      };
          

    return (
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    <div className='card'>
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

                        <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                            {/* <!-- Checkbox --> */}
                            <div class="form-check">
                                <Field
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkbox"
                                checked
                                />
                                <label class="form-check-label" htmlFor='checkbox'> Remember me </label>
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
                            <p> Already have an account? <Link to='/login'>login</Link></p>
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
