import biscayneFull from "../assets/biscayne-full.png";

export default function FeaturedWork({ t, smoothScroll }) {
  return (
    <section
      id="work"
      className="border-t border-black/5 bg-white/70 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-[0.78rem] uppercase tracking-[0.22em] text-[#8a8f93]">
            {t.workLabel}
          </p>

          <h2 className="text-3xl font-medium leading-tight text-[#22313d] md:text-5xl">
            Biscayne Coast
          </h2>

          <p className="mt-4 text-base leading-8 text-[#5d666d] md:text-lg">
            {t.workText}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.07)]">
            <img
              src={biscayneFull}
              alt="Biscayne Coast featured project"
              className="h-[420px] w-full object-cover object-top"
            />
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-[#f3eee7] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:p-10">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">
                  {t.scope}
                </p>
                <p className="mt-2 text-base leading-7 text-[#455159]">
                  {t.scopeText}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">
                  {t.focus}
                </p>
                <p className="mt-2 text-base leading-7 text-[#455159]">
                  {t.focusText}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">
                  {t.builtWith}
                </p>
                <p className="mt-2 text-base leading-7 text-[#455159]">
                  {t.builtWithText}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://biscayne-coast.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#22313d] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(34,49,61,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_24px_50px_rgba(34,49,61,0.28)] active:scale-[0.98]"
              >
                {t.liveBtn}
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("#contact");
                }}
                className="inline-flex items-center justify-center rounded-full border border-[#d7d2ca] bg-white px-5 py-3 text-sm font-medium text-[#22313d] shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#f8f5f0] hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] active:scale-[0.98]"
              >
                {t.inquireBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}