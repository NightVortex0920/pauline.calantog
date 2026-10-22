"use client";

import React from "react";

export default function IconWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span suppressHydrationWarning className={className} {...props}>
      {children}
    </span>
  );
}
