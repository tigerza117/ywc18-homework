import React, { FC } from "react";

const Sidebar: FC = ({ children }) => {
  return (
    <div className="w-auto hidden md:block mr-6">
      <div className="border w-96 bg-white p-5 space-y-8">{children}</div>
    </div>
  );
};

export default Sidebar;
