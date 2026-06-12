import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511940000000?text=Quero%20um%20diagn%C3%B3stico%20gratuito";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[var(--shadow-soft)] ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 md:bottom-6 md:right-6"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-whatsapp opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-90" />
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
