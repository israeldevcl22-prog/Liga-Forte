import { useEffect, useRef } from "react";

/** Barra fina no topo que mostra quanto da página já foi lido. */
export default function ProgressBar() {
  const ref = useRef(null);

  useEffect(() => {
    let ocupado = false;
    const atualizar = () => {
      ocupado = false;
      const d = document.documentElement;
      const max = d.scrollHeight - d.clientHeight;
      const y = window.scrollY || d.scrollTop || 0;
      if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    };
    const aoRolar = () => {
      if (ocupado) return;
      ocupado = true;
      requestAnimationFrame(atualizar);
    };
    window.addEventListener("scroll", aoRolar, { passive: true });
    atualizar();
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return <div className="progress" ref={ref} aria-hidden="true" />;
}
