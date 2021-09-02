import "bootstrap/dist/css/bootstrap.min.css";
import './Styles.css';


import {Navbar} from './components/Navbar';
import {Header} from "./components/Header";

import { Trayectoria } from './components/Trayectoria';
import { Proyectos } from './components/Proyectos';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';


function App() {
  return (
    <>

      <Navbar />
      <Header />

      <Trayectoria/>
      <Proyectos />
      <Contacto/>

      <Footer/>
    </>
  );
}

export default App;
