import NavLink from "@/components/NavLink";
import Link from "next/link";
import React from "react";
const navLinks = [
  {
    path: "/dashbord",
    title: "DashBoard",
  },
  {
    path: "/dashbord/mycart",
    title: "My-Cart",
  },
  {
    path: "/dashbord/add-product",
    title: "Add-Product",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside className="mr-20">
      <h1 className="text-3xl font-semibold">DashBoard</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li className="my-2" key={path}>
            <NavLink exact activeClassName="text-blue-500" href={path}>{title}</NavLink>
             </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
