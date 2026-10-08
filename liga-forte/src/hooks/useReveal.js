import { useEffect } from "react";
import { prefersReducedMotion } from "./motion";

const ALVOS =
  ".sec .eyebrow, .sec h2, .sec .lead, .card, .cta-strip, .cmp, .rain, .scene, .checks li, .tags li, .faq details, .part, .form, .closing, .tile, .line, .need";

/** Faz os blocos entrarem suavemente ao rolar a página. */
export default function useReveal() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return undefined;

    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(ALVOS).forEach((el) => {
      const i = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty("--d", `${Math.min(i, 6) * 0.07}s`);
      el.classList.add("rv");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
