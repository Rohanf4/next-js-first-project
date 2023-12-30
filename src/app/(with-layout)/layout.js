import Navbar from "@/components/Navbar";
import React from "react";

const layoutWith = ({ children }) => {
  return (
    <div>
   <Navbar/>
      {children}
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default layoutWith;
