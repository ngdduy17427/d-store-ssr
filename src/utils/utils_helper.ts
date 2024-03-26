export function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

export function formatCurrency(
  number: number | bigint,
  locales = "vi-VN",
  options: Intl.NumberFormatOptions = { style: "currency", currency: "VND" }
) {
  return new Intl.NumberFormat(locales, options).format(number);
}

export function addClassToElement(elementId: string, ...classNames: string[]) {
  document.getElementById(elementId)?.classList.add(...classNames);
}

export function removeClassFromElement(elementId: string, ...classNames: string[]) {
  document.getElementById(elementId)?.classList.remove(...classNames);
}

export function fetchItemsInCart() {
  return localStorage.getItem("itemsInCart")
    ? JSON.parse(localStorage.getItem("itemsInCart") as string)
    : [];
}

export function updateLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
  window.dispatchEvent(new Event("storage"));
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event("storage"));
}
