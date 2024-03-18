"use client";

import { TProduct } from "@type";
import { fetchProducts } from "actions";
import ProductCard from "components/product_card";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const ProductLoadMore = ({ url, searchParams }: { url: string; searchParams: any }) => {
  const isLoadingRef = useRef(false);
  const isEndRef = useRef(false);

  const [observerRef, inView] = useInView();
  const [products, setProducts] = useState<TProduct[]>([]);
  const [pageLoaded, setPageLoaded] = useState(1);

  const loadMoreProducs = useCallback(async () => {
    isLoadingRef.current = true;
    const searchParamsModified = JSON.parse(JSON.stringify(searchParams));
    searchParamsModified.skip = pageLoaded * searchParamsModified.limit;

    const newProducts = await fetchProducts(url, searchParamsModified);

    if (newProducts.length > 0) {
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPageLoaded((prevPage) => (prevPage += 1));
    } else {
      isEndRef.current = true;
    }

    isLoadingRef.current = false;
  }, [searchParams, pageLoaded, url]);

  useEffect(() => {
    inView && !isLoadingRef.current && !isEndRef.current && loadMoreProducs();
  }, [inView, loadMoreProducs]);

  return (
    <Fragment>
      {products.length > 0 &&
        products?.map((product) => <ProductCard key={product.id} product={product} />)}
      {!isLoadingRef.current && !isEndRef.current && (
        <div className="observer-product-infinite-scroll" ref={observerRef} />
      )}
    </Fragment>
  );
};

export default ProductLoadMore;
