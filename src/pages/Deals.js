import React, { useContext } from "react";

import amazonImg from "../assets/images/amazon.png";
import { getAmazonProduct } from "../services/TodayDealsAPI";

import {
  DealCards,
  ProductCard,
  PageContainer,
  Image,
  HeadingLarge,
  Tabs,
  SkeletonLoader,
  Button,
  Dialog,

} from "../components/index";

import { useDealsContext } from "../context/todayDealsContext";

const Deals = () => {
  const { products_docs } = useDealsContext();

  return (
    <PageContainer>
      <Button onClick={()=>getAmazonProduct()}></Button>
      <Image width={70} src={amazonImg} />
      <div className="columns-2">
        <HeadingLarge>Today's Deals</HeadingLarge>
        <Dialog />
        <Tabs />
        {/* <button onClick={() => getAmazonCategory()}>Get All Categories</button> */}
      </div>
      {products_docs ? (
        <>
          <ProductCard />
          <HeadingLarge>Products</HeadingLarge>
          <DealCards />
        </>
      ) : (
        <SkeletonLoader/>

      )}
    </PageContainer>
  );
};

export default Deals;
