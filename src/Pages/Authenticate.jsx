import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

const Authenticate = () => {
 const navigate = useNavigate();
 
const authenticate = (val)=>{ 
    const userData = JSON.parse(window.localStorage.getItem('users'));
    var flag = false;
        userData.forEach(item =>{
          if(item.email === val){
             flag = true;
          }
 })
return flag;
}
    useEffect(()=>{
        swal("Write your email here:", {
            content: "input",
          })
          .then((value) => {
            if(authenticate(value)){
                swal('',"You're a member",'success');
            }
            else{
                swal('','Sign Up to add villa','error');
                navigate('/signin');
            }
          })
     }
, [])
  return(
  <Outlet />
  )
}

export default Authenticate


    