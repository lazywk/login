import type { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
