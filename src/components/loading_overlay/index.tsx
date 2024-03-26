import classNames from "classnames";
import Image from "next/image";
import "./css.css";

const LoadingOverlay = ({ className }: { className?: string }) => (
  <div id="loadingOverlay" className={classNames("loading-overlay", className)}>
    <Image
      src="/svgs/loading.svg"
      alt="Checkout loading"
      width={200}
      height={200}
      quality={100}
      priority
    />
  </div>
);

export default LoadingOverlay;
