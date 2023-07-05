import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import swal from "sweetalert";
import { Navigate, useNavigate } from "react-router-dom";
import VillaForm from "./VillaForm";

const CreateVilla = () => {
    const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    details: "",
    rate: "",
    occupancy: "",
    sqft: "",
    imageUrl: "string",
    amenity: "string",
  });

 
  return (
    <div>
      <Navbar />
      <VillaForm data = {data} setData = {setData} />
    </div>
  );
};
export default CreateVilla;
