import { Icon } from "./Icons";
import WaLink from "./WaLink";
import logoCompleto from "../assets/logo-completo.png";
import { PHONE } from "../data/site";

const LINKS = [
  ["#inicio", "Início"],
  ["#postes", "Postes de Fibra"],
  ["#concreto", "Artefatos de Concreto"],
  ["#vantagens", "Vantagens"],
  ["#faq", "FAQ"],
  ["#contato", "Contato"],
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="cols">
          <div>
            <img src={logoCompleto} alt="Liga Forte, postes de fibra e artefatos de cimento" width="260" height="112" />
            <p>
              <b>Postes de Fibra de Vidro e Artefatos de Concreto</b>
              <br />
              Qualidade, resistência e soluções para sua obra ou projeto.
            </p>
          </div>
          <div>
            <h4>Contato</h4>
            <div className="tel">{PHONE}</div>
            <WaLink className="btn btn-wa" msg="Olá! Vi o site e gostaria de saber mais sobre os produtos">
              <Icon name="i-wa" />
              Falar pelo WhatsApp
            </WaLink>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul>
              {LINKS.map(([href, texto]) => (
                <li key={href}>
                  <a href={href}>{texto}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Liga Forte. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
