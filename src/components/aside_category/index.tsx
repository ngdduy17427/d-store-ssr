import { fetchCategories } from "actions";
import AsideCategoryCard, { AsideCategoryCardFallback } from "components/aside_category_card";
import { Suspense } from "react";
import { uuidv4 } from "utils/utils_helper";
import "./css.css";

const AsideCategoryFallback = (): JSX.Element => (
  <aside className="aside-category">
    {Array(12)
      .fill(null)
      .map(
        (): JSX.Element => (
          <AsideCategoryCardFallback key={uuidv4()} />
        )
      )}
  </aside>
);

const AsideCategory = async (): Promise<JSX.Element> => (
  <Suspense key={uuidv4()} fallback={<AsideCategoryFallback />}>
    <aside className="aside-category">
      {(await fetchCategories())?.map(
        (category: string): JSX.Element => <AsideCategoryCard key={uuidv4()} category={category} />
      )}
    </aside>
  </Suspense>
);

export default AsideCategory;
