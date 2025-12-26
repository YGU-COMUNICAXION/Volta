import { useState } from "react";

import logoSujio from "@assets/svg/home/LogoSugio.svg";
import logoSujioGeneration from "@assets/svg/home/LogoSujioGeneration.svg";
import logoIndustria from "@assets/svg/home/LogoIndustriaElectrica.svg";
import logoRegulus from "@assets/svg/home/LogoRegulus.png";

type LogoAsset = string | { src: string };

const resolveLogo = (logo: LogoAsset) =>
  typeof logo === "string" ? logo : logo.src;

const companies = [
  {
    id: "sujio",
    name: "Sujio",
    description: "Energía a la medida de grandes consumidores.",
    details:
      "Diseñamos esquemas energéticos personalizados para grandes consumidores, optimizando eficiencia y costos con soluciones renovables.",
    logo: logoSujio as LogoAsset,
  },
  {
    id: "sujio-generacion",
    name: "Sujio Generación",
    description: "Representación de generadores.",
    details:
      "Conectamos generadores al mercado eléctrico mayorista con estrategias de representación y comercialización confiables.",
    logo: logoSujioGeneration as LogoAsset,
  },
  {
    id: "industria",
    name: "Industria Eléctrica",
    description: "Infraestructura eléctrica que conecta al país.",
    details:
      "Desarrollamos infraestructura eléctrica con visión sostenible, garantizando continuidad operativa en cada proyecto.",
    logo: logoIndustria as LogoAsset,
  },
  {
    id: "regulus",
    name: "Regulus",
    description: "Comercialización con experiencia y visión.",
    details:
      "Ofrecemos soluciones de comercialización energética con foco en crecimiento responsable y retornos confiables.",
    logo: logoRegulus as LogoAsset,
  },
];

export default function CompaniesSection() {
  const [activeCompany, setActiveCompany] = useState<(typeof companies)[number] | null>(
    null,
  );

  return (
    <section className="bg-white py-16 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold lg:text-4xl">
          Nuestras empresas, una sola visión
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <button
              key={company.id}
              type="button"
              onClick={() => setActiveCompany(company)}
              className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-black/10 bg-white px-6 py-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex h-16 items-center justify-center">
                <img
                  src={resolveLogo(company.logo)}
                  alt={`Logo ${company.name}`}
                  className="h-12 w-auto"
                />
              </div>
              <div className="h-px w-12 bg-primary" />
              <p className="text-sm text-black/70">{company.description}</p>
            </button>
          ))}
        </div>
      </div>

      {activeCompany ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-black shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{activeCompany.name}</h3>
                <p className="mt-2 text-sm text-black/70">
                  {activeCompany.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCompany(null)}
                className="rounded-full border border-black/10 px-3 py-1 text-sm"
              >
                Cerrar
              </button>
            </div>
            <p className="mt-4 text-sm text-black/80">
              {activeCompany.details}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
