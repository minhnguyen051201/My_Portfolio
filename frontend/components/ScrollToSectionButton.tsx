"use client";

import * as React from "react";

export default function ScrollToSectionButton({
  toId,
  children,
}: {
  toId: string;
  children: React.ReactNode;
}) {
  const onClick = () => {
    const el = document.getElementById(toId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <div onClick={onClick}>{children}</div>;
}
