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
    name: "Sujío",
    description:
      "Energía a la medida de grandes consumidores",
    modalTitle: "SUJÍO",
    modalDescription:
      "Suministro eléctrico a grandes consumidores y representación de centrales de generación exenta (<0.5 MW).",
    modalBullets: [
      "Precios competitivos",
      "Atención al cliente personalizada",
      "Flexibilidad contractual",
      "Asesoría especializada y transparencia",
    ],
    logo: logoSujio as LogoAsset,
  },
  {
    id: "sujio-generacion",
    name: "Sujio Generación",
    description: "Representación de generadores.",
    modalTitle: "SUJÍO GENERACIÓN",
    modalDescription:
      "Representación y operación de centrales eléctricas en el MEM.",
    modalBullets: [
      "Asesoría especializada en la migración a LESE de Centrales Eléctricas",
      "Mejora en eficiencia Operativa",
      "Oportunidad de contratos a largo plazo",
      "Atención Especializada al Cliente",
    ],
    logo: logoSujioGeneration as LogoAsset,
  },
  {
    id: "industria",
    name: "HHGM",
    description: "Infraestructura eléctrica que conecta al país.",
    modalTitle: "HHGM",
    modalDescription:
      "Especialistas en construcción de infraestructura eléctrica y suministro de materiales a nivel nacional.",
    modalSecondaryDescription: "Cumplimos con las regulaciones del MEM.",
    logo: logoIndustria as LogoAsset,
  },
  {
    id: "regulus",
    name: "Regulus Energía",
    description: "Comercialización con experiencia y visión.",
    modalTitle: "REGULUS ENERGÍA",
    modalDescription:
      "Comercializador con tres generaciones de experiencia en el Mercado Eléctrico Mayorista (MEM).",
    modalBullets: [
      "Comercialización de energía y potencia",
      "Importación y exportación de energía",
      "Certificados de Energía Limpia",
    ],
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
              className="group relative flex flex-col items-center pt-12 transition hover:-translate-y-1"
            >
              <div className="absolute -top-2 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <img
                  src={resolveLogo(company.logo)}
                  alt={`Logo ${company.name}`}
                  className="h-10 w-auto"
                />
              </div>
              <div
                className="flex h-full w-full flex-col items-start gap-4 border border-black/50 bg-white px-6 py-8 text-left"
                style={{
                  clipPath: "polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <div className="mt-6 h-px w-10 bg-black" />
                <p className="text-sm font-medium text-black">
                  {company.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeCompany ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white px-8 pb-10 pt-12 text-black shadow-2xl sm:px-12">
            <button
              type="button"
              onClick={() => setActiveCompany(null)}
              className="absolute right-6 top-6 text-2xl font-light text-black/70 transition hover:text-black"
              aria-label="Cerrar modal"
            >
              ×
            </button>
            <div className="flex flex-col items-start gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black">
                <img
                  src={resolveLogo(activeCompany.logo)}
                  alt={`Logo ${activeCompany.name}`}
                  className="h-12 w-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold uppercase tracking-wide">
                  {activeCompany.modalTitle}
                </h3>
                <p className="mt-3 text-base text-black/80">
                  {activeCompany.modalDescription}
                </p>
                {activeCompany.modalSecondaryDescription ? (
                  <p className="mt-4 text-base text-black/80">
                    {activeCompany.modalSecondaryDescription}
                  </p>
                ) : null}
              </div>
              {activeCompany.modalBullets ? (
                <ul className="mt-2 list-disc space-y-2 pl-6 text-base text-black/80">
                  {activeCompany.modalBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              <a
                href="#"
                className="mt-4 text-base font-medium text-black underline underline-offset-4"
              >
                Ir a su sitio web
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
