import type { IconProps } from "./types";

export default function PeopleIcon({ className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M2.5 19c.5-3.6 2.5-5.5 5.5-5.5s5 1.9 5.5 5.5" />
      <path d="M13.5 14.5c.8-.6 1.7-.9 2.8-.9 2.6 0 4.3 1.7 4.7 4.4" />
    </svg>
  );
}
