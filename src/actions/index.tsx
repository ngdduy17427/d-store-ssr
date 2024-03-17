"use server";

export const fetchProducts = async (url: string, searchParams?: any) => {
  const urlModified = new URL(`${process.env.NEXT_PUBLIC_DUMMY_API}/${url}`);

  if (searchParams)
    Object.keys(searchParams).forEach((key) => {
      urlModified.searchParams.set(key, searchParams[key]);
    });

  return fetch(urlModified, {
    cache: "force-cache",
  })
    .then((response) => response.json())
    .then((response) => response.products);
};

export const fetchProductId = async (id: string) =>
  fetch(`${process.env.NEXT_PUBLIC_DUMMY_API}/products/${id}`, { cache: "force-cache" }).then(
    (response) => response.json()
  );

export const fetchCategories = async () =>
  fetch(`${process.env.NEXT_PUBLIC_DUMMY_API}/products/categories`, { cache: "force-cache" }).then(
    (response) => response.json()
  );
