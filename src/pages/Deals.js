import React from "react";
import DealsProvider from "../context/todayDealsContext";
import amazonImg from "../assets/images/amazon.png";
import {getAmazonCategory} from '../services/TodayDealsAPI'
// import DealCards from "../components/Products/DealCards";
// import ProductCard from "../components/Products/ProductCard";

import {
  DealCards,
  ProductCard,
  HorizontalLine,
  PageContainer,
  Image,
} from "../components/index";

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
        <button onClick={() => getAmazonCategory()}>Get All Categories</button>
        <ProductCard />
        <p className="text-4xl">Deals </p>
        <HorizontalLine />
        <DealCards />
      </DealsProvider>
    </PageContainer>
  );
};

export default Deals;
