import Hero from "./components/Hero";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900 h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="max-w-[1450px] m-auto">
          <Navbar />
          <Hero />
        </div>
    </div>
  );
};

export default App;
