import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    email: "",
    number:"",
    password:"",
    check:"",
  })
const submitForm = (e) =>{
   e.preventDefault(); 
}
const InputFunc= (e) =>{
    const {name, value} = e.target;
    setData((oldData)=>{
      return{
        ...oldData,
        [name] : value
      }
    })
}


  return (
    <>
       {data.check}
      <section className="py-5 my-md-5"> 
        <div className="container">
        <h1 className="text-center mb-3 mb-md-5">Contact Us</h1>
          <div className="row justify-content-center">
            <div className="col-11 col-sm-8">
              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    value={data.email}
                    onChange={InputFunc}
                    type="email"
                    className="form-control"
                    id="email" 
                  /> 
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={InputFunc}
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    value={data.number}
                    onChange={InputFunc}
                    className="form-control"
                    id="number"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    name="check"
                    value={data.check}
                    onChange={InputFunc}
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
