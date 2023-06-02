import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("please enter name"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("please enter password"),
    email: Yup.string().email("please enter email").required("Required"),
  });

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  

   

  const dispatch = useDispatch();

  // const handlesub = (e) => {
  //   e.preventDefault();

  // };



  var oldDateObj = new Date();
  var newDateObj = new Date();
  newDateObj.setTime(oldDateObj.getTime() + (20 * 60 * 1000));
 
  

  return (
    <div className="login">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          dispatch(
            login({
              name: name,
              email: email,
              password: password,
              loggedIn: true
            })
          );
          console.log(values.firstName);
          localStorage.setItem("firstName", values.firstName);
          localStorage.setItem("email", values.email);
          localStorage.setItem("currenttime",oldDateObj);
          localStorage.setItem("Expiretime", newDateObj);
        }}
      >
        {(props) => (
          <Form className="login__form">
            <h1 className="text-5xl">Admin Login 👤 </h1>
            
            <Field
              type="text"
              name="firstName"
              placeholder="Name"
              value={name}
              
              onChange={(e) => {
                setname(e.target.value);
                props.setFieldValue("firstName",e.target.value);
                
              }}
            />
            {props.errors.firstName && props.touched.firstName ? (
              <div>{props.errors.firstName}</div>
            ) : null}
            <Field
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
                props.setFieldValue("email",e.target.value)
              }}
            />
            {props.errors.email && props.touched.email ? <div>{props.errors.email}</div> : null}
            <Field
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
                props.setFieldValue("password",e.target.value);
              }}
            />
             {props.errors.password && props.touched.password ? <div>{props.errors.password}</div> : null}
            <button type="submit" className="submit__btn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
