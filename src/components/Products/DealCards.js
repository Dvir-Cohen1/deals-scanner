import React from "react";
import { useDealsContext } from "../../context/todayDealsContext";

import { Loader, Button } from "../index";

const DealCard = () => {
  const { deal_docs } = useDealsContext();
  return (
    <section className="mb-10 mx-auto flex justify-center">
      {deal_docs ? (
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {deal_docs.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm
            bg-slate-100 hover:bg-slate-300 w-full dark:bg-gray-800 dark:hover:bg-gray-700 "
              key={key}
            >
              <img
                src={items.deal_main_image_url}
                loading="lazy"
                alt={items.title}
                className="w-full rounded-t-md"
              />
              <div className="flex items-center py-5 p-2">
                <div className="ml-3">
                  <span className="block text-gray-900">
                    {items.deal_title}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {items.deal_start}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {items.deal_end}
                  </span>
                  <span className="block text-gray-400 text-lg">
                    Max Price: {items.app_sale_range.max}{" "}
                    {items.app_sale_range.currency}
                    <br />
                    Min Price: {items.app_sale_range.min}
                    {items.app_sale_range.currency}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div>
              <div className="text-center mb-5">
                <Button>
                  <a href={items.deal_details_url}>Buy Now</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default DealCard;