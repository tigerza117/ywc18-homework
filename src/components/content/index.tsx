import { Button } from "antd";
import React, { FC } from "react";

const Content: FC = ({ children }) => {
  return (
    <div className="w-full">
      <div className="space-y-2">{children}</div>
      <div className="flex w-full py-8  justify-center">
        <Button size="large" className="w-80">
          ดูเพิ่มเติม
        </Button>
      </div>
    </div>
  );
};

export default Content;
