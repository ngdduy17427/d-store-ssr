"use client";

import { MdClose } from "react-icons/md";
import { removeClassFromElement } from "utils/utils_helper";

const AsideCategoryCloseBtn = () => (
  <MdClose
    className="cursor-pointer text-[1.8rem]"
    onClick={() => removeClassFromElement("asideCategoryMobile", "open")}
  />
);

export default AsideCategoryCloseBtn;
