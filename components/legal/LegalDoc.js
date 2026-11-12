"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Indice = ({ activeIndex, IndexTitles }) => (
  <aside className="hidden md:flex flex-col w-72 shrink-0 sticky top-20 self-start">
    <p className="text-xs font-semibold text-content-text-muted uppercase tracking-widest mb-3">
      Contenido
    </p>
    {IndexTitles.map((item, i) => {
      const active = i === activeIndex;
      return (
        <Link
          key={i}
          href={`#section-${i}`}
          className={`
            relative text-sm py-1.5 pl-4 border-l-2 transition-all duration-300
            ${
              active
                ? "border-content-text-brand text-content-text-brand font-semibold"
                : "border-border-default text-content-text-secondary hover:text-content-text-primary hover:border-content-text-muted"
            }
          `}
        >
          {i + 1}. {item}
        </Link>
      );
    })}
  </aside>
);

const LegalDoc = ({ title, description, lastUpdated, effectiveDate, sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers = sections.map((_, i) => {
      const el = document.getElementById(`section-${i}`);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <div className="p-8 md:p-12">
      <div className="w-full md:w-2/3 flex flex-col gap-6 mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-balance">{title}</h1>
        <p className="text-content-text-secondary text-xl">{description}</p>
        <div className="flex flex-wrap gap-8">
          <span className="text-content-text-muted text-sm">
            Última actualización: {lastUpdated}
          </span>
          <span className="text-content-text-muted text-sm">Entrada en vigor: {effectiveDate}</span>
        </div>
      </div>
      <div className="flex gap-16 items-start">
        <Indice activeIndex={activeIndex} IndexTitles={sections.map(({ title }) => title)} />
        <div className="flex flex-col gap-20 w-full max-w-2xl">
          {sections.map((item, i) => (
            <section key={i} id={`section-${i}`} className="flex flex-col gap-4 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-domine font-bold">
                {i + 1}. {item.title}
              </h2>
              <div className="text-content-text-secondary leading-relaxed">
                {item.paragraphs || item.list || (
                  <span className="text-content-text-muted italic">Contenido próximamente.</span>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalDoc;
