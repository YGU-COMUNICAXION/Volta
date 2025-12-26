import { useMemo, useState, useEffect } from "react";

export default function CertificationsCarousel() {
  const logos = useMemo(() => {
    const entries = Object.entries(
      import.meta.glob<string>("@assets/img/home/carousel/*", {
        eager: true,
        query: "?url",
        import: "default",
      })
    );

    return entries
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, value]) => value);
  }, []);

  const [index, setIndex] = useState(0);

  // Determinar cuántas imágenes mostrar según el tamaño de pantalla
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4;

    if (window.innerWidth < 768) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // md
    return 4; // desktop
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  // Actualizar visibleCount en resize
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(logos.length - visibleCount, 0);

  // Ajustar índice si está fuera de rango al cambiar visibleCount
  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [maxIndex, index]);

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const isAtStart = index === 0;
  const isAtEnd = index === maxIndex;

  const itemWidth = 180; // Ancho fijo para todas las imágenes
  const gap = 32; // gap-8

  return (
    <section className="bg-white py-12 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold lg:text-2xl">
          Certificaciones que nos respaldan
        </h2>

        <div className="mt-8 flex items-center justify-center gap-4">
          {/* Botón Anterior */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={isAtStart}
            className={`
              flex h-10 w-10 flex-shrink-0 items-center justify-center 
              rounded-full border text-2xl font-light 
              transition-all duration-300
              ${
                isAtStart
                  ? "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-300"
                  : "border-gray-400 bg-white text-gray-700 hover:border-gray-600 hover:bg-gray-100 active:scale-95"
              }
            `}
            aria-label="Anterior"
          >
            ‹
          </button>

          {/* Contenedor del Carousel */}
          <div
            className="overflow-hidden"
            style={{
              width: `${visibleCount * itemWidth + (visibleCount - 1) * gap}px`,
            }}
          >
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (itemWidth + gap)}px)`,
              }}
            >
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${logo}-${logoIndex}`}
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{ width: `${itemWidth}px` }}
                >
                  <div className="flex h-24 items-center justify-center">
                    <img
                      src={logo}
                      alt={`Certificación ${logoIndex + 1}`}
                      className="max-h-20 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Siguiente */}
          <button
            type="button"
            onClick={handleNext}
            disabled={isAtEnd}
            className={`
              flex h-10 w-10 flex-shrink-0 items-center justify-center 
              rounded-full border text-2xl font-light 
              transition-all duration-300
              ${
                isAtEnd
                  ? "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-300"
                  : "border-gray-400 bg-white text-gray-700 hover:border-gray-600 hover:bg-gray-100 active:scale-95"
              }
            `}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* Indicadores de posición */}
        {logos.length > visibleCount && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-gray-700"
                    : "w-2 bg-gray-300 hover:bg-gray-500"
                }`}
                aria-label={`Ir a la posición ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
