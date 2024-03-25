"use client";

import { useLayoutEffect } from "react";

const ServiceWorker = () => {
  useLayoutEffect(() => {
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/service_worker.js");
  }, []);

  return null;
};

export default ServiceWorker;
