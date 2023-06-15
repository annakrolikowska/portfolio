import Header from './sections/Header';
import About from './sections/About';
import Stack from './sections/Stack';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
import ThemeButtons from './components/ThemeButtons';

function App() {
  return (
    <div className="App">
      <ThemeButtons/>
       <Header/>
       <About/>
       <Stack/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
