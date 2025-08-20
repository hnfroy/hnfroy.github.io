import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icon menu & close

const links = [
  { name: "Me", path: "/" },
  { name: "Skillsets", path: "/skills" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
  { name: "Check CV", path: "/cv" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-4">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center block-logo bg-yellow-dent">
          <img
            src="assets\media\img\logoH.png"
            alt="Logo"
            className="h-14 w-auto"
          />
        </div>

        <div className="mr-12 hidden md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => {
                if (link.name === "Check CV") {
                  return `px-5 py-2 bg-mint border-3 rounded-xl -ml-[8px] font-pixel text-sm transition
                    ${isActive ? "text-dark" : "hover:bg-lime-500"}`;
                }

                return `pl-5 pr-6 py-2 bg-white border-y-3 border-l-3 rounded-l-xl -ml-[10px] font-pixel text-sm transition 
                  ${isActive ? "bg-neonpink text-dark" : "hover:bg-pink-400"}`;
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          className="mr-6 md:hidden bg-white p-2 rounded-xl border-3 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-black/90 py-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-heading text-base uppercase transition ${
                  isActive
                    ? "text-pink-400"
                    : "text-white hover:text-cyan-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
