"use client";

import { ArrowRight } from "lucide-react";

interface CalendlyButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "default" | "lg";
  variant?: "primary" | "outline";
}

export default function CalendlyButton({
  children = "Book Free Demo",
  className = "",
  style,
  size = "default",
  variant = "primary",
}: CalendlyButtonProps) {
  const handleClick = () => {
    (window as any).Calendly?.initPopupWidget({
      url: "https://calendly.com/business-srisaamba/30min",
    });
  };

  const base =
    "inline-flex items-center gap-2 font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer";

  const sizeClass =
    size === "lg"
      ? "px-8 py-3.5 rounded-full text-sm"
      : size === "sm"
      ? "px-4 py-2 rounded-lg text-sm"
      : "px-6 py-2.5 rounded-full text-sm";

  const variantStyle =
    variant === "primary"
      ? {
          background: "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)",
          boxShadow: "0 0 24px rgba(255,92,26,0.3)",
          ...style,
        }
      : {
          border: "1px solid rgba(255,92,26,0.3)",
          color: "#FF5C1A",
          background: "transparent",
          ...style,
        };

  return (
    <button
      onClick={handleClick}
      className={`${base} ${sizeClass} ${className}`}
      style={variantStyle}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}
