import { IProduct } from "@type";
import { fetchProducts } from "actions";
import ProductCard, { ProductCardSkeleton } from "components/product_card";
import ProductLoadMore from "components/product_grid_container/ui/product_load_more";
import Image from "next/image";
import { uuidv4 } from "utils/utils_helper";
import "./css.css";

export const ProductGridContainerFallback = (): JSX.Element => (
  <section className="product-grid-container">
    {Array(12)
      .fill(null)
      .map(
        (): JSX.Element => (
          <ProductCardSkeleton key={uuidv4()} />
        )
      )}
  </section>
);

const ProductGridContainer = async ({
  url,
  searchParams,
  loadMore = false,
}: {
  url: string;
  searchParams?: any;
  loadMore?: boolean;
}): Promise<JSX.Element> => {
  const products: IProduct[] = await fetchProducts(url, searchParams);

  return (
    <section className="product-grid-container">
      {products.length > 0 ? (
        products?.map((product): JSX.Element => <ProductCard key={product.id} product={product} />)
      ) : (
        <Image
          src="/images/no-cart.png"
          alt="No cart"
          width={200}
          height={200}
          quality={100}
          priority
        />
      )}
      {products.length > 0 && loadMore && <ProductLoadMore url={url} searchParams={searchParams} />}
    </section>
  );
};

export default ProductGridContainer;
