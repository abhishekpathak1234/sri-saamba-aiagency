"use client";

import { ArrowRight } from "lucide-react";

interface BookDemoButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
}

export default function BookDemoButton({
  children = "Book Free Demo",
  className = "",
  style,
  showArrow = true,
}: BookDemoButtonProps) {
  return (
    <button
      onClick={() => {
        (window as any).Calendly?.initPopupWidget({
          url: "https://calendly.com/business-srisaamba/30min",
        });
        return false;
      }}
      className={className}
      style={style}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 inline ml-2" />}
    </button>
  );
}
