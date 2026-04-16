import biscayneHero from "./assets/biscayne-hero.png";
import biscayneMobile from "./assets/biscayne-mobile.png";
import biscayneGallery from "./assets/biscayne-gallery.png";
import biscayneFull from "./assets/biscayne-full.png";

export default function DomovaStudioLandingPage() {
const smoothScroll = (targetId) => {
const target = document.querySelector(targetId);
if (!target) return;

const start = window.scrollY;
const end = target.getBoundingClientRect().top + window.scrollY - 80;
const distance = end - start;
const duration = 900;
let startTime = null;

const easeOutBack = (t) => {
const c1 = 1.70158;
const c3 = c1 + 1;
return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const animation = (currentTime) => {
if (!startTime) startTime = currentTime;
const timeElapsed = currentTime - startTime;
const progress = Math.min(timeElapsed / duration, 1);

window.scrollTo({
top: start + distance * easeOutBack(progress),
});

if (progress < 1) {
requestAnimationFrame(animation);
}
};

requestAnimationFrame(animation);
};
return (
<div className="min-h-screen bg-[#f7f4ef] text-[#1f2a33]">
<header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ef]/90 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
<a href="#top" className="text-sm font-medium tracking-[0.22em] uppercase text-[#5f6b73]">
Domova Studio
</a>

<nav className="hidden items-center gap-8 md:flex">
<a
href="#work"
onClick={(e) => {
e.preventDefault();
smoothScroll("#work");
}}
className="text-sm text-[#44515a] transition hover:text-[#1f2a33]"
>
Work
</a>
<a
href="#about"
onClick={(e) => {
e.preventDefault();
smoothScroll("#about");
}}
className="text-sm text-[#44515a] transition hover:text-[#1f2a33]"
>
About
</a>
<a
href="#contact"
onClick={(e) => {
e.preventDefault();
smoothScroll("#contact");
}}
className="text-sm text-[#44515a] transition hover:text-[#1f2a33]"
>
Contact
</a>
</nav>
</div>
</header>

<main id="top">
<section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16">
<div>
<p className="mb-5 text-[0.78rem] uppercase tracking-[0.22em] text-[#8a8f93]">
Cinematic digital presence
</p>

<h1 className="max-w-3xl text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-[#22313d] sm:text-6xl md:text-7xl">
We create cinematic websites for luxury real estate and visionary brands.
</h1>

<p className="mt-6 max-w-2xl text-base leading-8 text-[#5d666d] md:text-lg">
Domova Studio designs immersive digital experiences shaped by atmosphere,
aspiration, and emotion. We build websites that make a brand feel like a future
someone wants to step into.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<a
href="#work"
onClick={(e) => {
e.preventDefault();
smoothScroll("#work");
}}
className="inline-flex items-center justify-center rounded-full bg-[#22313d] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(34,49,61,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_24px_50px_rgba(34,49,61,0.28)] active:scale-[0.98]"
>
View Featured Project
</a>
<a
href="#contact"
onClick={(e) => {
e.preventDefault();
smoothScroll("#contact");
}}
className="inline-flex items-center justify-center rounded-full border border-[#d7d2ca] bg-white px-6 py-3 text-sm font-medium text-[#22313d] shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#f3efe8] hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] active:scale-[0.98]"
>
Start a Conversation
</a>
</div>
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

<section id="work" className="border-t border-black/5 bg-white/70 py-16 md:py-24">
<div className="mx-auto max-w-7xl px-6 md:px-10">
<div className="mb-10 max-w-2xl">
<p className="mb-4 text-[0.78rem] uppercase tracking-[0.22em] text-[#8a8f93]">
Featured work
</p>
<h2 className="text-3xl font-medium leading-tight text-[#22313d] md:text-5xl">
Biscayne Coast
</h2>
<p className="mt-4 text-base leading-8 text-[#5d666d] md:text-lg">
A cinematic luxury real estate website concept designed to feel immersive,
elevated, and emotionally resonant across desktop and mobile.
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
<p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">Scope</p>
<p className="mt-2 text-base leading-7 text-[#455159]">
Brand direction, UI design, front-end development, responsive layout,
interactive gallery, and floor plan modals.
</p>
</div>

<div>
<p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">Focus</p>
<p className="mt-2 text-base leading-7 text-[#455159]">
To create a website that sells a lifestyle, not just square footage.
</p>
</div>

<div>
<p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">Built with</p>
<p className="mt-2 text-base leading-7 text-[#455159]">React, Vite, modern responsive CSS</p>
</div>
</div>

<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a
href="https://biscayne-coast.netlify.app/"
target="_blank"
rel="noreferrer"
className="inline-flex items-center justify-center rounded-full bg-[#22313d] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(34,49,61,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_24px_50px_rgba(34,49,61,0.28)] active:scale-[0.98]"
>
Visit Live Site
</a>
<a
href="#contact"
onClick={(e) => {
e.preventDefault();
smoothScroll("#contact");
}}
className="inline-flex items-center justify-center rounded-full border border-[#d7d2ca] bg-white px-5 py-3 text-sm font-medium text-[#22313d] shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#f8f5f0] hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] active:scale-[0.98]"
>
Inquire About a Project
</a>
</div>
</div>
</div>
</div>
</section>

<section id="about" className="py-16 md:py-24">
<div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
<div>
<p className="mb-4 text-[0.78rem] uppercase tracking-[0.22em] text-[#8a8f93]">
About
</p>
<h2 className="text-3xl font-medium leading-tight text-[#22313d] md:text-5xl">
We care about atmosphere as much as function.
</h2>
</div>

<div className="space-y-6 text-base leading-8 text-[#556067] md:text-lg">
<p>
Domova Studio is a creative studio for brands that want to feel not only polished,
but deeply compelling. Our work lives at the intersection of visual refinement,
emotional clarity, and modern front-end execution.
</p>
<p>
We are especially drawn to luxury real estate, architecture, hospitality, and
future-facing brands with a strong point of view. The goal is always the same: to
create a digital experience that feels like stepping into a world.
</p>
</div>
</div>
</section>

<section id="contact" className="border-t border-black/5 bg-white py-16 md:py-24">
<div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
<div>
<p className="mb-4 text-[0.78rem] uppercase tracking-[0.22em] text-[#8a8f93]">
Contact
</p>
<h2 className="text-3xl font-medium leading-tight text-[#22313d] md:text-5xl">
Currently accepting a limited number of projects.
</h2>
<p className="mt-5 max-w-xl text-base leading-8 text-[#5d666d] md:text-lg">
If you are building something refined, atmospheric, and ambitious, we would love to
hear about it.
</p>
</div>

<div className="rounded-[2rem] border border-black/5 bg-[#f7f4ef] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-10">
<div className="grid gap-6">
<div>
<p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">Email</p>
<a
href="mailto:hello@domovastudio.com"
className="mt-2 inline-block text-lg text-[#22313d] underline decoration-[#cfc6bb] underline-offset-4"
>
hello@domovastudio.com
</a>
</div>

<div>
<p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">Focus</p>
<p className="mt-2 text-base leading-7 text-[#455159]">
Luxury real estate, hospitality, architecture, and visionary brands.
</p>
</div>

<div>
<p className="text-sm uppercase tracking-[0.18em] text-[#8a8f93]">Based online</p>
<p className="mt-2 text-base leading-7 text-[#455159]">
Working remotely with clients in Europe and the United States.
</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-black/5 bg-[#f7f4ef]">
<div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-[#7a8288] md:flex-row md:items-center md:justify-between md:px-10">
<p>© 2026 Domova Studio</p>
<p>Cinematic websites for luxury real estate and visionary brands.</p>
</div>
</footer>
</div>
);
}