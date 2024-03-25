import HeaderCategoryMenu from "components/header/ui/header_category_menu";
import HeaderSearchForm, {
  HeaderSearchFormFallback,
} from "components/header/ui/header_search_form";
import HeaderShoppingCart from "components/header/ui/header_shopping_cart";
import Link from "next/link";
import { Suspense } from "react";
import { uuidv4 } from "utils/utils_helper";
import "./css.css";

const Header = () => (
  <header>
    <container>
      <Link href="/" className="logo">
        <strong>DSTORE</strong>
      </Link>
      <Suspense key={uuidv4()} fallback={<HeaderSearchFormFallback />}>
        <HeaderSearchForm />
      </Suspense>
      <HeaderShoppingCart />
      <HeaderCategoryMenu />
    </container>
  </header>
);

export default Header;
