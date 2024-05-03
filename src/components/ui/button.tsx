import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const buttonVariants = cva(
  "sh-inline-flex sh-items-center sh-justify-center sh-whitespace-nowrap sh-rounded-md sh-text-sm sh-font-medium sh-transition-colors focus-visible:sh-outline-none focus-visible:sh-ring-1 focus-visible:sh-ring-ring disabled:sh-pointer-events-none disabled:sh-opacity-50",
  {
    variants: {
      variant: {
        default:
          "sh-bg-primary sh-text-primary-foreground sh-shadow hover:sh-bg-primary/90",
        destructive:
          "sh-bg-destructive sh-text-destructive-foreground sh-shadow-sm hover:sh-bg-destructive/90",
        outline:
          "sh-border sh-border-input sh-bg-background sh-shadow-sm hover:sh-bg-accent hover:sh-text-accent-foreground",
        secondary:
          "sh-bg-secondary sh-text-secondary-foreground sh-shadow-sm hover:sh-bg-secondary/80",
        ghost: "hover:sh-bg-accent hover:sh-text-accent-foreground",
        link: "sh-text-primary sh-underline-offset-4 hover:sh-underline",
      },
      size: {
        default: "sh-h-9 sh-px-4 sh-py-2",
        sm: "sh-h-8 sh-rounded-md sh-px-3 sh-text-xs",
        lg: "sh-h-10 sh-rounded-md sh-px-8",
        icon: "sh-h-9 sh-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
