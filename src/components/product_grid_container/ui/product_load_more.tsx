"use client";

import { IProduct } from "@type";
import { fetchProducts } from "actions";
import ProductCard from "components/product_card";
import Image from "next/image";
import { Fragment, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ProductLoadMore = ({
  url,
  searchParams,
}: {
  url: string;
  searchParams: any;
}): JSX.Element => {
  const [observerRef, inView] = useInView();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [pageLoaded, setPageLoaded] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const loadMoreProducs = useCallback((): void => {
    const searchParamsModified = JSON.parse(JSON.stringify(searchParams));
    searchParamsModified.skip = pageLoaded * searchParamsModified.limit;

    fetchProducts(url, searchParamsModified).then((newProducts: IProduct[]): void => {
      if (newProducts.length > 0) {
        setProducts((prevProducts): IProduct[] => [...prevProducts, ...newProducts]);
        setPageLoaded((prevPage): number => (prevPage += 1));
      } else setIsEnd(true);

      setIsLoading(false);
    });
  }, [searchParams, pageLoaded, url]);

  useEffect((): void => {
    isLoading && loadMoreProducs();
  }, [isLoading, loadMoreProducs]);

  useLayoutEffect((): void => {
    inView && !isLoading && !isEnd && setIsLoading(true);
  }, [inView, isLoading, isEnd]);

  return (
    <Fragment>
      {products.length > 0 &&
        products?.map((product): JSX.Element => <ProductCard key={product.id} product={product} />)}
      {!isLoading && !isEnd && <span ref={observerRef} />}
      {isLoading && (
        <Image
          src="/svgs/loading.svg"
          alt="Checkout loading"
          fill
          quality={100}
          priority
          className="col-span-2 !h-[200px] bg-[#f3f3f3] lg:col-span-3"
        />
      )}
    </Fragment>
  );
};

export default ProductLoadMore;
