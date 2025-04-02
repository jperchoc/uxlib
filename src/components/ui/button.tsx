import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import "../styles/odsButton.modules.scss";


import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "ods-button",
  {
    variants: {
      variant: {
        primary: "ods-button--primary",
        destructive: "ods-button--critical",
        neutral: "ods-button--neutral",
        menu: "border text-primary border-primary border-2 font-semibold hover:bg-primary-100",
      },
      mode: {
        default: "ods-button--default",
        outline: "ods-button--outline",
        ghost: "ods-button--ghost",
        menu: "bg-transparent",
      },
      size: {
        md: "ods-button--md",
        sm: "ods-button--sm",
        lg: "h-11 rounded-md px-8",
        xs: "ods-button--xs",
        menu: "size-8 p-0"
      },
    },
    compoundVariants: [
      {
        variant: "menu",
        mode: "menu",
        className: "rounded-full"
      }
    ],
    defaultVariants: {
      variant: "primary",
      mode: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, mode,  asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, mode }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
