import ProductGridContainer from "components/product_grid_container";

const Homepage = async () => (
  <section className="flex w-full flex-1 flex-col">
    <ProductGridContainer url="products?" searchParams={{ limit: 12, skip: 0 }} loadMore />
  </section>
);

export default Homepage;
