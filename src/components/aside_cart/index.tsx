"use client";

import { IProduct } from "@type";
import DialogThankYou from "components/aside_cart/ui/dialog_thank_you";
import LoadingOverlay from "components/loading_overlay";
import { useLayoutEffect, useMemo, useState } from "react";
import { addClassToElement, fetchItemsInCart, removeClassFromElement } from "utils/utils_helper";
import "./css.css";
import AsideCartCheckout from "./ui/aside_cart_checkout";
import AsideCartContainer from "./ui/aside_cart_container";

export const handleOpenAsideCart = () => addClassToElement("asideCart", "open-cart");
export const handleCloseAsideCart = () => removeClassFromElement("asideCart", "open-cart");
export const handleOpenAsideCartCheckout = () => addClassToElement("asideCart", "open-checkout");
export const handleCloseAsideCartCheckout = () =>
  removeClassFromElement("asideCart", "open-cart", "open-checkout");

const AsideCart = (): JSX.Element => {
  const [itemsInCart, setItemsInCart] = useState<IProduct[]>([]);

  const getItemsInCart = (): void => setItemsInCart(fetchItemsInCart());

  useLayoutEffect((): (() => void) => {
    getItemsInCart();

    window.addEventListener("storage", getItemsInCart);
    return (): void => window.removeEventListener("storage", getItemsInCart);
  }, []);

  const totalPrice = useMemo(
    (): number =>
      itemsInCart?.reduce((total, item): number => item.price * item._amount + total, 0),
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
