import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import TextError from "./TextError";
import { Link } from "react-router-dom";
import Body from "./Body";




const Signup = () => {
  const [data, setData] = useState(null)

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
  };
  
  
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "*required";
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
      errors.email = "email must be in format";
    }
    if (!values.password) {
      errors.password = "*required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "*required";
    }
    if (values.password.toLowerCase() !== values.confirmPassword.toLowerCase()) {
      errors.confirmPassword = "password must be same";
    }
  
    return errors;
  };
  const onSubmit = (values) => {
    console.log(values);
    setData(values)
  }
;
  return (
    <div className="signup">
      <h2>Signup here</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
          <Form>
          <div className="form-control">
          <label>Email</label>
          <Field type="email" placeholder="Email..." name="email" />
          <ErrorMessage name="email"  component={TextError}/>
          </div>
            
          <div className="form-control">
          <label>Password</label>
          <Field type="password" placeholder="Password..." name="password"/>
          <ErrorMessage name="password" component={TextError} />
          </div>

          <div className="form-control">
          <label>ConfirmPassword</label>
          <Field type="password" placeholder="Confirm Password..." name="confirmPassword"/>
          <ErrorMessage name="confirmPassword" component={TextError} />
          </div>
          <button type="submit" onClick={onSubmit}>
           
            <Link to={{
              pathname:"/home",
              data
            }}>submit</Link>  
  
          </button>
          <h1>{data}</h1>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
