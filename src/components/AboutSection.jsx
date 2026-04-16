export default function AboutSection({ t }) {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-4 text-[0.78rem] uppercase tracking-[0.22em] text-[#8a8f93]">
            {t.aboutLabel}
          </p>

          <h2 className="text-3xl font-medium leading-tight text-[#22313d] md:text-5xl">
            {t.aboutTitle}
          </h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-[#556067] md:text-lg">
          <p>{t.aboutText1}</p>
          <p>{t.aboutText2}</p>
        </div>
      </div>
    </section>
  );
}