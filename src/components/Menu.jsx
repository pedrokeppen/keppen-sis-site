import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav className="flex px-20 py-4 justify-between items-center bg-gray-950">
        <div>
          <h1 className="text-4xl font-mono text-blue-500">Keppen SIS</h1>
        </div>
        <div className="flex items-center gap-8 text-white font-medium text-lg">
          <Link className="hover:text-blue-800 transition" to="/home">
            Home
          </Link>
          <Link className="hover:text-blue-800 transition" to="/servicos">
            Serviços
          </Link>
          <Link className="hover:text-blue-800 transition" to="/sobre">
            Sobre
          </Link>
          {/* <Link to="/contato">Contato</Link> */}
          <a
            className="bg-blue-800 hover:bg-blue-900 transition hover:shadow-xl text-white font-medium px-4 py-2 rounded-sm shadow"
            href="https://wa.me/554199233687"
            target="_blank"
          >
            Entre em contato
          </a>
        </div>
      </nav>
    </>
  );
}

export default Menu;
