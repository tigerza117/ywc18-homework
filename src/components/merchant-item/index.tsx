import React, { FC } from "react";
import { Merchant } from "models";
import { FaCarSide, FaDog } from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";

const MerchantItem: FC<Merchant> = (data) => {
  return (
    <div className="border cursor-pointer  bg-white p-2 lg:flex">
      <div className="lg:w-auto">
        <img
          className="h-64 w-full lg:w-64 object-cover rounded"
          src={data.coverImageId}
          alt="MerchantItem"
        />
      </div>
      <div className="p-4 lg:px-6 px-3 space-y-3">
        <div className="text-lg flex items-center font-semibold">
          {data.shopNameTH}
          <span className="ml-4 text-xs text-white">
            {data.isOpen === "Y" ? (
              <span className="px-2 bg-success rounded">เปิดอยู่</span>
            ) : data.isOpen === "N" ? (
              <span className="px-2 bg-gray-400 rounded">ปิดแล้ว</span>
            ) : (
              <span></span>
            )}
          </span>
        </div>
        <div className="text-gray-400">
          <span className="whitespace-nowrap">{data.subcategoryName}</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span className="whitespace-nowrap">
            <span className="text-black">{"฿".repeat(data.priceLevel)}</span>
            {"฿".repeat(4 - data.priceLevel)}
          </span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span className="whitespace-pre-line">
            {data.addressDistrictName} {data.addressProvinceName}
          </span>
        </div>
        <div className="py-3">
          <hr className="" />
        </div>
        <div className="text-gray-400">
          <div dangerouslySetInnerHTML={{ __html: data.highlightText }} />
        </div>
        <div className="text-gray-400">
          <span className="text-black font-medium">เมนูแนะนำ: </span>{" "}
          {data.recommendedItems.join(", ")}
        </div>
        <div className="flex space-x-1">
          {data.facilities.map((e, i) => (
            <div
              key={i}
              className="rounded-full h-8 w-8 flex items-center justify-center border border-success text-success"
            >
              {e === "ที่จอดรถ" ? (
                <FaCarSide />
              ) : e === "รับจองล่วงหน้า" ? (
                <AiOutlineForm />
              ) : (
                <FaDog />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchantItem;
