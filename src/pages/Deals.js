import React from "react";
import PageContainer from "../components/common/PageContainer";
import DealsProvider from "../context/todayDealsContext";
import DealCards from "../components/DealCards";
const Deals = () => {

  return (
    <PageContainer>
      <DealsProvider>
        Today's deals
        <DealCards/>
      </DealsProvider>
    </PageContainer>
  );
};

export default Deals;
