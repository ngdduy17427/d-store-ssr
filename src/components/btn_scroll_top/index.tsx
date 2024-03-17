"use client";

import { useLayoutEffect } from "react";
import { MdArrowUpward } from "react-icons/md";
import { addClassToElement, removeClassFromElement } from "utils/utils_helper";
import "./css.css";

const BtnScrollTop = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0 });
  const handleShowBtn = () => {
    if (window.scrollY > 100) addClassToElement("btnScrollTop", "show");
    else removeClassFromElement("btnScrollTop", "show");
  };

  useLayoutEffect(() => {
    handleShowBtn();

    window.addEventListener("scroll", handleShowBtn);
    return () => window.removeEventListener("scroll", handleShowBtn);
  }, []);

  return (
    <button id="btnScrollTop" type="button" className="btn-scroll-top" onClick={handleScrollTop}>
      <MdArrowUpward />
    </button>
  );
};

export default BtnScrollTop;
