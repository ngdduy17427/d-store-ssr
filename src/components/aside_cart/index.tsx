"use client";

import DialogThankYou from "components/dialog_thank_you";
import LoadingOverlay from "components/loading_overlay";
import { useLayoutEffect, useMemo, useState } from "react";
import { addClassToElement, fetchItemsInCart, removeClassFromElement } from "utils/utils_helper";
import AsideCartCheckout from "./aside_cart_checkout";
import AsideCartContainer from "./aside_cart_container";
import "./css.css";

export const handleOpenAsideCart = () => addClassToElement("asideCart", "open-cart");
export const handleCloseAsideCart = () => removeClassFromElement("asideCart", "open-cart");
export const handleOpenAsideCartCheckout = () => addClassToElement("asideCart", "open-checkout");
export const handleCloseAsideCartCheckout = () =>
  removeClassFromElement("asideCart", "open-cart", "open-checkout");

const AsideCart = () => {
  const [itemsInCart, setItemsInCart] = useState<any[]>([]);

  const getItemsInCart = () => setItemsInCart(fetchItemsInCart());

  useLayoutEffect(() => {
    getItemsInCart();

    window.addEventListener("storage", getItemsInCart);
    return () => window.removeEventListener("storage", getItemsInCart);
  }, []);

  const totalPrice = useMemo(
    () => itemsInCart?.reduce((total, item) => item.price * item._amount + total, 0),
    [itemsInCart]
  );

  return (
    <aside id="asideCart" className="aside-cart">
      <AsideCartContainer itemsInCart={itemsInCart} totalPrice={totalPrice} />
      <AsideCartCheckout itemsInCart={itemsInCart} totalPrice={totalPrice} />
      <LoadingOverlay />
      <DialogThankYou />
    </aside>
  );
};

export default AsideCart;
