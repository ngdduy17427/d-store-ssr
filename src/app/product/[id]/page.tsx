import { fetchProductId } from "actions";
import { RelatedCategoryProductFallback } from "components/related_category_product";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense, lazy } from "react";
import { uuidv4 } from "utils/utils_helper";
import "./css.css";
import ProductDetail, { ProductDetailSkeleton } from "./ui/product_detail";

const RelatedCategoryProduct = lazy(() => import("components/related_category_product"));

const ProductPageFallback = () => (
  <section className="page-content product-section">
    <ProductDetailSkeleton />
  </section>
);

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product: any = await fetchProductId(params.id);

  return (
    <Suspense key={uuidv4()} fallback={<ProductPageFallback />}>
      <section className="page-content product-section">
        <ProductDetail product={product} />
        <Suspense key={uuidv4()} fallback={<RelatedCategoryProductFallback />}>
          <RelatedCategoryProduct url={`products/category/${product.category}`} />
        </Suspense>
      </section>
    </Suspense>
  );
};

export const generateMetadata = async (
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const product = await fetchProductId(params.id);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${process.env.NEXT_PUBLIC_APP_TITLE} - Product: ${product.title} | ${product.brand}`,
    description: product.description,
    openGraph: {
      images: [product.thumbnail, ...previousImages],
    },
  };
};

export default ProductPage;
