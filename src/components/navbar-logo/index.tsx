import { Button } from "antd";
import React, { FC } from "react";

import logo from "image/halfhalf-logo.png";
import logoSmail from "image/halfhalf-logo-mini.png";

const NavbarLogo: FC = ({ children }) => {
  return (
    <a href="/" className="lg:w-52 md:w-72 w-28 px-1">
      <img
        className="hidden md:block"
        src={logo}
        alt="logo"
        style={{ height: "2.5em" }}
      />
      <img
        className="md:hidden"
        src={logoSmail}
        alt="logo_smail"
        style={{ height: "2.5em" }}
      />
    </a>
  );
};

export default NavbarLogo;
