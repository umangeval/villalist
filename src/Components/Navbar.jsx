import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Villas</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" role="button" onClick={()=>navigate('/')}>
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item" role="button" onClick={() => navigate('/login')}>
                <a className="nav-link ">Login</a>
              </li>
              <li className="nav-item" role="button" onClick={()=>navigate('/signin')}>
                <a className="nav-link">Sign-In</a>
              </li>
              <li className="nav-item" role="button" onClick={()=>navigate('/create')}>
                <a className="nav-link pe-auto" >Add Villa</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
