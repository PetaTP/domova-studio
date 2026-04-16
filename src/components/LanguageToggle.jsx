export default function LanguageToggle({ language, setLanguage }) {
  const languageButtonClass = (value) =>
    `rounded-full px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase transition ${
      language === value
        ? "bg-[#22313d] text-white shadow-[0_8px_18px_rgba(34,49,61,0.18)]"
        : "border border-[#d7d2ca] bg-white text-[#44515a] hover:bg-[#f3efe8]"
    }`;

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={languageButtonClass("en")}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={languageButtonClass("de")}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLanguage("cz")}
        className={languageButtonClass("cz")}
      >
        CZ
      </button>
    </div>
  );
}