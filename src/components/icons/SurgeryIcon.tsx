import * as React from "react";

export type SurgeryIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

export function SurgeryIcon({
  size = 28,
  title = "외과 수술",
  className,
  ...props
}: SurgeryIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path d="M5.4 18.6 17.9 6.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m16.6 4.8 2.6 2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4.6 19.2-.9 2.9 2.9-.9 2.2-2.2-2-2-2.2 2.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.3 21.2H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default SurgeryIcon;
