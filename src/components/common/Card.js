import React from "react";
import { Loader, Button } from "../index";

const Card = ({ children, imgUrl, imgAlt, buttonUrl, buttonLable }) => {
  return (
    <article
      className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm
           bg-slate-100 hover:bg-gray-300 w-full dark:bg-gray-200 dark:hover:bg-gray-300 flex flex-col justify-between "
    >
      <img
        src={imgUrl}
        loading="lazy"
        alt={imgAlt}
        className="w-full rounded-t-md h-full"
      />
      <div className="ml-3 mt-2 mb-auto">{children}</div>
      <div className="text-center mb-5">
        <Button>
          <a href={buttonUrl}>{buttonLable || "Click"}</a>
        </Button>
      </div>
    </article>
  );
};

export default Card;
