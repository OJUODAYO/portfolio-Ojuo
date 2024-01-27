
import './App.css';
import NabBar from './Components/NavBar/navbar';
import Hero from './Components/Hero/hero';
import Parallax from './Components/Parallax/parallax';
import Services from './Components/Services/services';
// import Portfolio from './Components/Portfolio/portfolio';

function App() {
  return (
   <div>
      <section id="HomePage">
        <NabBar />
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
        </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
        </section>
      {/* <Portfolio /> */}
      <section id="Contact">Contact</section>
      

   </div>
  )
}

export default App
