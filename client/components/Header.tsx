import { useEffect, useState } from "react";
import Logo from "./Logo";

interface HeaderProps {
  active?: string;
}

export default function Header({ active = "home" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (key: string) =>
    `${active === key ? "text-dev-white" : "text-dev-gray"} font-fira-code text-base font-${
      active === key ? "medium" : "normal"
    }`;

  const NavLinks = (
    <>
      <a href="/" className="flex items-start" onClick={() => setOpen(false)}>
        <span className="text-dev-primary font-fira-code text-base font-medium">#</span>
        <span className={linkClass("home")}>home</span>
      </a>
      <a href="/projects" className="flex items-start" onClick={() => setOpen(false)}>
        <span className="text-dev-primary font-fira-code text-base font-normal">#</span>
        <span className={linkClass("projects")}>works</span>
      </a>
      <a href="/#about-me" className="flex items-start" onClick={() => setOpen(false)}>
        <span className="text-dev-primary font-fira-code text-base font-normal">#</span>
        <span className={linkClass("about-me")}>about-me</span>
      </a>
      <a href="/contacts" className="flex items-start" onClick={() => setOpen(false)}>
        <span className="text-dev-primary font-fira-code text-base font-normal">#</span>
        <span className={linkClass("contacts")}>contacts</span>
      </a>
    </>
  );

  return (
    <header className="flex justify-between items-center py-6">
      <div className="flex items-center gap-2">
        <Logo />
        <span className="text-dev-white font-fira-code text-base font-bold">Yash Shankaram</span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-start gap-8">
        {NavLinks}
        <div className="flex items-center gap-1">
          
          <div className="flex flex-col gap-1">
            <div className="w-2 h-0 border-t border-dev-gray" />
            <div className="w-2 h-0 border-t border-dev-gray" />
          </div>
        </div>
      </nav>

      {/* Mobile hamburger */}
      <button
        aria-label="Menu"
        className="md:hidden text-dev-white text-2xl"
        onClick={() => setOpen(true)}
      >
        ≡
      </button>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-dev-bg/95 backdrop-blur-sm">
          <div className="max-w-[1366px] mx-auto px-4 lg:px-[171px] h-full flex flex-col">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="text-dev-white font-fira-code text-base font-bold">Yash</span>
              </div>
              <button
                aria-label="Close"
                className="text-dev-white text-2xl"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-8 justify-start">
              <a href="/" className="text-3xl" onClick={() => setOpen(false)}>
                <span className="text-dev-primary">#</span> <span className={linkClass("home")}>home</span>
              </a>
              <a href="/projects" className="text-3xl" onClick={() => setOpen(false)}>
                <span className="text-dev-primary">#</span> <span className={linkClass("projects")}>works</span>
              </a>
              <a href="/#about-me" className="text-3xl" onClick={() => setOpen(false)}>
                <span className="text-dev-primary">#</span> <span className={linkClass("about-me")}>about-me</span>
              </a>
              <a href="/contacts" className="text-3xl" onClick={() => setOpen(false)}>
                <span className="text-dev-primary">#</span> <span className={linkClass("contacts")}>contacts</span>
              </a>
              <div className="mt-auto flex gap-6 pb-8">
                <a href="https://github.com/GODseye17" target="_blank" rel="noreferrer">
                  <img src="/images/GGithub.svg" alt="GitHub" className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/yash-shankaram-035426237/" target="_blank" rel="noreferrer">
                  <img src="/images/Llinkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="mailto:yshankaram17@gmail.com">
                  <img src="/images/mail.svg" alt="Email" className="w-8 h-8" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


