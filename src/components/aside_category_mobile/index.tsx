import { fetchCategories } from "actions";
import AsideCategoryCard, { AsideCategoryCardFallback } from "components/aside_category_card";
import { Suspense } from "react";
import { uuidv4 } from "utils/utils_helper";
import AsideCategoryCloseBtn from "./aside_category_close_btn";
import "./css.css";

const AsideCategoryMobile = async () => (
  <aside id="asideCategoryMobile" className="aside-category-mobile">
    <div className="aside-category-mobile-container">
      <div className="aside-category-mobile-header">
        <h1 className="text-[1.5rem] font-bold">Category</h1>
        <AsideCategoryCloseBtn />
      </div>
      <div className="aside-category-mobile-content">
        {(await fetchCategories())?.map((category: string) => (
          <Suspense key={uuidv4()} fallback={<AsideCategoryCardFallback />}>
            <AsideCategoryCard category={category} />
          </Suspense>
        ))}
      </div>
    </div>
  </aside>
);

export default AsideCategoryMobile;