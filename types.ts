import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StepProps {
  number: string;
  title: string;
  desc: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}