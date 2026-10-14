export default function PageHero({ title, subtitle, contentClassName = "md:pb-9 pb-8" }) {
  return (
    <section className="relative h-[20vh] min-h-80 w-full md:-mt-15 -mt-25">
      <div className="absolute inset-0 bg-linear-to-tr from-brand-gold via-brand-dark to-brand-dark"></div>

      {/* TITOLO PAGINA */}
      <div className={`absolute inset-0 flex flex-col items-center justify-end text-center px-4 ${contentClassName}`}>
        <h1 className="text-4xl md:text-5xl font-light text-white uppercase tracking-widest drop-shadow-lg mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 uppercase tracking-[0.3em] text-xs md:text-sm font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}