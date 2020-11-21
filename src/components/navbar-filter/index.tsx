import { Button } from "antd";
import React, { FC } from "react";

import filter from "image/filter.png";

const NavbarFilter: FC = ({ children }) => {
  return (
    <div className="px-3 md:hidden">
      <img
        className="mx-2"
        src={filter}
        alt="filter"
        style={{ height: "1.25em", width: "auto" }}
      />
    </div>
  );
};

export default NavbarFilter;
