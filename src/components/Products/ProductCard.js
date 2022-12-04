import React from "react";
import { useDealsContext } from "../../context/todayDealsContext";
import { Loader, Button, Card } from "../index";

const ProductCard = () => {
  const { products_docs } = useDealsContext();

  return (
    <section className="mb-10 mx-auto flex justify-center">
      {products_docs ? (
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products_docs.map((items, indexId) => (
            <Card
              imgUrl={items.product_main_image_url}
              imgAlt={items.title}
              buttonUrl={items.product_detail_url}
              buttonLable={"Buy Now"}
              key={indexId}
            >
              <span className="block text-gray-900">{items.product_title}</span>
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
            </Card>
          ))}
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default ProductCard;