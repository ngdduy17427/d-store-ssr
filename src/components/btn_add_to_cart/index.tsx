"use client";

import { IProduct } from "@type";
import { useRef } from "react";
import { MdPlusOne } from "react-icons/md";
import { fetchItemsInCart, updateLocalStorage } from "utils/utils_helper";
import "./css.css";

export const BtnAddToCartSkeleton = (): JSX.Element => (
  <button type="button" className="btn-add-to-cart skeleton" />
);

const BtnAddToCart = ({ product }: { product: IProduct }): JSX.Element => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleAddProductCartAnimation = async (): Promise<HTMLImageElement> => {
    const parentBtn = btnRef.current?.parentElement;
    const imgElement = document.createElement("img");

    imgElement.src = product.thumbnail;
    imgElement.style.width = `${parentBtn?.getBoundingClientRect().width}px`;
    imgElement.style.height = `${parentBtn?.getBoundingClientRect().height}px`;
    imgElement.className = "!absolute";
    imgElement.style.top = `${window.scrollY + Number(parentBtn?.getBoundingClientRect().top)}px`;
    imgElement.style.left = `${parentBtn?.getBoundingClientRect().left}px`;
    imgElement.style.transition = `all 0.5s`;
    imgElement.style.pointerEvents = `none`;
    imgElement.style.zIndex = `10000`;
    document.getElementsByTagName("main")[0].appendChild(imgElement);

    setTimeout((): void => {
      const headerShoppingCart = document.getElementById("headerShoppingCart");

      imgElement.style.width = `20px`;
      imgElement.style.height = `20px`;
      imgElement.style.top = `${
        window.scrollY + Number(headerShoppingCart?.getBoundingClientRect().top)
      }px`;
      imgElement.style.left = `${headerShoppingCart?.getBoundingClientRect().left}px`;
    }, 50);

    return new Promise(
      (resolve): NodeJS.Timeout =>
        setTimeout(
          (): void => resolve(document.getElementsByTagName("main")[0].removeChild(imgElement)),
          600
        )
    );
  };

  const handleAddProductCart = (): void => {
    handleAddProductCartAnimation().then((): void => {
      const itemsInCart = fetchItemsInCart();
      const productInCart = itemsInCart?.filter(
        (item: typeof product): boolean => item.id === product.id
      )[0];

      if (!productInCart) {
        product._amount = 1;
        itemsInCart.push(product);
      } else {
        productInCart._amount += 1;
        itemsInCart[itemsInCart.indexOf(productInCart)] = productInCart;
      }

      updateLocalStorage("itemsInCart", itemsInCart);
    });
  };

  return (
    <button ref={btnRef} type="button" className="btn-add-to-cart" onClick={handleAddProductCart}>
      <p>Add to cart</p>
      <span className="icon">
        <MdPlusOne className="text-[1.15rem] md:text-[1.25rem]" />
      </span>
    </button>
  );
};

export default BtnAddToCart;
