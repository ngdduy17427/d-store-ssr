import { fetchCategories } from "actions";
import AsideCategoryCard, { AsideCategoryCardFallback } from "components/aside_category_card";
import { Suspense } from "react";
import { uuidv4 } from "utils/utils_helper";
import "./css.css";

const AsideCategory = async () => (
  <aside className="aside-category">
    {(await fetchCategories())?.map((category: string) => (
      <Suspense key={uuidv4()} fallback={<AsideCategoryCardFallback />}>
        <AsideCategoryCard category={category} />
      </Suspense>
    ))}
  </aside>
);

export default AsideCategory;
