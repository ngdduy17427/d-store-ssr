import BtnAddToCart, { BtnAddToCartSkeleton } from "components/btn_add_to_cart";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "utils/utils_helper";
import "./css.css";

export const ProductCardSkeleton = () => (
  <article className="product-card">
    <div className="product-card-thumb skeleton" />
    <div className="product-card-description skeleton h-[100px]" />
    <BtnAddToCartSkeleton />
  </article>
);

const ProductCard = ({ product }: { product: any }) => (
  <article className="product-card">
    {product.isSale && <span className="product-card-badge">Sale</span>}
    <Link href={`/product/${product.id}`} className="product-card-thumb">
      <Image
        src={product.thumbnail}
        alt={product.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        quality={100}
        priority
      />
    </Link>
    <div className="product-card-description">
      <Link href={`/product/${product.id}`} className="title">
        <strong>{product.title}</strong>
      </Link>
      <p className="price">
        {formatCurrency(product.price, "en-US", { style: "currency", currency: "USD" })}
      </p>
      <p className="description">
        <small>{product.description}</small>
      </p>
    </div>
    <BtnAddToCart product={product} />
  </article>
);

export default ProductCard;
