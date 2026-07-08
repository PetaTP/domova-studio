export default function Footer({ t }) {
  return (
    <footer className="border-t border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Final CTA */}
        <div className="mb-12 rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <h3 className="text-3xl font-medium text-[#22313d]">
            Ready to elevate your digital presence?
          </h3>

          <p className="mt-4 text-[#7a8288]">
            Book a complimentary 20-minute website strategy session.
          </p>

          <a
            href="https://calendly.com/hello-domova/free-website-strategy-call-20-min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#22313d] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(34,49,61,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_24px_50px_rgba(34,49,61,0.28)] active:scale-[0.98]"
          >
            Book a Free Strategy Call
          </a>

          <p className="mt-6 text-sm text-[#7a8288]">
            Or email us directly at{" "}
            <a
              href="mailto:hello@domovastudio.com"
              className="font-medium text-[#22313d] transition-colors hover:opacity-70"
            >
              hello@domovastudio.com
            </a>
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-3 border-t border-black/5 pt-6 text-sm text-[#7a8288] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Domova Studio</p>

          <p>{t.footer}</p>
        </div>
      </div>
    </footer>
  );
}