import { useRef } from "react";
import type { ChangeEvent } from "react";
import { cn } from "@/shared/lib"; // проверь путь!
import { Upload } from "lucide-react";
import { translations } from "@/shared/lib/localization";
import { useLanguage } from "@/shared/lib/LanguageContext";
interface FileUploadProps {
  onFileSelect: (file: File) => void;
  className?: string;
}

export const FileUpload = ({ onFileSelect, className }: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className={cn(
        "group border-2 border-dashed border-zinc-700 rounded-2xl p-12",
        "hover:border-violet-500 hover:bg-violet-500/5 transition-all cursor-pointer",
        "flex flex-col items-center justify-center gap-4",
        className,
      )}
    >
      <input
        type="file"
        className="hidden"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div className="p-4 bg-zinc-800 rounded-full group-hover:scale-110 transition-transform">
        <Upload className="w-8 h-8 text-violet-500" />
      </div>
      <div className="text-center">
        {/* Проверь, что в localization.ts ключ называется именно uploadHint или chooseAvictim */}
        <p className="text-zinc-300 font-medium">{t.uploadHint}</p>
        <p className="text-zinc-500 text-sm">{t.formatHint}</p>
      </div>
    </div>
  );
};
