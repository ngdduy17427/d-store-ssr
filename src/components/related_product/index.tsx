import ProductGridContainer from "components/product_grid_container";
import "./css.css";

const RelatedProduct = async ({ url }: { url: string }) => (
  <section className="related-product-section">
    <h1 className="title">
      <strong>Related Products</strong>
    </h1>
    <ProductGridContainer url={url} />
  </section>
);

export default RelatedProduct;
