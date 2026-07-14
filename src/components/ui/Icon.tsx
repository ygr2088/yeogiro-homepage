import type { ComponentType } from "react";

import {
  ArrowIcon,
  CheckIcon,
  PhoneIcon,
  ToothIcon,
  HeartIcon,
  StethoscopeIcon,
  LeafIcon,
  MenuIcon,
  CloseIcon,
  StarIcon,
  LocationIcon,
  ClockIcon,
  type IconProps,
} from "@/components/icons";

export type IconName =
  | "arrow"
  | "check"
  | "phone"
  | "tooth"
  | "heart"
  | "stethoscope"
  | "leaf"
  | "menu"
  | "close"
  | "star"
  | "location"
  | "clock";

type Props = IconProps & {
  name: IconName;
};

const ICONS = {
  arrow: ArrowIcon,
  check: CheckIcon,
  phone: PhoneIcon,
  tooth: ToothIcon,
  heart: HeartIcon,
  stethoscope: StethoscopeIcon,
  leaf: LeafIcon,
  menu: MenuIcon,
  close: CloseIcon,
  star: StarIcon,
  location: LocationIcon,
  clock: ClockIcon,
} satisfies Record<IconName, ComponentType<IconProps>>;

export function Icon({ name, ...props }: Props) {
  const IconComponent = ICONS[name];
  return <IconComponent {...props} />;
}
