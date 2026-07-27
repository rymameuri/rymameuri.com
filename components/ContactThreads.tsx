/** Decorative threads for the Contact section — converge at top, fan through heading, frame the cards */
export default function ContactThreads() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[720px] max-h-full opacity-[0.38] sm:h-[780px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 896 720"
        className="h-full w-full"
        preserveAspectRatio="xMidYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Convergence knot */}
        <circle cx="448" cy="28" r="10" fill="#FAF8F5" stroke="#E8E4DE" strokeWidth="1" />
        <circle cx="448" cy="28" r="5" fill="#724538" opacity="0.7" />

        {/* Build — curves left through heading, drops beside Email */}
        <path
          d="M 448 28
             C 400 55 310 95 240 130
             C 175 165 145 220 138 290
             C 130 380 135 480 138 580
             C 140 640 138 690 138 710"
          stroke="#724538"
          strokeWidth="13"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Research — straight through center */}
        <path
          d="M 448 28
             L 448 130
             Q 442 280 448 420
             Q 454 560 448 710"
          stroke="#403d3d"
          strokeWidth="13"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Craft — curves right through heading, drops beside GitHub */}
        <path
          d="M 448 28
             C 496 55 586 95 656 130
             C 721 165 751 220 758 290
             C 766 380 761 480 758 580
             C 756 640 758 690 758 710"
          stroke="#a67c6f"
          strokeWidth="13"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
