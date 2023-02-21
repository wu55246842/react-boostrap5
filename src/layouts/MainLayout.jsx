import React from "react";
import Header from "../shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="contaner">{children}</div>

    </>
  );
};

export default MainLayout;
