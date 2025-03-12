import { Link } from "react-router-dom";

function Servico({ title, children }) {
  return (
    <div className="border-2 border-gray-200 w-3/12 rounded-sm hover:shadow-xl bg-gray-900 transition px-4 py-6 text-white font-medium flex flex-col items-center gap-3">
      <h3 className="text-blue-500 text-2xl ">{title}</h3>
      <p className="text-justify">{children}</p>
      {/* <Link
        className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-sm "
        to={to}
      >
        Saiba mais
      </Link> */}
    </div>
  );
}

export default Servico;
