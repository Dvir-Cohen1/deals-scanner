import React from "react";
import { useDealsContext } from "../../context/todayDealsContext";
import Loader from "../common/Loader";
import Button from "../common/Button";

const ProductCard = () => {
  const data = useDealsContext();
  console.log(data.products_docs);
  return (
    <section className="mb-10 mx-auto flex justify-center">
      {data.products_docs ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.products_docs.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm
           bg-slate-100 hover:bg-slate-300 w-full dark:bg-gray-800 dark:hover:bg-gray-700 "
              key={key}
            >
              <img
                src={items.product_main_image_url}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md"
              />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="ml-3">
                  <span className="block text-gray-900">
                    {items.product_title}
                  </span>
                  <span className="block text-gray-400 text-lg">
                    {items.original_price} {items.app_sale_price_currency}
                  </span>
                  <span className="block text-gray-400 text-lg">
                    {items.app_sale_price} {items.app_sale_price_currency}
                  </span>

                  <span className="block text-gray-400 text-sm">
                    Deal Start: {items.deal_start}
                    <br />
                    Deal End: {items.deal_end}
                  </span>
                </div>
              </div>
              <div className="text-center mb-5">
                <Button>
                  <a href={items.product_detail_url}>Buy Now</a>
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

export default ProductCard;
