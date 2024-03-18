import HeaderCategoryMenu from "components/header/header_category_menu";
import HeaderSearchForm from "components/header/header_search_form";
import HeaderShoppingCart from "components/header/header_shopping_cart";
import Link from "next/link";
import { Suspense } from "react";
import "./css.css";

const Header = () => (
  <header>
    <container>
      <Link href="/" className="logo" scroll={false}>
        <strong>DSTORE</strong>
      </Link>
      <Suspense fallback={<></>}>
        <HeaderSearchForm />
      </Suspense>
      <HeaderShoppingCart />
      <HeaderCategoryMenu />
    </container>
  </header>
);

export default Header;
