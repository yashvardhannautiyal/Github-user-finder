import Navbar from "./components/Navbar";
import HeroSection from "./Components/HeroSection";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <HeroSection className="flex-grow" />
    </div>
  );
}

export default App;
