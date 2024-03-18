import { fetchProducts } from "actions";
import ProductGridContainer from "components/product_grid_container";
import RelatedProduct from "components/related_product";
import { Metadata } from "next";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const products: any[] = await fetchProducts("products/search", { q: searchParams.keyword });

  return (
    <section className="flex w-full flex-1 flex-col gap-4 py-4">
      <h1 className="w-full text-[1.5rem]">
        <strong>Search result:</strong>&nbsp;
        <p className="inline-block break-all font-[500]">{searchParams.keyword}</p>
      </h1>
      <ProductGridContainer url="products/search" searchParams={{ q: searchParams.keyword }} />
      <RelatedProduct url={`products/category/${products[0]?.category}`} />
    </section>
  );
};

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> => ({
  title: `D-Store - Search | ${searchParams.keyword}`,
  description: `Search ${searchParams.keyword}`,
  openGraph: {},
});

export default SearchPage;
