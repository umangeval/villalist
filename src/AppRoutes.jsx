import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import VillaPage from "./Pages/villapage/VillaPage";
import CreateVilla from "./Pages/villapage/CreateVilla"
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import Authenticate from "./Pages/Authenticate";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" Component={() => <h1>Hello</h1>} /> */}
          <Route path = "/app" Component={App} />
          <Route path="/" Component={VillaPage} />
          <Route element={<Authenticate/>}>
          <Route path="/create" Component={CreateVilla} />
          </Route>
          <Route path="/signin" Component={SignIn} />
          <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}
