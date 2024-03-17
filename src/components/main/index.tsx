import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./css.css";

const Main = ({
  children,
  className,
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
  <main className={className}>
    <container className="flex gap-4">{children}</container>
  </main>
);

export default Main;
