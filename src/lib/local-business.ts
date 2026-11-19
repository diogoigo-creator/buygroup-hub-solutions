import { LINKEDIN_URL } from "./contact-details";

export const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": "https://www.buygroup.com.br/#organization",
  name: "Buy Group Consultoria",
  url: "https://www.buygroup.com.br",
  telephone: "+55-31-99008-7887",
  email: "atendimento@buygroup.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Rio Grande do Norte, 1436, Sala 813",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "30130-138",
    addressCountry: "BR",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  }],
  areaServed: { "@type": "Country", name: "Brasil" },
  sameAs: [LINKEDIN_URL, "https://www.instagram.com/buygroupbrasil/", "https://www.facebook.com/buygroupbrasil"],
  foundingDate: "2020-09-16",
};