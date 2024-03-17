"use client";

import { useEffect } from "react";

const AdBanner = (props: any) => {
  useEffect(() => {
    try {
      if (typeof window === "object") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <ins className="adsbygoogle" style={{ display: "block" }} {...props} />;
};

export default AdBanner;
