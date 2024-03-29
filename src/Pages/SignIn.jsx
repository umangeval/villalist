import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const SignIn = () => {
    const navigate = useNavigate();
const [data, setData] = useState({});
const [check, setCheck] = useState(false);
const storingData = (e)=>{
e.preventDefault();
const obj = {
    name:data.name,
    email:data.email,
    password:data.password
}
const userData = JSON.parse(window.localStorage.getItem("users"));
if(!userData){
    const dataArray = [obj];
    window.localStorage.setItem("users",JSON.stringify(dataArray));
}
else{
    userData.push(obj);
    window.localStorage.setItem("users",JSON.stringify(userData));
}
swal("Good job!", "Your id has been created", "success");
navigate('/login');
}
const changeCheck = ()=>{
  setCheck(!check);
}
  return (
    <section className="vh-100" style={{backgroundColor: "#eee"}}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderRadius: "25px"}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form className="mx-1 mx-md-4" onSubmit={(e)=>storingData(e)}>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" className="form-control" value = {data.name} onChange={(e)=>setData({...data, name:e.target.value})}/>
                        <label className="form-label" for="form3Example1c">Your Name</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" value = {data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
                        <label className="form-label" for="form3Example3c">Your Email</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" value = {data.password} onChange={(e)=>setData({...data, password:e.target.value})}/>
                        <label className="form-label" for="form3Example4c">Password</label>
                      </div>
                    </div>
  
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox"  id="form2Example3c" checked = {check} onChange={changeCheck}/>
                      <label className="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg" disabled = {!check}>Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image" />
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default SignIn