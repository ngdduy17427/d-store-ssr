"use client";

import countries from "components/aside_cart/countries";
import ProductCardAside from "components/product_card_aside";
import { useState } from "react";
import { MdClose, MdCreditCardOff } from "react-icons/md";
import {
  addClassToElement,
  formatCurrency,
  removeClassFromElement,
  removeLocalStorage,
  uuidv4,
} from "utils/utils_helper";
import { handleCloseAsideCartCheckout } from "..";

const shippingCost = 1;

const AsideCartCheckout = ({
  itemsInCart,
  totalPrice,
}: {
  itemsInCart: any[];
  totalPrice: number;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    country: "VN",
    phone: "",
  });

  const handleChangeFormData = (key: string, value: string) => {
    if (document.getElementById("customerForm")?.classList.contains("error"))
      removeClassFromElement("customerForm", "error");

    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (formData.name === "" || formData.address === "" || formData.phone === "") {
      document.getElementById("asideCartCheckoutContent")?.scrollTo({ top: 0, behavior: "smooth" });
      return addClassToElement("customerForm", "error");
    }

    addClassToElement("loadingOverlay", "show");
    setTimeout(() => {
      removeClassFromElement("loadingOverlay", "show");
      handleCloseAsideCartCheckout();
      setFormData((prevState) => ({
        ...prevState,
        name: "",
        address: "",
        country: "VN",
        phone: "",
      }));
      removeLocalStorage("itemsInCart");
      (document.getElementById("dialogThankYou") as HTMLDialogElement)?.showModal();
    }, 2000);
  };

  return (
    <div id="asideCartCheckout" className="aside-cart-container aside-cart-checkout">
      <div className="aside-cart-header">
        <h1 className="text-[1.5rem] font-bold">Checkout</h1>
        <MdClose className="cursor-pointer text-[1.8rem]" onClick={handleCloseAsideCartCheckout} />
      </div>
      <div
        id="asideCartCheckoutContent"
        className="aside-cart-content flex flex-col gap-2 p-4 md:gap-4"
      >
        <h1 className="text-[1.25rem]">
          <strong>Customer Info</strong>
        </h1>
        <form id="customerForm" className="customer-form">
          <label className="form-field">
            <input
              id="customerName"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(event) => handleChangeFormData("name", event.target.value)}
            />
          </label>
          <label className="form-field">
            <input
              id="customerAddress"
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(event) => handleChangeFormData("address", event.target.value)}
            />
          </label>
          <label className="form-field">
            <select
              id="customerCountry"
              value={formData.country}
              onChange={(event) => handleChangeFormData("country", event.target.value)}
            >
              <option key={uuidv4()} value="defaultValue">
                Select country...
              </option>
              {countries.map((country) => (
                <option key={uuidv4()} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>
          <label className="form-field">
            <input
              id="customerPhone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(event) => handleChangeFormData("phone", event.target.value)}
            />
          </label>
        </form>
        <h1 className="text-[1.25rem]">
          <strong>Payment Info</strong>
        </h1>
        <div className="payment-alert-box">
          <MdCreditCardOff />
          <p>This store can’t accept payments right now.</p>
        </div>
        <h1 className="text-[1.25rem]">
          <strong>Order summary</strong>
        </h1>
        {itemsInCart?.map((item) => <ProductCardAside key={item.id} product={item} />)}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{formatCurrency(totalPrice, "en-US", { style: "currency", currency: "USD" })}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>{formatCurrency(shippingCost, "en-US", { style: "currency", currency: "USD" })}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[1.25rem] font-bold">Total</p>
          <p className="text-[1.25rem]">
            <strong>
              {formatCurrency(totalPrice + shippingCost, "en-US", {
                style: "currency",
                currency: "USD",
              })}
            </strong>
          </p>
        </div>
      </div>
      <div className="aside-cart-footer">
        <button
          type="button"
          className="btn-checkout"
          onClick={onSubmit}
          disabled={itemsInCart?.length === 0}
        >
          <p>Make an Order</p>
          <p>
            {formatCurrency(totalPrice + shippingCost, "en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </button>
      </div>
    </div>
  );
};

export default AsideCartCheckout;
