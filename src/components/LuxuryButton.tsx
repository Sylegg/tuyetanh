import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "gold" | "glass";
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "gold" | "glass";
};

const classes = {
  gold: "luxury-button luxury-button-gold",
  glass: "luxury-button luxury-button-glass",
};

export function LuxuryButton({ children, variant = "gold", className = "", ...props }: ButtonProps) {
  return (
    <button className={`${classes[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LuxuryLink({ children, variant = "gold", className = "", ...props }: AnchorProps) {
  return (
    <a className={`${classes[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
