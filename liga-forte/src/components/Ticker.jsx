const ITENS = [
  "Iluminação pública e privada",
  "Instalações elétricas",
  "Obras residenciais",
  "Obras comerciais",
  "Obras industriais",
  "Infraestrutura",
  "Pré-moldados de concreto",
  "Postes de fibra de vidro",
];

/** Faixa de temas que corre sem parar (a lista é repetida para o laço ficar contínuo). */
export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((copia) =>
          ITENS.map((t) => <span key={`${copia}-${t}`}>{t}</span>)
        )}
      </div>
    </div>
  );
}
