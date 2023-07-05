import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const loginData = (e)=>{
    e.preventDefault();
    const userData = JSON.parse(window.localStorage.getItem('users'));
    var flag = false;
    userData.forEach(obj => {
      if(obj.email == data.email){
        flag = true;
        if(obj.password == data.password){
          swal("Good job!", "You logged in successfully", "success");
          navigate('/');
        }
        else{
          swal('Error', 'Email and password doesnt match', 'error');
        }
      }
    if(flag == false){
      swal('Error', 'Email not found', 'error')
    }
    });
  }
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={(e)=> loginData(e)}>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value = {data.email}
                    onChange={(e) => setData({...data, email:e.target.value})}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value = {data.password}
                    onChange={(e) => setData({...data, password:e.target.value})}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem; padding-right: 2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger" onClick={()=>navigate('/signin')}>
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          {/* <!-- Copyright --> */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          {/* <!-- Copyright --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </div>
      </section>
    </div>
  );
};

export default Login;
