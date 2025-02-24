import { ThemeProvider } from "./context/ThemeContext";
import Header from "./sections/Header";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import ThemeButtons from "./components/ThemeButtons";
import Navigation from "./components/Navigation";

function App() {
  return (
    <ThemeProvider>
      <ThemeButtons />
      <Navigation />
      <Header />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
