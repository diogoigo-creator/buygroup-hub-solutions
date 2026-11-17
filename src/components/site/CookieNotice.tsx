import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { needsAnswer, onConsentChange, readChoice, type Choice } from "@/lib/consent";
import {
  announceCookieNotice,
  OPEN_COOKIE_PREFERENCES_EVENT,
  saveAnalyticsChoice,
} from "@/lib/cookie-preferences";

export function CookieNotice() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [choice, setChoice] = useState<Choice>("denied");
  const [privacySignal, setPrivacySignal] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    const syncChoice = () => setChoice(readChoice("analytics") ?? "denied");
    const browserSignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    setPrivacySignal(browserSignal);
    syncChoice();

    void needsAnswer(["analytics"]).then((needed) => {
      if (!active) return;
      const unanswered = readChoice("analytics") === null;
      setOpen(!browserSignal && (needed || unanswered));
    });

    const openPreferences = () => {
      syncChoice();
      setSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    const unsubscribe = onConsentChange(syncChoice);
    return () => {
      active = false;
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    announceCookieNotice(open);
    if (open) {
      const frame = window.requestAnimationFrame(() => {
        panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [open]);

  useEffect(() => () => announceCookieNotice(false), []);

  function save(next: Choice) {
    saveAnalyticsChoice(next);
    setChoice(next);
    setOpen(false);
    setSettings(false);
  }

  if (!open) return null;

  const equalButton =
    "inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-navy bg-white px-5 text-sm font-semibold text-navy transition-colors hover:bg-secondary";

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-40 max-h-[85svh] overflow-y-auto border-t border-border bg-card p-6 text-card-foreground shadow-[var(--shadow-soft)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-md sm:rounded-2xl sm:border"
      style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))" }}
    >
      {settings ? (
        <div>
          <h2 className="font-serif text-2xl text-navy">Preferências de cookies</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Escolha se o site pode medir como você usa as páginas e os botões de contato.
          </p>
          {privacySignal && (
            <p className="mt-3 rounded-lg bg-secondary p-3 text-xs leading-relaxed text-navy">
              O sinal de privacidade do seu navegador está ativo e será respeitado.
            </p>
          )}
          <div className="mt-5 space-y-3">
            <div className="flex min-h-11 items-center justify-between gap-4 border-b border-border pb-3 text-sm">
              <span className="font-medium text-navy">Necessários</span>
              <span className="text-xs text-muted-foreground">Sempre ativos</span>
            </div>
            <div className="flex min-h-11 items-center justify-between gap-4 text-sm">
              <div>
                <p className="font-medium text-navy">Análise</p>
                <p className="mt-1 text-xs text-muted-foreground">Fornecida pela Lovable e pelo Google</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={!privacySignal && choice === "granted"}
                aria-label="Permitir análise"
                disabled={privacySignal}
                onClick={() => setChoice((current) => (current === "granted" ? "denied" : "granted"))}
                className={`relative h-11 w-16 shrink-0 rounded-full border px-1 transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
                  !privacySignal && choice === "granted" ? "border-green bg-green" : "border-border bg-secondary"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-8 w-8 rounded-full bg-white shadow-sm transition-transform ${
                    !privacySignal && choice === "granted" ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => save(privacySignal ? "denied" : choice)}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
          >
            Salvar preferências
          </button>
          <button
            type="button"
            onClick={() => setSettings(false)}
            className="mt-2 inline-flex min-h-11 w-full items-center justify-center text-sm font-medium text-navy underline underline-offset-4"
          >
            Voltar ao aviso
          </button>
        </div>
      ) : (
        <div>
          <p className="text-sm leading-relaxed text-navy">
            Usamos cookies de medição para entender como o site é usado. Você pode aceitar ou recusar.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Contamos visitas sem cookies. Se você aceitar, também medimos cliques.
          </p>
          <Link
            to="/politica-de-privacidade"
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-navy underline underline-offset-4"
          >
            Política de Privacidade
          </Link>
          <div className="mt-3 flex gap-3">
            <button type="button" onClick={() => save("denied")} className={equalButton}>
              Recusar
            </button>
            <button type="button" onClick={() => save("granted")} className={equalButton}>
              Aceitar
            </button>
          </div>
          <button
            type="button"
            onClick={() => setSettings(true)}
            className="mt-2 inline-flex min-h-11 w-full items-center justify-center text-sm font-medium text-navy underline underline-offset-4"
          >
            Configurações de cookies
          </button>
        </div>
      )}
    </div>
  );
}
