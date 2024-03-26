import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "D-Store SSR",
    short_name: "D-Store SSR",
    description: "D-Store E-commerce SSR template",
    start_url: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#f9f9f9",
    icons: [
      {
        src: "https://assets.vercel.com/image/upload/v1573246280/front/favicon/vercel/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://assets.vercel.com/image/upload/v1573246280/front/favicon/vercel/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
