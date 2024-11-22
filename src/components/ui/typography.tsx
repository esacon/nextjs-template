import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7 not-first:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      title: "text-2xl font-bold tracking-tight",
      subtitle: "text-lg text-muted-foreground",
    },
    size: {
      default: "",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
    weight: {
      default: "",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      default: "",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
      accent: "text-accent-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
    size: "default",
    weight: "default",
    align: "left",
    color: "default",
  },
})

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
  color?: VariantProps<typeof typographyVariants>["color"]
}

const variantElementMap: Record<
  NonNullable<TypographyProps["variant"]>,
  React.ElementType
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  blockquote: "blockquote",
  code: "code",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  title: "h2",
  subtitle: "h3",
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, variant = "p", size, weight, align, color, as, ...props },
    ref
  ) => {
    const Comp =
      as ||
      variantElementMap[variant as keyof typeof variantElementMap] ||
      "div"
    return (
      <Comp
        className={cn(
          typographyVariants({ variant, size, weight, align, color, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

export default Typography
