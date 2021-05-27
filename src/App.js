import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Skills from "./components/content/skill";
import Experience from "./components/content/experience";
import Featured from "./components/content/featured";

function App() {
  return (
    <div className="App container px-3">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
