import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth";

var msg = "Check All Fields Again";

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        age : "" ,
        error: "",
        success: false,
    });
    //  destructuring
    const { name, email, password, age ,error, success } = values;
    const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({  email,age, password })
      .then((data) => {

        console.log("DATA", data);
        console.log(data.email);

        
        if (data.email === email) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            age : "",
            error: "",
            success: true,
          });
        } else {
          if(data.email === '') msg = "Age Should be between 18 and 65";
          else msg = "Check All Fields Again"; 
          
          setValues({
            ...values,
            error: true,
            success: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };

    const successMessage = () => {
        return (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div
                    className="alert alert-success"
                    style={{ display: success ? "" : "none" }}
                >
                    New account created successfully. Please <Link
                    to="/signin"
                    >
                    login now.
                    </Link>
                </div>
            </div>
        </div>
        );
    };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {msg}
          </div>
        </div>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={handleChange("name")}
                type="text"
              />
            </div>
            <div className="form-group">
               <label className="text-light">Email</label>
               <input
                className="form-control"
                value={email}
                onChange={handleChange("email")}
                type="text"
              />
            </div>
            <div className="form-group">
               <label className="text-light">Age</label>
               <input
                className="form-control"
                value={age}
                onChange={handleChange("age")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">password</label>
              <input
                className="form-control"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <button
              onClick={onSubmit}
              className="btn btn-info btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Online Yoga Classes" description="Explore And Enroll">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p className="text-white text-center">
        {/* {JSON.stringify(values)} */}
      </p>
    </Base>
  );
};
export default Signup;