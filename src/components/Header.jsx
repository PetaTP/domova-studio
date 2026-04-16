import LanguageToggle from "./LanguageToggle";

export default function Header({ t, language, setLanguage, smoothScroll }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ef]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="text-sm font-medium uppercase tracking-[0.22em] text-[#5f6b73]"
        >
          Domova Studio
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("#work");
              }}
              className="text-sm text-[#44515a] transition hover:text-[#1f2a33]"
            >
              {t.navWork}
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("#about");
              }}
              className="text-sm text-[#44515a] transition hover:text-[#1f2a33]"
            >
              {t.navAbout}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("#contact");
              }}
              className="text-sm text-[#44515a] transition hover:text-[#1f2a33]"
            >
              {t.navContact}
            </a>
          </nav>

          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
}