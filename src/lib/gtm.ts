import { GTM_ID } from "./seo";

export const GTM_SCRIPT = `if(location.hostname==='buygroup.com.br'||location.hostname==='www.buygroup.com.br'){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');}`;

type EventParams = {
  generate_lead: { form_name: "contato" | "academy" };
  whatsapp_click: { link_location: "header" | "menu_mobile" | "footer" | "contato" | "barra_mobile" };
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDataLayer<E extends keyof EventParams>(event: E, params: EventParams[E]): void {
  if (typeof window === "undefined") return;
  // Only explicitly allowed, non-personal fields can enter analytics.
  const entry = event === "generate_lead" && "form_name" in params
    ? { event, form_name: params.form_name }
    : event === "whatsapp_click" && "link_location" in params
      ? { event, link_location: params.link_location }
      : null;
  if (!entry) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(entry);
  } catch {
    // Analytics must never interrupt a form confirmation or navigation.
  }
}