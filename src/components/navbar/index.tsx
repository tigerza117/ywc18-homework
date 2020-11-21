import React, { FC } from "react";
import Searchbar from "components/searchbar";

const navbar: FC = ({ children }) => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar flex items-center">{children}</div>
      </div>
      <div className="w-full bg-darkblue">
        <div className="navbar-container text-white">
          <div className="navbar">
            <span className="underline">หน้าแรก</span>&nbsp; /&nbsp; ค้นหา
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
