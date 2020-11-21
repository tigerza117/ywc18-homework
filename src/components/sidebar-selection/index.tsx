import React, { FC } from "react";
import { Select } from "antd";
import { OptionProps, SelectProps } from "antd/lib/select";

interface ISidebarSelection {
  title: string;
}
export const Option: FC<OptionProps> = (props) => {
  return <Select.Option {...props} />;
};

const SidebarSelection: FC<ISidebarSelection & SelectProps<"">> = (props) => {
  return (
    <div>
      <div className="text-lg font-semibold">{props.title}</div>
      <Select className="w-full" {...props} />
    </div>
  );
};

export default SidebarSelection;
