import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent",
  {
    variants: {
      variant: {
        neutral: "bg-neutral-100 text-neutral-700",
        primary: "bg-primary-100 text-primary-900",
        success: "bg-success-100 text-success-900",
        warning: "bg-warning-100 text-warning-900",
        destructive: "bg-critical-100 text-critical-900",
        alpha: "bg-alpha text-primary-700",
        beta: "bg-beta text-primary-900",
        new: "bg-new text-primary-900",
        promotion: "bg-promotion text-white",
      },
      size: {
        sm: "h-4 rounded-sm py-0.5 px-1.5 text-sm" ,
        md: "h-5 rounded-sm py-1 px-1.5 text-base",
        lg: "h-7 rounded-sm py-1 px-2 text-lg",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, className }))} {...props} />
  )
}

export { Badge, badgeVariants }
