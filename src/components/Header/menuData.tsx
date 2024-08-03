import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "About Company",
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "Core Values",
        path: "/core-values",
        newTab: false,
      },
      {
        id: 23,
        title: "Credentials",
        path: "/credentials",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/services",
    newTab: false,
  },
];
export default menuData;
