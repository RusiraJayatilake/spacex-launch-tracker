import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import LaunchDataGrid from "../components/LaunchDataGrid/LaunchDataGrid";

const Home = () => {
  return (
    <>
      <Navbar />
      <LaunchDataGrid />
      <Footer />
    </>
  );
};

export default Home;
