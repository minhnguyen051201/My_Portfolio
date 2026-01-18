import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  const navItems = [
    { href: "projects", label: "projects" },
    { href: "certificates", label: "certificates" },
    { href: "resume", label: "resume" },
    { href: "about", label: "about" },
  ];
  return (
    <div>
      <ul className="flex text-xl gap-18">
        {navItems.map((items) => (
          <li
            className={`${pathName === items.href ? "text-red-600" : ""}`}
            key={items.href}
          >
            <Link href={items.href}>{items.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
