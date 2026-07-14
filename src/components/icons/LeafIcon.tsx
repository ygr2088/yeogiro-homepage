import type { IconProps } from "./types";

export default function LeafIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}
      aria-hidden="true" {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5.5 20 2 20 2c0 5.5-1.7 10.4-5.2 13.2A7 7 0 0 1 11 20Z" />
      <path d="M2 21c0-3 1.8-5.4 5-7" />
    </svg>
  );
}
