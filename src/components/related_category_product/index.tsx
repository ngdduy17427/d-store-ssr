import ProductGridContainer, {
  ProductGridContainerFallback,
} from "components/product_grid_container";
import { Suspense } from "react";
import { uuidv4 } from "utils/utils_helper";
import "./css.css";

export const RelatedCategoryProductFallback = () => (
  <section className="related-category-product-section">
    <h1 className="title">
      <strong>Related Products</strong>
    </h1>
  </section>
);

const RelatedCategoryProduct = async ({ url }: { url: string }) => (
  <section className="related-category-product-section">
    <h1 className="title">
      <strong>Related Products</strong>
    </h1>
    <Suspense key={uuidv4()} fallback={<ProductGridContainerFallback />}>
      <ProductGridContainer url={url} searchParams={{ limit: 12, skip: 0 }} loadMore />
    </Suspense>
  </section>
);

export default RelatedCategoryProduct;
