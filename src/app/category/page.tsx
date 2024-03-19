import ProductGridContainer, {
  ProductGridContainerFallback,
} from "components/product_grid_container";
import { Metadata } from "next";
import { Suspense } from "react";
import { uuidv4 } from "utils/utils_helper";

export const dynamic = "force-dynamic";

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
    <Suspense key={uuidv4()} fallback={<ProductGridContainerFallback />}>
      <ProductGridContainer
        url={`products/category/${searchParams.keyword}`}
        searchParams={{ limit: 12, skip: 0 }}
        loadMore
      />
    </Suspense>
  </section>
);

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> => ({
  title: `${process.env.NEXT_PUBLIC_APP_TITLE} - Category: ${searchParams.keyword}`,
  description: `Category ${searchParams.keyword}`,
  openGraph: {},
});

export default CategoryPage;
