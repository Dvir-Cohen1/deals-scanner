import React from "react";

const PageContainer = ({ children, textCenter }) => {
  return (
    <section
      className={"mx-auto container max-w-screen-lg my-5" + (textCenter ? " text-center" : "")}
    >
      {children}
    </section>
  );
};

export default PageContainer;
// mb-12 mx-auto container items-center
