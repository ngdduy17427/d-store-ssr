import { fetchProductId } from "actions";
import AdBanner from "components/ad_banner";
import RelatedProduct from "components/related_product";
import { Metadata, ResolvingMetadata } from "next";
import "./css.css";
import ProductDetail from "./product_detail";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product: any = await fetchProductId(params.id);

  return (
    <section className="page-content product-section">
      <ProductDetail product={product} />
      <AdBanner data-ad-slot="9855515500" data-ad-format="auto" data-full-width-responsive="true" />
      <RelatedProduct url={`products/category/${product.category}`} />
    </section>
  );
};

export const generateMetadata = async (
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const product = await fetchProductId(params.id);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `D-Store - ${product.title} | ${product.brand}`,
    description: product.description,
    openGraph: {
      images: [product.thumbnail, ...previousImages],
    },
  };
};

export default ProductPage;
