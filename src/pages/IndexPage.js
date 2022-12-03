import React from "react";

import {
  Explore,
  Pricing,
  SubscriptionForm,
  HeroSection,
  Testimonials,
} from "../components/index";

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
