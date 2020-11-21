import { Dropdown, Input, Menu, Select } from "antd";
import React, { FC } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { ImSpoonKnife } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Searchbar: FC = ({ children }) => {
  const menu = (
    <Menu>
      <Menu.Item key="ร้านอาหารและเครื่องดื่ม" className="flex items-center">
        <ImSpoonKnife />
        &nbsp; ร้านอาหารและเครื่องดื่ม
      </Menu.Item>
      <Menu.Item key="ร้านค้า OTOP" className="flex items-center">
        <ImSpoonKnife />
        &nbsp; ร้านค้า OTOP
      </Menu.Item>
      <Menu.Item key="ร้านธงฟ้า" className="flex items-center">
        <HiOutlineShoppingBag />
        &nbsp; ร้านธงฟ้า
      </Menu.Item>
      <Menu.Item key="สินค้าทั่วไป" className="flex items-center">
        <ImSpoonKnife />
        &nbsp; สินค้าทั่วไป
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="flex border w-full rounded-xl">
      <div className="md:w-80 w-full border-r hidden md:block">{children}</div>
      <div className="w-full">
        <Dropdown overlay={menu}>
          <Input
            placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
            size="large"
            bordered={false}
            suffix={
              <div className="bg-gray-100 -mt-2 -mb-2 -mr-3 px-7 py-3 rounded-r-xl flex items-center">
                <SearchOutlined />
              </div>
            }
          />
        </Dropdown>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Searchbar;
