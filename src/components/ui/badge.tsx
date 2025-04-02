import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import "../styles/odsBadge.modules.scss";

const badgeVariants = cva(
  "ods-badge",
  {
    variants: {
      variant: {
        neutral: "ods-badge--neutral",
        primary: "bg-primary-500 !text-white",
        info: "ods-badge--information",
        success: "ods-badge--success",
        warning: "ods-badge--warning",
        destructive: "ods-badge--critical",
        alpha: "ods-badge--alpha",
        beta: "ods-badge--beta",
        new: "ods-badge--new",
        promotion: "ods-badge--promotion",
        outline: "text-foreground border-border"
      },
      size: {
        sm: "ods-badge--sm",
        md: "ods-badge--md",
        lg: "ods-badge--lg",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, size,  ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, className }))} {...props} />
  )
}

export { Badge, badgeVariants }
