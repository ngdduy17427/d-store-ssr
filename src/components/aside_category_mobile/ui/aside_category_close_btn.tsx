"use client";

import { MdClose } from "react-icons/md";
import { removeClassFromElement } from "utils/utils_helper";

const AsideCategoryCloseBtn = (): JSX.Element => (
  <MdClose
    className="cursor-pointer text-[1.8rem]"
    onClick={(): void => removeClassFromElement("asideCategoryMobile", "open")}
  />
);

export default AsideCategoryCloseBtn;
