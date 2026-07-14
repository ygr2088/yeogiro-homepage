import type { IconProps } from "./types";

export default function ToothIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}
      strokeLinecap="round" strokeLinejoin="round" className={className}
      aria-hidden="true" {...props}>
      <path d="M12 4.3c-1.7-1.7-4.8-2.2-6.8-.7C2.1 5.9 3.5 10 4.3 12.7c.7 2.3.9 6.8 2.8 7.2 2.1.5 2.4-5.1 4.9-5.1s2.8 5.6 4.9 5.1c1.9-.4 2.1-4.9 2.8-7.2.8-2.7 2.2-6.8-.9-9.1-2-1.5-5.1-1-6.8.7Z" />
      <path d="M9.3 6.1c1.7.8 3.7.8 5.4 0" />
    </svg>
  );
}
