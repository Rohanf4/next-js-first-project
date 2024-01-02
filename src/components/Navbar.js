import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashbord",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center-center container mx-auto">
      <h3 className="text-3xl font-semibold">Next Hero</h3>
      <ul className="flex justify-center  items-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <NavLink exact={ path === '/'} activeClassName="text-blue-500" href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
