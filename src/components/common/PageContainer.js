import React from "react";

const PageContainer = ({ children, textCenter, ...props }) => {
  return (
    <section
      className={
        "mx-auto container max-w-screen-xl px-4 my-5 md:w-2/3 md:px-0 md:my-10" +
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
