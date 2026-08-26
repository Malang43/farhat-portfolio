import {
  Menu,
  X,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import {
  useState,
} from "react";

import {
  socialLinks,
} from "../data/socialLinks";


const links = [
  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "About",
    href: "#about",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];


export default function Navbar() {

  const [
    open,
    setOpen,
  ] = useState(false);


  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#332A24] bg-[#0B0A09]/95 backdrop-blur-xl">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">


        {/* LOGO */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E87524]/40 bg-[#E87524]/10 text-sm font-black text-[#FF8A32] transition group-hover:border-[#FF8A32] group-hover:bg-[#E87524]/20">
            FM
          </div>


          <span className="hidden text-sm font-semibold tracking-wide text-[#F2ECE6] transition group-hover:text-[#FF8A32] sm:block">
            M Farhat Mehdi
          </span>

        </a>


        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">

          {links.map(
            (link) => (

              <a
                key={link.label}
                href={link.href}
                className="group relative py-2 text-sm font-semibold text-[#D8D0C7] transition hover:text-[#FF8A32]"
              >

                {link.label}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E87524] transition-all duration-300 group-hover:w-full" />

              </a>

            ),
          )}

        </div>


        {/* DESKTOP SOCIAL BUTTONS */}
        <div className="hidden items-center gap-2 lg:flex">

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#332A24] bg-[#151210] text-[#D8D0C7] transition hover:-translate-y-0.5 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
          >
            <FaGithub size={18} />
          </a>


          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#332A24] bg-[#151210] text-[#D8D0C7] transition hover:-translate-y-0.5 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
          >
            <FaLinkedin size={18} />
          </a>


          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Open WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#332A24] bg-[#151210] text-[#D8D0C7] transition hover:-translate-y-0.5 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
          >
            <FaWhatsapp size={18} />
          </a>


          <a
            href="#contact"
            className="ml-1 rounded-lg bg-[#E87524] px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF8A32]"
          >
            Contact
          </a>

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() =>
            setOpen((current) =>
              !current
            )
          }
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#332A24] bg-[#151210] text-[#F7F3ED] transition hover:border-[#E87524]/60 hover:text-[#FF8A32] lg:hidden"
        >

          {open
            ? <X size={22} />
            : <Menu size={22} />
          }

        </button>

      </nav>


      {/* MOBILE MENU */}
      {open && (

        <div
          id="mobile-navigation"
          className="border-t border-[#332A24] bg-[#0B0A09] px-5 py-4 sm:px-6 lg:hidden"
        >

          <div className="flex flex-col">

            {links.map(
              (link) => (

                <a
                  key={link.label}
                  href={link.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex min-h-11 items-center border-b border-[#241F1B] font-semibold text-[#D8D0C7] transition hover:translate-x-1 hover:text-[#FF8A32]"
                >

                  {link.label}

                </a>

              ),
            )}


            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex min-h-11 items-center gap-2 font-semibold text-[#FF8A32]"
            >

              <FaWhatsapp size={18} />

              WhatsApp

            </a>

          </div>

        </div>

      )}

    </header>
  );
}