"use client";

import { MdMenu } from "react-icons/md";
import { addClassToElement } from "utils/utils_helper";

const HeaderCategoryMenu = () => (
  <div
    className="header-category-menu"
    onClick={() => addClassToElement("asideCategoryMobile", "open")}
  >
    <MdMenu className="text-[1.5rem] md:text-[1.8rem]" />
  </div>
);

export default HeaderCategoryMenu;
