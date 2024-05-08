import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import MovieDescription from "../../pages/MovieDescription";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDescription />} />
      <Route path="/tv/:id" element={<MovieDescription />} />
    </Routes>
  );
};

export default CustomRoutes;
