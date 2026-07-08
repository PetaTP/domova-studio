import biscayneHero from "../assets/biscayne-hero.png";
import biscayneMobile from "../assets/biscayne-mobile.png";
import biscayneGallery from "../assets/biscayne-gallery.png";

export default function HeroSection({ t, smoothScroll }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16">
      <div>
        <p className="mb-5 text-[0.78rem] uppercase tracking-[0.22em] text-[#8a8f93]">
          {t.heroLabel}
        </p>

        <h1 className="max-w-3xl text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-[#22313d] sm:text-6xl md:text-7xl">
          {t.heroTitle}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#5d666d] md:text-lg">
          {t.heroText}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://calendly.com/hello-domova/free-website-strategy-call-20-min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#22313d] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(34,49,61,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_24px_50px_rgba(34,49,61,0.28)] active:scale-[0.98]"
          >
            {t.heroBtn1}
          </a>

          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#work");
            }}
            className="inline-flex items-center justify-center rounded-full border border-[#d7d2ca] bg-white px-6 py-3 text-sm font-medium text-[#22313d] shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#f3efe8] hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] active:scale-[0.98]"
          >
            {t.heroBtn2}
          </a>
        </div>
        <p className="mt-5 text-sm text-[#7a838a]">
          {t.heroNote}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:col-span-2">
          <img
            src={biscayneHero}
            alt="Biscayne Coast homepage"
            className="h-[320px] w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
          <img
            src={biscayneMobile}
            alt="Biscayne Coast mobile view"
            className="h-[180px] w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
          <img
            src={biscayneGallery}
            alt="Biscayne Coast gallery detail"
            className="h-[180px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}