import AsideCart from "components/aside_cart";
import AsideCategory from "components/aside_category";
import AsideCategoryMobile from "components/aside_category_mobile";
import BtnScrollTop from "components/btn_scroll_top";
import Footer from "components/footer";
import Header from "components/header";
import Main from "components/main";
import "css/global.css";
import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  openGraph: {},
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <html lang="en">
    <body>
      <NextTopLoader showSpinner={false} zIndex={10000} />
      <Header />
      <Main>
        <AsideCategory />
        {children}
      </Main>
      <Footer />
      <AsideCart />
      <BtnScrollTop />
      <AsideCategoryMobile />
    </body>
  </html>
);

export default RootLayout;
