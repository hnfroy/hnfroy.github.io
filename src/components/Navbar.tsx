import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Me", path: "#me" },
  { name: "Skillsets", path: "#skillsets" },
  { name: "Works", path: "#works" },
  { name: "Contact", path: "#contact" },
  { name: "Check CV", path: "public/CV_M-Hanif-Royyan-R.pdf" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 pt-4 transition backdrop-blur-md ${
        scrolled ? "bg-white/05" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center block-logo bg-yellow-dent">
          <img
            src="assets/media/img/logoH.png"
            alt="Logo"
            className="h-8 md:h-14 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="mr-8 md:mr-12 hidden md:flex">
          {links.map((link) => {
            if (link.path.startsWith("#")) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className="pl-5 pr-6 py-2 bg-white border-y-3 border-l-3 rounded-l-xl -ml-[10px] font-pixel text-sm transition hover:bg-pink-400"
                >
                  {link.name}
                </a>
              );
            }

            if (link.name === "Check CV") {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-mint border-3 rounded-xl -ml-[8px] font-pixel text-sm transition hover:bg-lime-500"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className="px-5 py-2 bg-white border-y-3 border-l-3 rounded-l-xl font-pixel text-sm transition hover:bg-pink-400"
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          className="mr-6 md:hidden bg-white p-2 rounded-xl border-3 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-2">
          <div className="flex flex-col items-center gap-4 bg-white py-6 border-3 rounded-xl">
            {links.map((link) => {
              if (link.path.startsWith("#")) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-pixel transition text-black hover:text-pink"
                  >
                    {link.name}
                  </a>
                );
              }

              if (link.name === "Check CV") {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="font-pixel transition text-black hover:text-pink"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-pixel transition text-black hover:text-pink"
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
