import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
// import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Signin from "./user/Signin";


const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/signup" exact element={<Signup/>} />
        <Route path="/signin" exact element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
