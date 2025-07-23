"use client";
import { useWindowSize } from "./hooks/useWindowSize";

import dynamic from "next/dynamic";

const PageDesktop = dynamic(() => import("./layout/PageDesktop"), {
  ssr: false,
});
const PageMobile = dynamic(() => import("./layout/PageMobile"), {
  ssr: false,
});

export default function Home() {
  const size = useWindowSize();

  if (size.width < 768) return <PageMobile />;

  return <PageDesktop />;
}
