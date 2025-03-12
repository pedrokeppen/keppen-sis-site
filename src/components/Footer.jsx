import { Link } from "react-router-dom";

const pin = "/pin.svg";
const zap = "/whatsapp.png";

function Footer() {
  return (
    <div className=" bg-gray-950 text-white">
      <nav className="flex px-20 py-4 justify-between items-start ">
        <div className="flex items-center">
          <h1 className="text-4xl font-mono text-blue-500">Keppen SIS</h1>
        </div>
        <div className="flex flex-col gap-2  font-medium">
          <h3 className="text-blue-500 text-xl">Site Map</h3>
          <div className="flex flex-col gap-2 ">
            <Link
              className="hover:text-blue-800 transition border-b"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="hover:text-blue-800 transition border-b"
              to="/servicos"
            >
              Serviços
            </Link>
            <Link className="hover:text-blue-800 transition" to="/sobre">
              Sobre
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2  font-medium">
          <h3 className="text-blue-500 text-xl">Serviços</h3>
          <div className="flex flex-col gap-2  ">
            <Link
              className="hover:text-blue-800 transition border-b"
              to="/home"
            >
              Consultoria TI
            </Link>
            <Link
              className="hover:text-blue-800 transition border-b"
              to="/servicos"
            >
              Desenvolvimento de Software
            </Link>
            <Link className="hover:text-blue-800 transition" to="/sobre">
              Segurança da Informação
            </Link>
          </div>
        </div>
        <div className="font-medium flex flex-col gap-4">
          <div>
            <h3 className="text-blue-500 text-xl">Contato</h3>
            <div>
              <div className="flex my-2">
                <img className="w-6" src={pin} alt="" />
                <p>Curitiba - Paraná - Brasil</p>
              </div>
              <div className="flex">
                <img className="w-6" src={zap} alt="" />
                <p>+55 41 9923-3687</p>
              </div>
            </div>
          </div>
          <div>
            <a
              className="bg-blue-800 hover:bg-blue-900 transition hover:shadow-xl font-medium px-4 py-2 rounded-sm shadow"
              href="https://wa.me/554199233687"
              target="_blank"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </nav>
      <div className="border-t border-white mx-20 flex justify-center py-2 text-blue-500 font-medium">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
