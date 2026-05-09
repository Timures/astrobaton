import { useLanguage } from "@/shared/lib/LanguageContext";
import { Analyzer } from "@/widgets/analyzer/index";
import { LangSwitcher } from "@/features/lang-switcher";
import { translations } from "@/shared/lib/localization";
import { Footer } from "@/widgets/footer/index";
import { AstrobatonIcon } from "@/shared/ui";
export const MainPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center p-4 pt-12">
      <LangSwitcher />

      <header className="flex flex-col items-center mb-12 text-center max-w-lg">
        <AstrobatonIcon className="w-20 h-18" />
        <h1 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-fuchsia-500 mb-4">
          {t.title}
        </h1>
        <p className="text-zinc-400 leading-relaxed">{t.description}</p>
      </header>

      <main className="w-full flex justify-center">
        <Analyzer />
      </main>

      <Footer />
    </div>
  );
};
