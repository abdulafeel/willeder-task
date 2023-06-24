import React from "react";
import LazyLoading from "../components/LazyLoading";

const HomePage = () => (
  <div>
    <h2>Welcome to the Dashboard</h2>
    <p>
      <b>Customer Data</b>
    </p>
    <LazyLoading />
  </div>
);

export default HomePage;
