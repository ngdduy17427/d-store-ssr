import AdBanner from "components/ad_banner";
import ProductGridContainer from "components/product_grid_container";
import { Metadata } from "next";

const CategoryPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => (
  <section className="flex w-full flex-1 flex-col">
    <h1 className="w-full pt-4 text-[1.5rem]">
      <strong>Category:</strong>&nbsp;
      <p className="inline-block break-all font-[500]">{searchParams.keyword}</p>
    </h1>
    <ProductGridContainer url={`products/category/${searchParams.keyword}`} />
    <AdBanner
      data-ad-client="ca-pub-2444372121300105"
      data-ad-slot="9855515500"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </section>
);

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> => ({
  title: `D-Store - Category | ${searchParams.keyword}`,
  description: `Category ${searchParams.keyword}`,
  openGraph: {},
});

export default CategoryPage;
