import React from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const VillaForm = (props) => {
    const navigate = useNavigate();
    const postVilla = (e)=>{
        e.preventDefault();
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(props.data);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:5181/api/VillaAPI", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
        swal("Good job!", "Villa has been created successfully!", "success");
        navigate('/');
    })
      .catch(error => console.log('error', error));
      }
  return (
    <div>
        <form className="m-3" onSubmit={(e) => postVilla(e)}>
    <div className="form-group m-2">
      <label htmlFor="exampleFormControlInput1">Name</label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        onChange={(e) => props.setData({ ...props.data, name: e.target.value })}
        value={props.data.name}
      />
    </div>
    <div className="form-group m-2">
      <label for="exampleFormControlSelect1">Occupancy</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"

        onChange={(e) => props.setData({ ...props.data, occupancy: e.target.value })}
        value={props.data.occupancy}
      >
        <option>4</option>
        <option>6</option>
        <option>8</option>
        <option>10</option>
      </select>
    </div>
    <div className="form-group m-2">
      <label for="exampleFormControlSelect2">SQFT</label>
      <select
        multiple
        className="form-control"
        id="exampleFormControlSelect2"
        onChange={(e) => props.setData({ ...props.data, sqft: e.target.value })}
      >
        <option>1200</option>
        <option >2400</option>
        <option>3600</option>
        <option>4800</option>
      </select>
    </div>
    <div className="form-group m-2">
      <label for="exampleFormControlTextarea1">Details</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        onChange={(e) => props.setData({ ...props.data, details: e.target.value })}
        value={props.data.details}
      ></textarea>
    </div>
    <div className="form-group m-2">
      <label>Rate</label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        onChange={(e) => props.setData({ ...props.data, rate: e.target.value })}
        value={props.data.rate}
      />
    </div>
    <button type="submit" className="btn btn-primary w-25 my-4">
      Create Villa
    </button>
  </form></div>
  )
}

export default VillaForm