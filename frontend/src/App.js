
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Navbar from './components/Navbar'; 
import Connect from './components/Connect';
import Footer from './components/Footer';
import './index.css';


function App() { 

  return (
        <div className="App">
            <Navbar />

            <About />

            <Projects />

            <Certifications />

            <Connect />

            <Footer />
        
        </div>

  );
}

export default App;
