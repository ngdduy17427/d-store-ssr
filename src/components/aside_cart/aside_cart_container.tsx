"use client";

import ProductCardAside from "components/product_card_aside";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { formatCurrency } from "utils/utils_helper";
import { handleCloseAsideCart, handleOpenAsideCartCheckout } from ".";

const AsideCartContainer = ({
  itemsInCart,
  totalPrice,
}: {
  itemsInCart: any[];
  totalPrice: number;
}) => (
  <div id="asideCartContainer" className="aside-cart-container">
    <div className="aside-cart-header">
      <h1 className="text-[1.5rem] font-bold">Shopping Cart</h1>
      <MdClose className="cursor-pointer text-[1.8rem]" onClick={handleCloseAsideCart} />
    </div>
    <div className="aside-cart-content">
      {itemsInCart?.length > 0 ? (
        itemsInCart?.map((item) => <ProductCardAside key={item.id} product={item} />)
      ) : (
        <Image
          src="/images/no-cart.png"
          alt="No cart"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={100}
          priority
        />
      )}
    </div>
    <div className="aside-cart-footer">
      <button
        type="button"
        className="btn-checkout"
        onClick={handleOpenAsideCartCheckout}
        disabled={itemsInCart?.length === 0}
      >
        <p>Proceed To Checkout</p>
        <p>{formatCurrency(totalPrice, "en-US", { style: "currency", currency: "USD" })}</p>
      </button>
    </div>
  </div>
);

export default AsideCartContainer;
