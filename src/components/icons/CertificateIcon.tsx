import type { IconProps } from "./types";

export default function CertificateIcon({ className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <rect x="4" y="3" width="13" height="17" rx="2" />
      <path d="M8 8h5" /><path d="M8 12h4" />
      <circle cx="17.5" cy="16.5" r="3.5" />
      <path d="m15.5 19.2-.5 2.3 2.5-1.2 2.5 1.2-.5-2.3" />
    </svg>
  );
}
