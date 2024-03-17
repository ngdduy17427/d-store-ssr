import Link from "next/link";
import "./css.css";

const Footer = () => (
  <footer>
    <container>
      <p>From </p>
      <Link href="https://d-desk.vercel.app" target="_blank" className="mx-1">
        D-Tech
      </Link>
      <p>with ❤️</p>
    </container>
  </footer>
);

export default Footer;
