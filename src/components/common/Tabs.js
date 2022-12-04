import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import amazonImg from "../../assets/images/amazon.png";
import ebay from "../../assets/images/ebay.png";
import taobao from "../../assets/images/taobao.svg";
import bestBuyImg from "../../assets/images/bestBuy.png";
import { Image } from "../../components/index";

const tabsItems = [
  { lable: "Amazon", marginX: "", icon:""},
  { lable: "BestBuy", customClass: "mx-5", icon: ""},
  { lable: "Ebay", marginX: "", icon: ""},
];

const Tabs = () => {
  return (
    <div className="flex items-center justify-end ">
      <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
        {tabsItems.map((item, indexId) => {
          return (
            <button
              key={indexId}
              className={
                " text-sm font-medium text-blue-600 capitalize transition-colors duration-300 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-5 px-5 py-3 active:bg-blue-700 " +
                item.customClass
              }
            >
              {/* {item.lable} */}
              <span className="my-5">{item.icon}</span>
              {item.lable}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
