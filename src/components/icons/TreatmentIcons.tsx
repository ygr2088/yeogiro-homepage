import type { SVGProps } from "react";

export type TreatmentIconName =
  | "acupuncture"
  | "hydrotherapy"
  | "laser"
  | "shockwave"
  | "gait"
  | "taping"
  | "dental"
  | "ultrasound";

type Props = SVGProps<SVGSVGElement> & {
  name: TreatmentIconName;
};

function BaseIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function TreatmentIcon({ name, ...props }: Props) {
  if (name === "acupuncture") {
    return (
      <BaseIcon {...props}>
        <path d="M14 40c4-13 12-21 24-21 7 0 12 3 16 8" />
        <path d="M17 40c2 9 8 14 17 14 10 0 17-5 20-15" />
        <path d="M23 27 15 9" />
        <path d="m15 9-5 2 2 5" />
        <path d="m29 24-3-13" />
        <path d="m26 11-5 1 1 5" />
        <circle cx="39" cy="31" r="2" />
        <path d="M44 33c3 1 5 3 7 6" />
      </BaseIcon>
    );
  }

  if (name === "hydrotherapy") {
    return (
      <BaseIcon {...props}>
        <rect x="8" y="12" width="48" height="39" rx="5" />
        <path d="M12 38c6-4 11 4 17 0s11 4 17 0 8 2 10 1" />
        <path d="M23 23h15l6 8H19l4-8Z" />
        <circle cx="26" cy="32" r="2" />
        <circle cx="39" cy="32" r="2" />
      </BaseIcon>
    );
  }

  if (name === "laser") {
    return (
      <BaseIcon {...props}>
        <rect x="11" y="8" width="29" height="42" rx="5" />
        <rect x="16" y="13" width="19" height="12" rx="2" />
        <path d="M18 31h15" />
        <path d="M18 37h9" />
        <path d="M41 22c7 2 10 7 10 14" />
        <path d="m49 38 7 7" />
        <path d="M53 41h6M56 38v6" />
      </BaseIcon>
    );
  }

  if (name === "shockwave") {
    return (
      <BaseIcon {...props}>
        <rect x="9" y="12" width="26" height="37" rx="5" />
        <path d="M14 19h16" />
        <circle cx="17" cy="29" r="2" />
        <circle cx="25" cy="29" r="2" />
        <path d="M36 30c6-1 9 2 11 7" />
        <path d="M47 37 56 52" />
        <path d="m51 43 5-3M53 47l5-3" />
      </BaseIcon>
    );
  }

  if (name === "gait") {
    return (
      <BaseIcon {...props}>
        <path d="M11 43c6-10 13-14 23-14 8 0 14 3 20 10" />
        <path d="M19 43v8M31 41v10M43 42v9" />
        <path d="M14 25c2-9 8-14 17-14 8 0 14 4 19 11" />
        <path d="M15 53h37" />
        <path d="M9 54c5-3 10-3 15 0M27 54c5-3 10-3 15 0" />
      </BaseIcon>
    );
  }

  if (name === "taping") {
    return (
      <BaseIcon {...props}>
        <path d="M17 17c9 2 15 7 18 15" />
        <path d="M47 17c-9 2-15 7-18 15" />
        <path d="M12 35c9-4 15-3 21 4" />
        <path d="M52 35c-9-4-15-3-21 4" />
        <path d="m24 28 16 16" />
        <path d="m40 28-16 16" />
      </BaseIcon>
    );
  }

  if (name === "dental") {
    return (
      <BaseIcon {...props}>
        <path d="M19 12c5-3 9 1 13 1s8-4 13-1c7 4 5 13 2 20-3 9-5 20-11 20-4 0-2-12-4-12s0 12-4 12c-6 0-8-11-11-20-3-7-5-16 2-20Z" />
        <path d="M11 20 6 15M53 20l5-5" />
        <path d="M10 34H4M60 34h-6" />
      </BaseIcon>
    );
  }

  return (
    <BaseIcon {...props}>
      <path d="M9 17h25v31H9z" />
      <path d="M14 22h15v10H14z" />
      <circle cx="17" cy="39" r="2" />
      <circle cx="25" cy="39" r="2" />
      <path d="M35 25c10-1 16 4 16 13" />
      <path d="M51 38c0 5-3 9-8 11" />
      <path d="M43 49 56 55" />
    </BaseIcon>
  );
}
