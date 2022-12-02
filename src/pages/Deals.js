import React from "react";
import PageContainer from "../components/common/PageContainer";
import DealsProvider from "../context/todayDealsContext";
import DealCards from "../components/DealCards";
import Image from "../components/common/Image";
import amazonImg from "../assets/images/amazon.png";

const Deals = () => {
  return (
    <PageContainer>
      <DealsProvider>
        <p className="text-4xl">Deals </p>
        <div className="flex mx-auto my-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        Today's deals from <Image width={100} src={amazonImg} />
        <DealCards />
      </DealsProvider>
    </PageContainer>
  );
};

export default Deals;
