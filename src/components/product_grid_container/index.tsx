import { TProduct } from "@type";
import { fetchProducts } from "actions";
import AdBanner from "components/ad_banner";
import ProductCard from "components/product_card";
import ProductLoadMore from "components/product_grid_container/product_load_more";
import Image from "next/image";
import { Fragment } from "react";
import "./css.css";

interface ProductGridContainerProps {
  url: string;
  searchParams?: any;
  loadMore?: boolean;
}

const ProductGridContainer = async ({
  url,
  searchParams,
  loadMore = false,
}: ProductGridContainerProps) => {
  const products: TProduct[] = await fetchProducts(url, searchParams);

  return (
    <Fragment>
      <section className="product-grid-container">
        {products.length > 0 ? (
          products?.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <Image
            src="/images/no-cart.png"
            alt="No cart"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={100}
            priority
          />
        )}
        {loadMore && <ProductLoadMore url={url} searchParams={searchParams} />}
      </section>
      <AdBanner data-ad-slot="9855515500" data-ad-format="auto" data-full-width-responsive="true" />
    </Fragment>
  );
};

export default ProductGridContainer;
