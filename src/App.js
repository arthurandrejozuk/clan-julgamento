import './App.css';
import Gambit from './componentes/gambit'
import Titulo from './componentes/titulo';
import Banner from './componentes/banner';
import Crisol from './componentes/crisol';
import Modos from './componentes/modos';
import Vanguarda from './componentes/vanguarda';
import Footer from './componentes/footer';

function App() {
  return (
   <div>
     <Titulo/>
     <Modos/>
     <Banner/>
     <Crisol/>
     <Vanguarda/>
     <Gambit/>
     <Footer/>
   </div>
  
  );
}

export default App;
