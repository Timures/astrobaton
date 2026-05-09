import { useLanguage } from "@/shared/lib/LanguageContext";
import { translations } from "@/shared/lib/localization";
import { AstrobatonIcon } from "@/shared/ui";
export const Footer = () => {
  const { lang } = useLanguage();
  // Используем твои локализации для безумных описаний
  const t = translations[lang];

  return (
    <footer className="w-full max-w-5xl mt-20 pb-10 px-4 border-t border-zinc-900 pt-10 text-zinc-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="flex gap-3 items-center font-black uppercase tracking-widest text-zinc-500 text-sm">
            <AstrobatonIcon /> {t.footerTitle}
          </h3>
          <p className="text-xs leading-relaxed max-w-md italic whitespace-pre-line">
            {/* Текст про цифровое отчаяние и 8 лет опыта */}
            {t.footerDesc}
          </p>
        </div>

        <div className="flex flex-col md:items-end">
          <h3 className="font-black uppercase tracking-widest text-zinc-500 mb-4 text-sm">
            {t.authorTitle}
          </h3>
          <a
            href="https://timures.me" // Ссылка на твой сайт/портфолио
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-violet-500 transition-colors underline decoration-zinc-800 underline-offset-4"
          >
            Timures - Senior Frontend Developer
          </a>
          <span className="text-[10px] mt-2 opacity-90 uppercase tracking-tighter">
            © 2026 {t.authorRights}
          </span>
        </div>
      </div>
    </footer>
  );
};
