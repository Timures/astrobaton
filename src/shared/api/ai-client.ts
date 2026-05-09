const API_KEY = import.meta.env.VITE_AI_API_KEY;
const BASE_URL = import.meta.env.VITE_AI_URL;

export const getZodiacRoast = async (
  sign: string,
  lang: "ru" | "kz" | "en",
  luckType: number,
) => {
  // Сопоставляем код языка с названием для промпта

  const instructions = {
    ru: "Отвечай СТРОГО на русском языке. Будь едким и саркастичным.",
    kz: "ҚАТАҢ ТҮРДЕ қазақ тілінде жауап бер. Өте улы және мысқылшыл бол.",
    en: "Respond STRICTLY in English. Be biting and sarcastic.",
  };

  // Определяем настроение промпта
  const moodInstruction =
    luckType === 1
      ? "Make an exception! Today you're a suspiciously kind astrologer. Write an unexpectedly positive, inspiring, but still slightly crazy and strange prediction."
      : "Be as toxic, mean, and sarcastic as possible. Destroy any hope the user has for a good day.";

  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are a cynical and unstable astrologer who loathes humanity.

          CURRENT MOOD: ${moodInstruction}

          CRITICAL RULES:
          1. Response length: strictly 3-7 sentences.
          2. FORMATTING: Separate different thoughts into 2-3 distinct paragraphs using real line breaks.
          3. Do NOT print the characters "\n" or "\n\n" literally in the text.
          3. Ensure the text doesn't look like a solid wall.
          4. MUST be a complete, logically finished thought. No cut-offs.
          5. The final sentence must be a punchy closing statement.
          6. Respond strictly in ${instructions[lang]} language.`,
        },
        {
          role: "user",
          content: `My zodiac sign is ${sign}. Give me my daily horoscope`,
        },
      ],
      temperature: 1.3, // Повышаем креативность для большего безумия
      max_tokens: 800,
      top_p: 0.9,
    }),
  });

  if (!response.ok) {
    throw new Error("Groq API Error");
  }

  const data = await response.json();
  return data.choices[0].message.content;
};
