/**
 * Return an UUID v4
 */
export function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

/**
 * Return `currency` with the given number
 */
export function formatCurrency(
  number: number | bigint,
  locales = "vi-VN",
  options: Intl.NumberFormatOptions = { style: "currency", currency: "VND" }
) {
  return new Intl.NumberFormat(locales, options).format(number);
}

/**
 * Add more class to an element
 */
export function addClassToElement(elementId: string, ...classNames: string[]) {
  document.getElementById(elementId)?.classList.add(...classNames);
}

/**
 * Remove specify class from an element
 */
export function removeClassFromElement(elementId: string, ...classNames: string[]) {
  document.getElementById(elementId)?.classList.remove(...classNames);
}

/**
 * Get all items in cart from local storage
 */
export function fetchItemsInCart() {
  return localStorage.getItem("itemsInCart")
    ? JSON.parse(localStorage.getItem("itemsInCart") as string)
    : [];
}

/**
 * Update local storage with specify key & data
 */
export function updateLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
  window.dispatchEvent(new Event("storage"));
}

/**
 * Update local storage with specify key
 */
export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event("storage"));
}
