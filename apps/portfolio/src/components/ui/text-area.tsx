import type * as react from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: react.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "field-sizing-content flex min-h-16 w-full rounded-xl border border-input bg-[rgba(255,255,255,0.055)] px-3 py-2 text-base text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-gray-500 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        className,
      )}
      data-slot="textarea"
      {...props}
    />
  );
}

export { Textarea };
