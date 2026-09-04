type WaveDividerProps = {
  /** "top" morde o topo da seção, "bottom" morde a base */
  position: "top" | "bottom";
  /** cor de preenchimento da onda — use a cor da seção VIZINHA (a que "invade") */
  color: string;
  /** altura da onda; aumente para uma curva mais pronunciada */
  className?: string;
};

/**
 * Onda decorativa para separar seções sem usar bordas retas.
 * Deve ser usada dentro de uma section com `relative overflow-hidden`.
 */
export default function WaveDivider({
  position,
  color,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 ${
        position === "top" ? "top-0" : "bottom-0"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className={`h-16 w-full sm:h-24 lg:h-28 ${
          position === "bottom" ? "rotate-180" : ""
        }`}
      >
        <path
          d="M0,32 C240,90 420,0 720,20 C1020,40 1200,110 1440,48 L1440,0 L0,0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
