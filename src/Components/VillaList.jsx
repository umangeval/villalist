import React, { useState } from 'react'
import swal from 'sweetalert';

const VillaList = (props) => {
    const[name, setName] = useState(props.item.name);

    const changeName = (e)=>{
        e.preventDefault();
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
console.log(name);

var raw = JSON.stringify([
  {
    "path": "/name",
    "op": "replace",
    "value": name
  }
]);

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`http://localhost:5181/api/VillaAPI/${props.item.id}`, requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result)
    swal('', 'Your villa has been updated', 'success');
props.fetchVilla();
})
  .catch(error => console.log('error', error));
    }
  return (
      <div className="col-sm-3 m-1 cardBody " >
      <form>
    <div className="card">
      <div className="card-body">
        {/* <h5 ></h5> */}
        <input type="text" className="card-title" value = {name} onChange={(e)=>setName(e.target.value)}/>
        <p className="card-text">{props.item.details}</p>
        <a href="#" className="btn btn-primary w-28 mx-2" onClick={props.addVillaFunc}>Delete</a>
        <a href="#" className="btn btn-primary w-28 mx-2" onClick={(e) => changeName(e)}>Edit</a>
      </div>
    </div>
  </form>
  </div>
  )
}

export default VillaList