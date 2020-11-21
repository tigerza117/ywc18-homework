import React, { FC, useEffect, useState } from "react";

import "styles/output.css";
import "antd/dist/antd.css";
import "styles/index.css";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Content from "components/content";
import SidebarRadio, { SiebarRadio } from "components/sidebar-radio";
import SidebarSelection, { Option } from "components/sidebar-selection";
import { IData } from "models";
import MerchantItem from "components/merchant-item";
import { Select } from "antd";
import NavbarLogo from "components/navbar-logo";
import NavbarFilter from "components/navbar-filter";
import Searchbar from "components/searchbar";

function App() {
  const [data, setData] = useState<IData | undefined>(undefined);
  const [categorys] = useState([
    "ทั้งหมด",
    "ร้านอาหารและเครื่องดื่ม",
    "ร้านค้า OTOP",
    "ร้านธงฟ้า",
    "สินค้าทั่วไป",
  ]);
  const [category, setCategory] = useState("ร้านอาหารและเครื่องดื่ม");
  const [province, setProvince] = useState("พื้นที่ใกล้ฉัน");

  useEffect(() => {
    fetch("https://panjs.com/ywc18.json").then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json().then((json) => {
        if (json as IData) {
          setData(json);
        }
      });
    });
    return () => {};
  }, []);
  return (
    <div className="w-full">
      {/* Navbar */}

      <Navbar>
        <NavbarLogo />
        <Searchbar>
          <Select
            bordered={false}
            size="large"
            className="w-full"
            defaultValue={province}
            onChange={(e) => setProvince(e)}
          >
            <Option value="พื้นที่ใกล้ฉัน">
              <div className="flex items-center">
                <svg
                  className="mr-2"
                  width="16"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                >
                  <path
                    d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                    fill="#000"
                  ></path>
                </svg>
                พื้นที่ใกล้ฉัน
              </div>
            </Option>
            <Option value="พื้นที่ทั้งหมด">
              <div className="flex items-center">
                <svg
                  className="mr-2"
                  width="20"
                  height="30"
                  viewBox="0 0 25 30"
                  fill="none"
                >
                  <path
                    d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z"
                    fill="#222"
                    stroke="#fff"
                  ></path>
                  <path
                    d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z"
                    fill="#222"
                    stroke="#fff"
                  ></path>
                </svg>
                พื้นที่ทั้งหมด
              </div>
            </Option>
            {data?.provinces.map((provice, idx) => (
              <Option key={idx} value={provice}>
                {provice}
              </Option>
            ))}
          </Select>
        </Searchbar>
        <NavbarFilter />
      </Navbar>
      {/* Body */}
      <div className="content-bg bg-content-texture min-h-screen">
        <div className="mt-4 px-4 mx-auto max-w-screen-2xl">
          <div className="font-semibold text-xl mt-3 mb-10">
            ผลการค้นหา {category}
          </div>
          <div className="flex">
            {/* Sidebar */}
            <Sidebar>
              {/* Categorys */}
              <SidebarRadio
                title="ประเภทร้านค้า"
                defaultValue="ร้านอาหารและเครื่องดื่ม"
              >
                {categorys.map((e, i) => (
                  <SiebarRadio
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    key={i}
                    value={e}
                  >
                    {e}
                  </SiebarRadio>
                ))}
              </SidebarRadio>
              {/* Province */}
              <div className="text-lg font-semibold">จังหวัด/ใกล้ฉัน</div>
              <Select
                className="w-full"
                defaultValue={province}
                onChange={(e) => setProvince(e)}
              >
                <Option value="พื้นที่ใกล้ฉัน">
                  <div className="flex items-center">
                    <svg
                      className="mr-2"
                      width="16"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                    >
                      <path
                        d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                        fill="#000"
                      ></path>
                    </svg>
                    พื้นที่ใกล้ฉัน
                  </div>
                </Option>
                <Option value="พื้นที่ทั้งหมด">
                  <div className="flex items-center">
                    <svg
                      className="mr-2"
                      width="20"
                      height="30"
                      viewBox="0 0 25 30"
                      fill="none"
                    >
                      <path
                        d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z"
                        fill="#222"
                        stroke="#fff"
                      ></path>
                      <path
                        d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z"
                        fill="#222"
                        stroke="#fff"
                      ></path>
                    </svg>
                    พื้นที่ทั้งหมด
                  </div>
                </Option>
                {data?.provinces.map((provice, idx) => (
                  <Option key={idx} value={provice}>
                    {provice}
                  </Option>
                ))}
              </Select>

              {/* Price */}
              <SidebarSelection placeholder="กรุณาเลือก" title="ราคา">
                {data?.priceRange.map((price, idx) => (
                  <Option key={idx} value={price}>
                    {price}
                  </Option>
                ))}
              </SidebarSelection>
              {/* Category */}
              <div className={category === "ทั้งหมด" ? "hidden" : ""}>
                <SidebarRadio
                  title="ประเภทร้านอาหารและเครื่องดื่ม"
                  defaultValue="ทั้งหมด"
                >
                  <SiebarRadio value={"ทั้งหมด"}>ทั้งหมด</SiebarRadio>
                  {data?.categories
                    .filter((e) => e.name === category)[0]
                    ?.subcategories.map((subcategorie, idx) => (
                      <SiebarRadio key={idx} value={subcategorie}>
                        {subcategorie}
                      </SiebarRadio>
                    ))}
                </SidebarRadio>
              </div>
            </Sidebar>
            {/* Content */}
            <Content>
              {data?.merchants.map((merchant) => (
                <MerchantItem {...merchant} />
              ))}
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
