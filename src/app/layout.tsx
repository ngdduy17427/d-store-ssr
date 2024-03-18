import AsideCart from "components/aside_cart";
import AsideCategory from "components/aside_category";
import AsideCategoryMobile from "components/aside_category_mobile";
import BtnScrollTop from "components/btn_scroll_top";
import Footer from "components/footer";
import Header from "components/header";
import Main from "components/main";
import "css/globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "D-Store",
  description: "D-Store eCommerce template",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <NextTopLoader showSpinner={false} zIndex={10000} />
      <Header />
      <Main>
        <AsideCategory />
        {children}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
          crossOrigin="anonymous"
        />
      </Main>
      <Footer />
      <BtnScrollTop />
      <AsideCategoryMobile />
      <AsideCart />
    </body>
  </html>
);

export default RootLayout;
