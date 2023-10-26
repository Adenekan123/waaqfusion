import { ReactNode } from "react";
export enum PartnerExperience {
  "no_experience" = "i have no experiance",
  "zero_to_two" = "0 to 2 years",
  "three_to_five" = "3 to 5 years",
  "five above" = "more than 5 yeares",
}
export enum PartnerHelpType {
  "start_academy" = "Looking to start your own Robotics and Coding",
  "shool_sales" = "Looking to get into school sales",
}

export interface ICustomButton {
  title: ReactNode;
  styles?: string;
  gradient?: string;
  whenClicked?: () => void;
}

export interface IContainer {
  children: ReactNode;
  styles?: string;
}
export interface IFrameImage {
  image: string;
  styles?: string;
}
export interface IStack {
  direction?: string;
  gap?: string;
  children: ReactNode;
  styles?: string;
}
export interface IHeading {
  title: string;
  styles?: string;
  type?: number;
}
export interface IBody extends IHeading {
  hasEntity?: boolean;
}
export interface IHeroWall {
  children: ReactNode;
  styles?: string;
  color?: string;
  gradient?: string;
}
export interface IHeroSub {
  page: string;
  color?: string;
  gradient?: string;
}
export interface IProductPrice {
  curr: number;
  prev: number;
  discount: number;
}
export interface IProductRating {
  rating: number;
  total_reviews: number;
}
export interface IProductCard {
  image: string;
  tag: string;
  age_range: string;
  name: string;
  ratings: IProductRating;
  price: IProductPrice;
}

export interface INav {
  title: string;
  url: string;
}

export interface INavigation extends INav {
  list?: INav[];
  close?: () => void;
}

export interface IPartnershipForm {
  name: string;
  email: string;
  phone: string;
  city_state_residence: string;
  experience: PartnerExperience | 'please select';
  help_type: PartnerHelpType | null;
  invest_amount: string;
  organization: string;
  note: string;
}
