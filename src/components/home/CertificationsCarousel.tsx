import { useMemo, useState } from "react";

const visibleCount = 4;

export default function CertificationsCarousel() {
  const logos = useMemo(() => {
    const entries = Object.entries(
      import.meta.glob<string>("@assets/img/home/carousel/*", {
        eager: true,
        query: "?url",
        import: "default",
      }),
    );

    return entries
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, value]) => value);
  }, []);

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(logos.length - visibleCount, 0);

  const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section className="bg-white py-12 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold lg:text-2xl">
          Certificaciones que nos respaldan
        </h2>
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-lg"
            aria-label="Anterior"
            disabled={index === 0}
          >
            ‹
          </button>
          <div className="overflow-hidden">
            <div
              className="flex items-center gap-8 transition-transform duration-300"
              style={{
                transform: `translateX(-${index * 140}px)`,
              }}
            >
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${logo}-${logoIndex}`}
                  className="flex h-16 w-32 items-center justify-center rounded-full border border-black/10 bg-white px-4"
                >
                  <img src={logo} alt="Certificación" className="max-h-10" />
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-lg"
            aria-label="Siguiente"
            disabled={index === maxIndex}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
