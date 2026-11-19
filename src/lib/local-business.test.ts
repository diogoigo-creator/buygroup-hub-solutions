import { expect, test } from "bun:test";
import { LOCAL_BUSINESS } from "./local-business";

test("official local address matches the Google Business Profile", () => {
  expect(LOCAL_BUSINESS.address).toEqual({
    "@type": "PostalAddress", streetAddress: "Rua Rio Grande do Norte, 1436, Sala 813",
    addressLocality: "Belo Horizonte", addressRegion: "MG", postalCode: "30130-138", addressCountry: "BR",
  });
});
test("opening hours are weekdays from 08:00 to 18:00", () => {
  expect(LOCAL_BUSINESS.openingHoursSpecification).toEqual([{
    "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00", closes: "18:00",
  }]);
});
test("official business identity and foundation date", () => {
  expect(LOCAL_BUSINESS.name).toBe("Buy Group Consultoria");
  expect(LOCAL_BUSINESS.url).toBe("https://www.buygroup.com.br");
  expect(LOCAL_BUSINESS.telephone).toBe("+55-31-99008-7887");
  expect(LOCAL_BUSINESS.email).toBe("atendimento@buygroup.com.br");
  expect(LOCAL_BUSINESS.foundingDate).toBe("2020-09-16");
  expect(LOCAL_BUSINESS.areaServed).toEqual({ "@type": "Country", name: "Brasil" });
  expect(LOCAL_BUSINESS["@type"]).toEqual(["ProfessionalService", "LocalBusiness"]);
});
test("official social profiles", () => {
  expect(LOCAL_BUSINESS.sameAs).toEqual([
    "https://www.linkedin.com/company/buygroupconsulting/",
    "https://www.instagram.com/buygroupbrasil/", "https://www.facebook.com/buygroupbrasil",
  ]);
});