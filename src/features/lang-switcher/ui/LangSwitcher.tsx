import { useLanguage } from "@/shared/lib/LanguageContext";

export const LangSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2 bg-zinc-900/50 backdrop-blur-md p-1.5 rounded-xl border border-zinc-800 z-50 mb-10">
      {["ru", "kz", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l as any)}
          className={`px-4 py-1.5 rounded-lg text-sm font-bold uppercase transition-all ${
            lang === l
              ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};
