import Image from "next/image";
import Link from "next/link";

const NotFound = () => (
  <div className="relative flex w-full flex-1 flex-col items-center gap-4 py-4">
    <Image
      src="/images/not-found.png"
      alt="Not found"
      width={200}
      height={200}
      quality={100}
      priority
    />
    <p>The page you were looking for does not exist.</p>
    <Link
      href="/"
      className="text-[1rem] text-color-link underline hover:text-color-link-hover md:text-[1.25rem]"
    >
      Return to Homepage
    </Link>
  </div>
);

export default NotFound;
