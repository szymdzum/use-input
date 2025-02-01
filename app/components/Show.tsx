import type { ReactNode } from "react";

type ShowProps = {
  if: boolean | undefined;
  children: ReactNode;
};

export const Show = ({ if: condition, children }: ShowProps) => {
  return condition ? <>{children}</> : null;
};

Show.displayName = "Show";
