import React from "react";

const PageContainer = ({ children, textCenter, ...props }) => {
  return (
    <section
      className={
        "mx-auto container max-w-screen-xl w-2/3 my-5" +
        (textCenter ? " text-center" : "")
      }
      {...props}
    >
      {children}
    </section>
  );
};

export default PageContainer;
// mb-12 mx-auto container items-center
