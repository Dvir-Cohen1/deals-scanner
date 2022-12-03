import React from "react";
import PageContainer from "../components/common/PageContainer";
import DealsProvider from "../context/todayDealsContext";
import DealCards from "../components/DealCards";
import Image from "../components/common/Image";
import amazonImg from "../assets/images/amazon.png";
import ProductCard from "../components/Products/ProductCard";
import HorizontalLine from "../components/common/HorizontalLine";

const Deals = () => {
  return (
    <PageContainer>
      <DealsProvider>
        <div className="columns-2">
          <div>
            <p className="text-4xl">Products </p>
            <HorizontalLine />
          </div>
          <div className="float-right">
            Today's deals from <Image width={100} src={amazonImg} />
          </div>
        </div>
        <ProductCard />
        <p className="text-4xl">Deals </p>
        <HorizontalLine />
        <DealCards />
      </DealsProvider>
    </PageContainer>
  );
};

export default Deals;
