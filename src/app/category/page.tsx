import ProductGridContainer from "components/product_grid_container";
import { Metadata } from "next";

const CategoryPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => (
  <section className="page-content">
    <h1 className="w-full text-[1.5rem]">
      <strong>Category:</strong>&nbsp;
      <p className="inline-block break-all font-[500]">{searchParams.keyword}</p>
    </h1>
    <ProductGridContainer
      url={`products/category/${searchParams.keyword}`}
      searchParams={{ limit: 12, skip: 0 }}
      loadMore
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
