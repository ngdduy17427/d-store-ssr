import { IProduct } from "@type";

export function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: string): string =>
    (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(
      16
    )
  );
}

export function formatCurrency(
  number: number | bigint,
  locales = "vi-VN",
  options: Intl.NumberFormatOptions = { style: "currency", currency: "VND" }
): string {
  return new Intl.NumberFormat(locales, options).format(number);
}

export function addClassToElement(elementId: string, ...classNames: string[]): void {
  document.getElementById(elementId)?.classList.add(...classNames);
}

export function removeClassFromElement(elementId: string, ...classNames: string[]): void {
  document.getElementById(elementId)?.classList.remove(...classNames);
}

export function fetchItemsInCart(): IProduct[] {
  return localStorage.getItem("itemsInCart")
    ? JSON.parse(String(localStorage.getItem("itemsInCart")))
    : [];
}

export function updateLocalStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
  window.dispatchEvent(new Event("storage"));
}

export function removeLocalStorage(key: string): void {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event("storage"));
}
