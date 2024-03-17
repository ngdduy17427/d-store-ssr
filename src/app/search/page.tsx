import { fetchProducts } from "actions";
import AdBanner from "components/ad_banner";
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
    <section className="flex w-full flex-1 flex-col">
      <h1 className="w-full pt-4 text-[1.5rem]">
        <strong>Search result:</strong>&nbsp;
        <p className="inline-block break-all font-[500]">{searchParams.keyword}</p>
      </h1>
      <ProductGridContainer url="products/search" searchParams={{ q: searchParams.keyword }} />
      <AdBanner
        data-ad-client="ca-pub-2444372121300105"
        data-ad-slot="9855515500"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
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
