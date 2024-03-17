"use client";

import classNames from "classnames";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { removeClassFromElement } from "utils/utils_helper";
import "./css.css";

export const AsideCategoryCardFallback = () => <span className="category-card skeleton" />;

const AsideCategoryCard = ({ category }: { category: string }) => {
  const categoryParams = useSearchParams().get("keyword");
  const handleCloseCategory = () => removeClassFromElement("asideCategoryMobile", "open");

  return (
    <Link
      href={`/category?keyword=${category}`}
      className={classNames("category-card", { active: categoryParams === category })}
      onClick={handleCloseCategory}
    >
      <strong>{category}</strong>
    </Link>
  );
};

export default AsideCategoryCard;
