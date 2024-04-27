"use client";

import { IProduct } from "@type";
import { handleCloseAsideCartCheckout } from "components/aside_cart";
import Image from "next/image";
import Link from "next/link";
import { MdAdd, MdClose, MdRemove } from "react-icons/md";
import { fetchItemsInCart, formatCurrency, updateLocalStorage } from "utils/utils_helper";
import "./css.css";

enum UpdateAmountType {
  DECREMENT,
  INCREMENT,
}

const ProductCardAside = ({ product }: { product: IProduct }): JSX.Element => {
  const handleRemoveProduct = (): void => {
    const itemsInCart = fetchItemsInCart();
    const productInCart = itemsInCart?.filter(
      (item: IProduct): boolean => item.id === product.id
    )[0];
    itemsInCart.splice(itemsInCart.indexOf(productInCart), 1);
    updateLocalStorage("itemsInCart", itemsInCart);
  };

  const handleUpdateAmount = (type: UpdateAmountType): void => {
    const itemsInCart = fetchItemsInCart();
    const productInCart = itemsInCart?.filter(
      (item: IProduct): boolean => item.id === product.id
    )[0];

    switch (type) {
      case UpdateAmountType.DECREMENT:
        productInCart._amount -= 1;
        if (productInCart._amount === 0) return handleRemoveProduct();
        break;
      case UpdateAmountType.INCREMENT:
        productInCart._amount += 1;
        break;
      default:
        break;
    }

    itemsInCart[itemsInCart.indexOf(productInCart)] = productInCart;
    updateLocalStorage("itemsInCart", itemsInCart);
  };

  return (
    <article className="product-card-aside">
      <div className="product-card-thumb">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={100}
          priority
        />
        <span className="remove" onClick={handleRemoveProduct}>
          <MdClose />
        </span>
      </div>
      <div className="product-card-description">
        <Link
          href={"/product/" + product.id}
          className="title"
          onClick={handleCloseAsideCartCheckout}
        >
          <strong>{product.title}</strong>
        </Link>
        <p className="price">
          {formatCurrency(product.price, "en-US", { style: "currency", currency: "USD" })}
        </p>
        <div className="product-card-counter">
          <div className="counter">
            <span
              className="counter-update decrement"
              onClick={(): void => handleUpdateAmount(UpdateAmountType.DECREMENT)}
            >
              <MdRemove className="text-[1.25rem]" />
            </span>
            <p className="counter-value">{product._amount}</p>
            <span
              className="counter-update increment"
              onClick={(): void => handleUpdateAmount(UpdateAmountType.INCREMENT)}
            >
              <MdAdd className="text-[1.25rem]" />
            </span>
          </div>
          <p className="amount">
            {formatCurrency(product.price * product._amount, "en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCardAside;
