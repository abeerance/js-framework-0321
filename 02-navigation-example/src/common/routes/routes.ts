import { FC } from "react";
import { About } from "../../pages/about";
import { Blog } from "../../pages/blog";
import { Contact } from "../../pages/contact";
import { Home } from "../../pages/home";
import { Services } from "../../pages/services";

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "services-route",
    title: "Services",
    path: "/services",
    enabled: true,
    component: Services,
  },
  {
    key: "blog-route",
    title: "Blog",
    path: "/blog",
    enabled: true,
    component: Blog,
  },
  {
    key: "about-route",
    title: "About",
    path: "/about",
    enabled: true,
    component: About,
  },
  {
    key: "contact-route",
    title: "Contact",
    path: "/contact",
    enabled: true,
    component: Contact,
  },
];
