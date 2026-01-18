import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const navItems = [
    { href: "/projects", label: "projects" },
    { href: "/certificates", label: "certificates" },
    { href: "/resume", label: "resume" },
    { href: "/about", label: "about" },
  ];
  return (
    <div className="w-full h-fit flex items-center justify-between">
      <ul className="flex text-xl gap-18">
        {navItems.map((items) => (
          <li
            className={`${pathName === items.href ? "border-b-3 border-[#157145]" : "pb-2"}`}
            key={items.href}
          >
            <Link href={items.href}>{items.label}</Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
