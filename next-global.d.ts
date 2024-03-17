declare interface Window {
  adsbygoogle: { [key: string]: unknown }[];
}

declare namespace JSX {
  interface IntrinsicElements {
    container: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
