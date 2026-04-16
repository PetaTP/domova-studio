export default function Footer({ t }) {
  return (
    <footer className="border-t border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-[#7a8288] md:flex-row md:items-center md:justify-between md:px-10">
        <p>© 2026 Domova Studio</p>
        <p>{t.footer}</p>
      </div>
    </footer>
  );
}