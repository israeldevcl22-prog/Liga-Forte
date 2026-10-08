import { wa } from "../data/site";

/**
 * Link do WhatsApp com mensagem pré-preenchida.
 * <WaLink msg="Olá!..." className="btn btn-wa">texto</WaLink>
 */
export default function WaLink({ msg, className, children, ...resto }) {
  return (
    <a className={className} href={wa(msg)} target="_blank" rel="noopener noreferrer" {...resto}>
      {children}
    </a>
  );
}
