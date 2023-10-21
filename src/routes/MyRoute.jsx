import React from "react";
import { Route, Routes } from "react-router-dom";
import Template from "./Template";
import QuickSearch from "../pages/QuickSearch";
import Write from "../pages/Write";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/" element={<QuickSearch />} />
        <Route path="/museum" element={<QuickSearch />} />
        <Route path="/write" element={<Write />} />
      </Route>
    </Routes>
  );
};

export default MyRoute;
