import ProductGridContainer, {
  ProductGridContainerFallback,
} from "components/product_grid_container";
import { Metadata } from "next";
import { Suspense } from "react";
import { uuidv4 } from "utils/utils_helper";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> => {
  return (
    <section className="page-content">
      <h1 className="w-full text-[1.5rem]">
        <strong>Search result:&nbsp;</strong>
        <p className="inline-block break-all font-[500]">{searchParams.keyword}</p>
      </h1>
      <Suspense key={uuidv4()} fallback={<ProductGridContainerFallback />}>
        <ProductGridContainer
          url="products/search"
          searchParams={{ q: searchParams.keyword, limit: 12, skip: 0 }}
          loadMore
        />
      </Suspense>
    </section>
  );
};

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> => ({
  title: `${process.env.NEXT_PUBLIC_APP_TITLE} - Search: ${searchParams.keyword}`,
  description: `Search ${searchParams.keyword}`,
  openGraph: {},
});

export default SearchPage;
