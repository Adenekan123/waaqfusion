import { INavigation } from "@/types";

export const navigations:INavigation[] = [
  { title: "home", url: "/" },
  { title: "about us", url: "/about-us" },
  {
    title: "shop",
    url: "/shop",
    list: [
      { title: "kits", url: "/shop?f=kits" },
      { title: "courses", url: "/shop?f=courses" },
      { title: "accessories", url: "/shop?f=accessories" },
    ],
  },
  {
    title: "solutions",
    url: "/#",
    list: [
      { title: "schools", url: "#" },
      { title: "partners", url: "#" },
      { title: "labs", url: "#" },
      { title: "robotics classroom bundle", url: "#" },
    ],
  },
];
