import React from "react";
import Explore from "../components/Explore";
import Pricing from "../components/Pricing";
import SubscriptionForm from "../components/SubscriptionForm";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <Explore />
      <Pricing />
      <SubscriptionForm />
    </>
  );
};

export default IndexPage;
