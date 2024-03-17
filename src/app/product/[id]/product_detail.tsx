import BtnAddToCart from "components/btn_add_to_cart";
import Link from "next/link";
import { formatCurrency } from "utils/utils_helper";
import SwiperImage from "./swiper_image";

const ProductDetail = ({ product }: { product: any }) => (
  <article className="product-detail">
    <div className="product-image">
      <SwiperImage images={product.images} />
    </div>
    <div className="product-description">
      <h1 className="title">
        <strong>{product.title}</strong>
      </h1>
      <p className="price">
        <strong>
          {formatCurrency(product.price, "en-US", { style: "currency", currency: "USD" })}
        </strong>
      </p>
      <p className="brand">
        Brand:&nbsp;
        <Link
          href={`/search?keyword=${product.brand}`}
          className="text-color-link hover:text-color-link-hover"
        >
          {product.brand}
        </Link>
      </p>
      <p className="category">
        Category:&nbsp;
        <Link
          href={`/category?keyword=${product.category}`}
          className="text-color-link hover:text-color-link-hover"
        >
          {`#${product.category}`}
        </Link>
      </p>
      <p className="description">{product.description}</p>
      <BtnAddToCart product={product} />
    </div>
  </article>
);

export default ProductDetail;
