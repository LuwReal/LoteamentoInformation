import './App.css';
import Header from './componets/Header';
import HeaderMobile from './componetsMobile/HeaderMobile';
import Sobre from './componets/Sobre';
import Informacoes from './componets/Informacoes';
import Planos from './componets/Planos'
import Comentarios from './componets/Comentarios';
import Footer from './componets/Footer';

function App() {


 
  return (
    <div className="App">
        <Header />
        <HeaderMobile />
        <Sobre />
        <Informacoes />
        <div className='planosACompra'>
          <Planos tipoDePlano={'Iniciante'} price={'R$9,99'} menber={1} adiquirPlano={<button className="button" onClick={() =>{alert('Plano Iniciante Adquirido')}}>Adquirir Plano</button>}/>
          <Planos tipoDePlano={'Treinner'} price={'R$99,99'} menber={12} adiquirPlano={<button className="button" onClick={() =>{alert('Plano Treinner Adquirido')}}>Adquirir Plano</button>}/>
          <Planos tipoDePlano={'Profissional'} price={'R$999,99'} menber={150} adiquirPlano={<button className="button" onClick={() =>{alert('Plano Profissional Adquirido')}}>Adquirir Plano</button>}/>
        </div>
        <Comentarios />
        
        <Footer />
    </div>
  );
}

export default App;
