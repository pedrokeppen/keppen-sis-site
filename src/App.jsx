import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-neutral-100">
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
