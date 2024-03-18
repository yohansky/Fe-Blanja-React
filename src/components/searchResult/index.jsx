import React from "react";
import NavbarLogin from "../navbarLogin";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParam = queryParams.get("query");
  return (
    <div>
      <NavbarLogin />
      <h1>SearchResult</h1>
      <p>Query Prameter : {queryParam}</p>
    </div>
  );
};

export default SearchResult;
