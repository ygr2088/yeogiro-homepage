import type { IconProps } from "./types";

export default function StethoscopeIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}
      aria-hidden="true" {...props}>
      <path d="M6 3v5a6 6 0 0 0 12 0V3" />
      <path d="M8 3H4" />
      <path d="M20 3h-4" />
      <path d="M12 14v3a4 4 0 0 0 4 4h1" />
      <circle cx="19" cy="21" r="2" />
    </svg>
  );
}
