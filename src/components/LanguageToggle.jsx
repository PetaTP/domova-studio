export default function LanguageToggle({ language, setLanguage }) {
  const buttonClass = (value) =>
    language === value
      ? "rounded-full bg-[#22313d] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white"
      : "rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#6b747a] transition hover:bg-[#f3efe8]";

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[#e5ddd3] bg-white/80 p-1">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={buttonClass("en")}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={buttonClass("de")}
      >
        DE
      </button>

      <button
        type="button"
        onClick={() => setLanguage("cz")}
        className={buttonClass("cz")}
      >
        CZ
      </button>
    </div>
  );
}
