import React from "react";
import { useDealsContext } from "../../context/todayDealsContext";

import { Card } from "../index";

const DealCard = () => {
  const { deal_docs } = useDealsContext();
  return (
    <section className="mb-10 mx-auto flex justify-center">
      {deal_docs ? (
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {deal_docs.map((items, indexId) => (
            <Card
              imgUrl={items.deal_main_image_url}
              imgAlt={items.title}
              buttonUrl={items.deal_details_url}
              buttonLable={"Buy Now"}
              key={indexId}
            >
              <span className="block text-gray-900">{items.deal_title}</span>
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
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default DealCard;
