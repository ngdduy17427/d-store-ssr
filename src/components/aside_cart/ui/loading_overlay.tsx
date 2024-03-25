import Image from "next/image";

const LoadingOverlay = () => (
  <div id="loadingOverlay" className="loading-overlay">
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
