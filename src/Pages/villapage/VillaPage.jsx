import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import VillaList from "../../Components/VillaList";
import axios from "axios";

export default function VillaPage() {
  const [villaList, setVillaList] = useState([]);
  const fetchVilla = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    axios.get("http://localhost:5181/api/VillaAPI")
    .then(response =>{
      const responseData = response.data;
      setVillaList(responseData);
    })
    .catch((error) => console.log("error", error));
    // fetch("http://localhost:5181/api/VillaAPI", requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setVillaList(result);
    //   })
    //   .catch((error) => console.log("error", error));
  };

  const deleteVilla = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    axios.delete(`http://localhost:5181/api/VillaAPI/${id}`, {data:{id:id}})
    .then(res => {
      console.log(res.data)
      fetchVilla();
    })
    .catch((error) => console.log("error", error));
    // fetch(`http://localhost:5181/api/VillaAPI/${id}`, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => {
    //     console.log(result);
    //     fetchVilla();
    //   })
    //   .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchVilla();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="row m-3 villacard">
        {villaList.map((item) => (
          <VillaList item={item} addVillaFunc={() => deleteVilla(item.id)} fetchVilla = {fetchVilla} key = {item.id} />
        ))}
      </div>
    </div>
  );
}
