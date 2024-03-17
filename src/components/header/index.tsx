import HeaderCategoryMenu from "components/header_category_menu";
import HeaderSearchForm from "components/header_search_form";
import HeaderShoppingCart from "components/header_shopping_cart";
import Link from "next/link";
import "./css.css";

const Header = () => (
  <header>
    <container>
      <Link href="/" className="logo">
        <strong>DSTORE</strong>
      </Link>
      <HeaderSearchForm />
      <HeaderShoppingCart />
      <HeaderCategoryMenu />
    </container>
  </header>
);

export default Header;
