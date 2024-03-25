"use client";

import { handleOpenAsideCart } from "components/aside_cart";
import { useLayoutEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { fetchItemsInCart } from "utils/utils_helper";

const HeaderShoppingCart = () => {
  const [itemsInCartLength, setItemsInCartLength] = useState(0);

  const getItemsInCartLength = () => setItemsInCartLength(fetchItemsInCart().length);

  useLayoutEffect(() => {
    getItemsInCartLength();

    window.addEventListener("storage", getItemsInCartLength);
    return () => window.removeEventListener("storage", getItemsInCartLength);
  }, []);

  return (
    <div id="headerShoppingCart" className="header-shopping-cart" onClick={handleOpenAsideCart}>
      <MdOutlineShoppingCart className="text-[1.5rem] md:text-[1.8rem]" />
      {itemsInCartLength > 0 && <span className="count">{itemsInCartLength}</span>}
    </div>
  );
};

export default HeaderShoppingCart;
