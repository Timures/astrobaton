import { useState, useEffect } from "react";
import { ZODIAC_SIGNS } from "@/shared/lib/zodiac";
import { cn } from "@/shared/lib";
import { getZodiacRoast } from "@/shared/api/ai-client";
import { motion } from "framer-motion";
import { translations } from "@/shared/lib/localization";
import { useLanguage } from "@/shared/lib/LanguageContext";

type Status = "IDLE" | "LOADING" | "RESULT";

export const Analyzer = () => {
  const { lang } = useLanguage();
  const [status, setStatus] = useState<Status>("IDLE");
  const [prediction, setPrediction] = useState("");
  // Выносим удачу в стейт, чтобы она была доступна между рендерами
  const [isGoodLuck, setIsGoodLuck] = useState<number>(0);

  const t = translations[lang];

  useEffect(() => {
    setStatus("IDLE");
    setPrediction("");
  }, [lang]);

  const handleSelectSign = async (signName: string) => {
    setStatus("LOADING");

    const luck = Math.random() > 0.5 ? 1 : 0;
    setIsGoodLuck(luck); // Сохраняем в стейт

    try {
      const result = await getZodiacRoast(signName, lang, luck);
      setPrediction(result);
      setStatus("RESULT");
    } catch (e) {
      setStatus("IDLE");
    }
  };

  if (status === "LOADING")
    return (
      <div className="text-center p-20 animate-pulse text-violet-500 font-black text-2xl uppercase italic">
        {/* Можно тоже локализовать, если нужно */}
        {t.startLaugh}...
      </div>
    );

  if (status === "RESULT")
    return (
      <section className="w-full max-w-5xl flex justify-center">
        <div
          className={cn(
            "lg:p-10 p-4 rounded-[40px] border-4 transition-all max-w-5xl w-full",
            isGoodLuck === 1
              ? "border-green-500/50 shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)]"
              : "border-red-900/50 shadow-[0_0_40px_-10px_rgba(127,29,29,0.3)]",
          )}
        >
          <p className="lg:text-2xl text-xl font-medium text-zinc-100 italic leading-snug whitespace-pre-line">
            — {prediction}
          </p>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setStatus("IDLE")}
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:border-zinc-600 transition-all font-bold uppercase tracking-widest text-xs"
            >
              {t.return}
            </button>
          </div>
        </div>
      </section>
    );

  return (
    <section className="w-full max-w-lg flex justify-center px-4">
      <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4">
        {ZODIAC_SIGNS.map((sign) => (
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            key={sign.id}
            onClick={() => handleSelectSign(sign.name.en)}
            className="aspect-square flex flex-col items-center justify-center bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-violet-500 hover:bg-violet-500/5 transition-all shadow-xl"
          >
            <span className="text-4xl mb-2 drop-shadow-md">{sign.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-500 group-hover:text-violet-400">
              {sign.name[lang]}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
};
