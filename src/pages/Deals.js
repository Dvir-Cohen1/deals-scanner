import amazonImg from "../assets/images/amazon.png";
import {
  DealCards,
  ProductCard,
  PageContainer,
  Image,
  HeadingLarge,
  Tabs,
  SkeletonLoader,


} from "../components/index";

import { useDealsContext } from "../context/todayDealsContext";

const Deals = () => {
  const { products_docs } = useDealsContext();


  return (
    <PageContainer>

      <Image width={70} src={amazonImg} />
      <div className="columns-1">
        <HeadingLarge>Today's Deals</HeadingLarge>
        <Tabs />
        {/* <button onClick={() => getAmazonCategory()}>Get All Categories</button> */}
      </div>
      {products_docs ? (
        <>
          <ProductCard />
          <HeadingLarge>Products</HeadingLarge>
          <DealCards />
        </>
      ) : (
        <SkeletonLoader/>

      )}
    </PageContainer>
  );
};

export default Deals;
