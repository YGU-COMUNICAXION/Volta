import { useState } from "react";

import logoSujio from "@assets/svg/home/LogoSugio.svg";
import logoSujioGeneration from "@assets/svg/home/LogoSujioGeneration.svg";
import logoIndustria from "@assets/svg/home/LogoIndustriaElectrica.svg";
import logoRegulus from "@assets/svg/home/LogoRegulus.png";
import logoSujioAlt from "@assets/img/about-us/logoSujio.png";
import logoRegulusAlt from "@assets/img/about-us/logoRegulus.png";
import logoIndustriaAlt from "@assets/img/about-us/logoHHGM.png";

type LogoAsset = string | { src: string };

const resolveLogo = (logo: LogoAsset) =>
  typeof logo === "string" ? logo : logo.src;

type Company = {
  id: string;
  name: string;
  description: string;
  modalTitle: string;
  modalDescription: string[];
  modalBullets?: string[];
  modalLogo: LogoAsset;
  logo: LogoAsset;
  websiteUrl: string;
};

const companies: Company[] = [
  {
    id: "sujio",
    name: "Sujio",
    description: "Energía a la medida de grandes consumidores",
    modalTitle: "SUJÍO",
    modalDescription: [
      "Suministro eléctrico a grandes consumidores y representación de centrales de generación exenta (<0.5 MW).",
    ],
    modalBullets: [
      "Precios competitivos",
      "Atención al cliente personalizada",
      "Flexibilidad contractual",
      "Asesoría especializada y transparencia",
    ],
    logo: logoSujio as LogoAsset,
    modalLogo: logoSujioAlt as LogoAsset,
    websiteUrl: "https://www.sujio.mx/",
  },
  {
    id: "sujio-generacion",
    name: "Sujio Generación",
    description: "Representación de generadores",
    modalTitle: "SUJÍO GENERACIÓN",
    modalDescription: [
      "Representación y operación de centrales eléctricas en el MEM.",
    ],
    modalBullets: [
      "Asesoría especializada en la migración a LESE de Centrales Eléctricas",
      "Mejora en eficiencia Operativa",
      "Oportunidad de contratos a largo plazo",
      "Atención Especializada al Cliente",
    ],
    logo: logoSujioGeneration as LogoAsset,
    modalLogo: logoSujioGeneration as LogoAsset,
    websiteUrl: "https://www.sujio.mx/",
  },
  {
    id: "industria",
    name: "HHGM",
    description: "Infraestructura eléctrica que conecta al país",
    modalTitle: "HHGM",
    modalDescription: [
      "Especialistas en construcción de infraestructura eléctrica y suministro de materiales a nivel nacional.",
      "Cumplimos con las regulaciones del MEM.",
    ],
    logo: logoIndustria as LogoAsset,
    modalLogo: logoIndustriaAlt as LogoAsset,
    websiteUrl: "https://www.hhgm.mx/",
  },
  {
    id: "regulus",
    name: "Regulus",
    description: "Comercialización con experiencia y visión",
    modalTitle: "REGULUS ENERGÍA",
    modalDescription: [
      "Comercializador con tres generaciones de experiencia en el Mercado Eléctrico Mayorista (MEM).",
    ],
    modalBullets: [
      "Comercialización de energía y potencia",
      "Importación y exportación de energía",
      "Certificados de Energía Limpia",
    ],
    logo: logoRegulus as LogoAsset,
    modalLogo: logoRegulusAlt as LogoAsset,
    websiteUrl: "https://regulus.com.mx/",
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
              <div className="absolute -top-6 flex items-center justify-center">
                <img
                  src={resolveLogo(company.logo)}
                  alt={`Logo ${company.name}`}
                  className="h-12 w-auto"
                />
              </div>
              <div
                className="flex h-full w-full flex-col items-center gap-4 border border-black/50 bg-white px-6 pb-10 pt-12 text-center"
                style={{
                  clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <div className="h-px w-12 bg-primary" />
                <p className="text-sm text-black/70">{company.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeCompany ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-lg rounded-[28px] bg-white px-8 pb-10 pt-16 text-black shadow-xl">
            <button
              type="button"
              onClick={() => setActiveCompany(null)}
              className="absolute right-6 top-6 text-xl text-black/70"
              aria-label="Cerrar"
            >
              ×
            </button>
            <div className="absolute left-1/2 top-0 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black">
              <img
                src={resolveLogo(activeCompany.modalLogo)}
                alt={`Logo ${activeCompany.name}`}
                className="h-12 w-auto"
              />
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wide">
              {activeCompany.modalTitle}
            </h3>
            <div className="mt-2 space-y-3 text-sm text-black/80">
              {activeCompany.modalDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {activeCompany.modalBullets ? (
              <ul className="mt-4 space-y-2 text-sm text-black/80">
                {activeCompany.modalBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-6 text-center">
              <a
                href={activeCompany.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline"
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
