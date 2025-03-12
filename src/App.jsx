import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Servico from "./components/Servico";
import Title from "./components/Title";

const pc = "/pc.png";
const sobre = "/sobre.svg";

function App() {
  return (
    <div className="flex flex-col max-w-screen min-h-screen bg-gray-950 scroll-smooth">
      <Menu />
      <div className="flex flex-col flex-1 items-start">
        {/* HERO */}
        <div className="flex items-center justify-center py-16  shadow">
          <div className="w-5/12">
            <h1 className="text-blue-500 text-4xl font-medium">
              Soluções Inteligentes para seu Negócio !
            </h1>
            <p className="text-white font-medium">
              Consultoria especializada em tecnologia e inovação.
            </p>
            <Divider />
          </div>
          <div className="w-4/12">
            <img className="" src={pc} alt="" />
          </div>
        </div>

        {/* SERVICOS */}
        <div id="servicos" className="flex flex-col gap-8 items-center py-12">
          <Title title="Serviços" />
          <div className="flex gap-4 justify-center">
            <Servico title="Consultoria TI">
              Oferecemos uma análise detalhada do ambiente tecnológico da sua
              empresa para identificar oportunidades de melhoria, otimizar
              processos e alinhar a infraestrutura de TI às metas de negócio.
              Nossa consultoria vai além do diagnóstico, propondo e
              implementando as soluções mais adequadas para cada desafio.
            </Servico>
            <Servico title="Desenvolvimento de Software">
              Desenvolvemos sistemas e aplicativos personalizados, orientados
              pelas necessidades do cliente. Utilizamos metodologias ágeis para
              garantir entregas rápidas, constantes feedbacks e alta qualidade
              no produto final. Seja para web, mobile ou desktop, criamos
              soluções escaláveis e seguras para sustentar o crescimento do seu
              negócio.
            </Servico>
            <Servico title="Segurança da Informação">
              Garantimos a proteção dos dados e dos ativos digitais da sua
              organização. Trabalhamos com políticas de segurança, análise de
              vulnerabilidades, testes de intrusão e monitoramento contínuo.
              Nosso objetivo é reduzir riscos, manter a conformidade com normas
              e leis de privacidade e proporcionar tranquilidade para o seu
              negócio.
            </Servico>
          </div>
        </div>

        {/* SOBRE */}
        <div id="sobre" className=" flex flex-col items-center gap-8 py-12">
          <div className="flex justify-center">
            <div className="w-4/12 flex flex-col justify-center gap-8">
              <div className="">
                <Title title="Sobre Nós" />
                <h3 className="text-white font-medium">
                  Soluções Inteligentes para seu Negócio
                </h3>
                {/* <Divider /> */}
              </div>
              <p className="text-white font-light">
                Fundada com o propósito de oferecer serviços de alta qualidade
                em TI, a Keppen SIS atua como parceira na jornada de
                transformação digital das organizações. Com uma equipe de
                especialistas em diferentes áreas de tecnologia, entregamos
                soluções robustas, seguras e escaláveis, sempre buscando agregar
                valor e competitividade aos nossos clientes.
              </p>
            </div>
            <div className="w-4/12  flex justify-center">
              <img className="w-8/12" src={sobre} alt="" />
            </div>
          </div>
        </div>

        {/* CONTATO */}
        <div className="bg-gray-900 text-white w-full py-8 flex flex-col items-center gap-8">
          <h2 className="text-3xl text-center">
            Procurando serviços de qualidade <br /> para{" "}
            <b>seu próximo projeto?</b>
          </h2>
          <a
            className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl transition px-6 py-2 font-medium rounded-sm"
            href="https://wa.me/554199233687"
            target="_blank"
          >
            Fale com nossa equipe !
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
