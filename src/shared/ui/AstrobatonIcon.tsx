import type { SVGProps } from "react";

/**
 * Иконка "Астробатон" — смесь космической ракеты и батона.
 * Создана специально для проекта ASTROBATON.
 */
export const AstrobatonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Позволяет прокидывать className, width, height извне
    >
      {/* Тело Батона-Ракеты */}
      <path
        d="M7 21C7 16.5 11 11.5 17 9.5C23 7.5 25.5 9 26 11.5C26.5 14 24 19 18 23C13 26 7 26 7 21Z"
        fill="url(#astro_gradient)"
      />

      {/* Орбитальные надрезы */}
      <ellipse
        cx="14"
        cy="18"
        rx="1.5"
        ry="4"
        transform="rotate(-35 14 18)"
        fill="currentColor" // Цвет подстраивается под текст, если нужно
        className="text-zinc-950"
      />
      <ellipse
        cx="20"
        cy="14"
        rx="1"
        ry="3"
        transform="rotate(-35 20 14)"
        fill="currentColor"
        className="text-zinc-950"
      />

      {/* Звездный след на носу */}
      <circle cx="25" cy="9" r="1.5" fill="#A78BFA" />
      <circle cx="21" cy="7" r="0.7" fill="#A78BFA" opacity="0.6" />

      <defs>
        <linearGradient
          id="astro_gradient"
          x1="7"
          y1="21"
          x2="26"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7C3AED" /> {/* Violet-600 */}
          <stop offset="1" stop-color="#F9FAFB" /> {/* Whiteish */}
        </linearGradient>
      </defs>
    </svg>
  );
};
