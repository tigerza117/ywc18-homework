import { Radio } from "antd";
import { RadioGroupProps, RadioProps } from "antd/lib/radio";
import React, { FC } from "react";

interface ISidebarRadio {
  title: string;
}

const radioStyle = {
  display: "block",
  height: "2em",
  lineHeight: "2em",
};

export const SiebarRadio: FC<RadioProps> = (props) => {
  return <Radio style={radioStyle} className="block w-full" {...props} />;
};

const SidebarRadio: FC<ISidebarRadio & RadioGroupProps> = (props) => {
  return (
    <div>
      <div className="text-lg font-semibold mb-5">{props.title}</div>
      <Radio.Group {...props} />
    </div>
  );
};

export default SidebarRadio;
