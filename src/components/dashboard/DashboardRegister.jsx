import React from "react";
import Signup from "../userlogin/Signup";

const DashboardRegister = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center mt-25 h-auto gap-5 ml-64">
      <div className="border justify-items-center justify-center mb-20">
        <Signup />
      </div>
    </div>
  );
};

export default DashboardRegister;
