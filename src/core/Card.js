import React, { useState } from "react";
import { En } from "../user/En";
export default function Card(props)
{
    const [values, setValues] = useState({
        error: false,
        success: false,
    });
    const { error, success } = values;

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ error: false , success : false});

        En().then((data) => {

        if(data) 
        {
            if(data.msg === 'You are already enrolled')
            {
                console.log("DATA",data.msg);
                setValues({
                    error : true,
                    success:false
                });
            }
            else
            {
                console.log("DATA",data.msg);
                setValues({
                    error : false,
                    success:true
                });
            }
        } 
        else 
        {          
            setValues({
                error: true
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
                    Successfully Enrolled
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
            You are already enrolled
          </div>
          alert("Hello! I am an alert box!!");
        </div>
      </div>
    );
  };
    return(
        <>
            <div class="card m-1 " style={{width: "18rem"}}>
                {success && (successMessage())}
                {error && (errorMessage())}
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_375,q_auto:eco,dpr_2,f_auto,fl_progressive/image/diy/b7a7ab13-a3cf-4914-be8d-ef21d9e591b9" class="card-img-top" alt="..." />
                <div class="card-body mx-auto" style ={{color: "#000000"}} >
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">This pack is a combination of 6 unique Yoga practice 
                    sessions to make you Stretch and strengthen! 
                    Bring energy to the body and rejuvenate the nervous system!</p>
                <button
                    onClick={onSubmit}
                    className="btn btn-info btn-block">
                    Enroll
                </button>
                </div>
            </div>
        </>
    );
}