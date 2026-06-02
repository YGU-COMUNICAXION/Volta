export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export type PageKey = "home" | "about" | "projects" | "investors" | "contact";

export const defaultLocale: Locale = "es";

export const routes: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: "/",
    about: "/quienes-somos",
    projects: "/proyectos",
    investors: "/inversionistas",
    contact: "/contacto",
  },
  en: {
    home: "/en/",
    about: "/en/about",
    projects: "/en/projects",
    investors: "/en/investors",
    contact: "/en/contact",
  },
};

export const routeKeys: PageKey[] = [
  "home",
  "about",
  "projects",
  "investors",
  "contact",
];

export function isLocale(locale: string | undefined): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : defaultLocale;
}

export function getRoute(locale: Locale, key: PageKey): string {
  return routes[locale][key];
}

export function getPageKeyFromPathname(pathname: string): PageKey {
  const normalized = normalizePath(pathname);

  for (const key of routeKeys) {
    if (normalizePath(routes.es[key]) === normalized) return key;
    if (normalizePath(routes.en[key]) === normalized) return key;
  }

  return "home";
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function getAlternateLocaleUrl(pathname: string): string {
  const currentLocale = getLocaleFromPathname(pathname);
  const pageKey = getPageKeyFromPathname(pathname);

  return getRoute(getAlternateLocale(currentLocale), pageKey);
}

function normalizePath(pathname: string): string {
  const path = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  return path || "/";
}
