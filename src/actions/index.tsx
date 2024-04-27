"use server";

import { IProduct, TCategory } from "@type";

export const fetchProducts = async (url: string, searchParams?: any): Promise<IProduct[]> => {
  const urlModified = new URL(`${process.env.NEXT_PUBLIC_DUMMY_API}/${url}`);

  if (searchParams)
    Object.keys(searchParams).forEach((key): void => {
      urlModified.searchParams.set(key, searchParams[key]);
    });

  return fetch(urlModified, {
    cache: "force-cache",
  })
    .then((response): Promise<any> => response.json())
    .then((response): any => response.products);
};

export const fetchProductId = async (id: string): Promise<IProduct> =>
  fetch(`${process.env.NEXT_PUBLIC_DUMMY_API}/products/${id}`, { cache: "force-cache" }).then(
    (response): Promise<any> => response.json()
  );

export const fetchCategories = async (): Promise<TCategory[]> =>
  fetch(`${process.env.NEXT_PUBLIC_DUMMY_API}/products/categories`, { cache: "force-cache" }).then(
    (response): Promise<any> => response.json()
  );
