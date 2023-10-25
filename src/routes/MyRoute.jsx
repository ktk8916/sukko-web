import React from "react";
import { Route, Routes } from "react-router-dom";
import Template from "./Template";
import QuickSearch from "../pages/QuickSearch";
import Write from "../pages/Write";
import TaxidermyDetail from "../pages/TaxidermyDetail";
import Update from "../pages/Update";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/" element={<QuickSearch />} />
        <Route path="/write" element={<Write />} />
        <Route path="/taxidermy/:id" element={<TaxidermyDetail />} />
        <Route path="/taxidermy/:id/update" element={<Update />} />
        <Route path="/museum" element={<QuickSearch />} />
      </Route>
    </Routes>
  );
};

export default MyRoute;
