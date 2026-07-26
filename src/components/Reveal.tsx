"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";

type Delay = 1 | 2 | 3;

type RevealProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  delay?: Delay;
  clip?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay,
  clip = false,
  ...rest
}: RevealProps) {
  const classes = [clip ? "clip" : "reveal", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={classes}
      {...(delay ? { "data-d": String(delay) } : {})}
      {...rest}
    >
      {children}
    </Tag>
  );
}
