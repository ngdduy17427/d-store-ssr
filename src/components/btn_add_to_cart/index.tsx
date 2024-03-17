"use client";

import { useRef } from "react";
import { MdPlusOne } from "react-icons/md";
import { fetchItemsInCart, updateLocalStorage } from "utils/utils_helper";
import "./css.css";

const BtnAddToCart = ({ product }: { product: any }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleAddProductCartAnimation = async () => {
    const parentBtn = btnRef.current?.parentElement;
    const imgElement = document.createElement("img");

    imgElement.src = product.thumbnail;
    imgElement.style.width = `${parentBtn?.getBoundingClientRect().width}px`;
    imgElement.style.height = `${parentBtn?.getBoundingClientRect().height}px`;
    imgElement.className = "!absolute";
    imgElement.style.top = `${window.scrollY + (parentBtn?.getBoundingClientRect().top as number)}px`;
    imgElement.style.left = `${parentBtn?.getBoundingClientRect().left}px`;
    imgElement.style.transition = `all 0.5s`;
    imgElement.style.pointerEvents = `none`;
    imgElement.style.zIndex = `10000`;
    document.getElementsByTagName("main")[0].appendChild(imgElement);

    setTimeout(() => {
      const headerShoppingCart = document.getElementById("headerShoppingCart");

      imgElement.style.width = `20px`;
      imgElement.style.height = `20px`;
      imgElement.style.top = `${
        window.scrollY + (headerShoppingCart?.getBoundingClientRect().top as number)
      }px`;
      imgElement.style.left = `${headerShoppingCart?.getBoundingClientRect().left}px`;
    }, 50);

    return new Promise((resolve) =>
      setTimeout(
        () => resolve(document.getElementsByTagName("main")[0].removeChild(imgElement)),
        600
      )
    );
  };

  const handleAddProductCart = () => {
    handleAddProductCartAnimation().then(() => {
      const itemsInCart = fetchItemsInCart();
      const productInCart = itemsInCart?.filter(
        (item: typeof product) => item.id === product.id
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
