import ProductGridContainer, {
  ProductGridContainerFallback,
} from "components/product_grid_container";
import { Suspense } from "react";
import { uuidv4 } from "utils/utils_helper";

const Homepage = async () => (
  <section className="page-content">
    <Suspense key={uuidv4()} fallback={<ProductGridContainerFallback />}>
      <ProductGridContainer url="products?" searchParams={{ limit: 12, skip: 0 }} loadMore />
    </Suspense>
  </section>
);

export default Homepage;
