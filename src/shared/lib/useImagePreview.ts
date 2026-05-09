import { useState, useEffect } from "react";

export const useImagePreview = (file: File | null) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Чистим память при размонтировании или смене файла
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return preview;
};
