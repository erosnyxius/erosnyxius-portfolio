"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-secondary text-secondary-foreground border-border",
    outline: "border-border text-foreground bg-transparent",
    primary: "bg-foreground/10 text-foreground border-foreground/20",
  };

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
