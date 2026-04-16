export default function ContactSection({ t }) {
  return (
    <section
      id="contact"
      className="border-t border-black/5 bg-white py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="mb-4 text-[0.78rem] uppercase tracking-[0.22em] text-[#8a8f93]">
            {t.contactLabel}
          </p>

          <h2 className="text-3xl font-medium leading-tight text-[#22313d] md:text-5xl">
            {t.contactTitle}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#5d666d] md:text-lg">
            {t.contactText}
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-[#f7f4ef] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-10">
          <div className="grid gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">
                {t.email}
              </p>
              <a
                href="mailto:hello@domovastudio.com"
                className="mt-2 inline-block text-lg text-[#22313d] underline decoration-[#cfc6bb] underline-offset-4"
              >
                hello@domovastudio.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">
                {t.focusLabel}
              </p>
              <p className="mt-2 text-base leading-7 text-[#455159]">
                {t.focusLabelText}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">
                {t.basedOnline}
              </p>
              <p className="mt-2 text-base leading-7 text-[#455159]">
                {t.basedOnlineText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}