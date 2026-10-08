import { Sprite } from "./components/Icons";
import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickQuote from "./components/QuickQuote";
import Ticker from "./components/Ticker";
import Lines from "./components/Lines";
import Postes from "./components/Postes";
import Anatomia from "./components/Anatomia";
import Vantagens from "./components/Vantagens";
import Altura from "./components/Altura";
import Concreto from "./components/Concreto";
import Aplicacoes from "./components/Aplicacoes";
import Qualidade from "./components/Qualidade";
import Publico from "./components/Publico";
import Passos from "./components/Passos";
import Contato from "./components/Contato";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Sprite />
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <QuickQuote />
        <Ticker />
        <Lines />
        <Postes />
        <Anatomia />
        <Vantagens />
        <Altura />
        <Concreto />
        <Aplicacoes />
        <Qualidade />
        <Publico />
        <Passos />
        <Contato />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
