import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
}

export interface NavigationCategory {
  title: string;
  icon: LucideIcon;
  prefix: string;
  items: NavigationItem[];
  id?: string; // For direct tabs like News
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
}
