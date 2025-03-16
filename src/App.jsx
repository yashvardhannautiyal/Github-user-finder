import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow overflow-hidden">
      <Navbar />
      <HeroSection />
      </main>
      <Footer  className="mt-auto" />
    </div>
  );
}

export default App;
