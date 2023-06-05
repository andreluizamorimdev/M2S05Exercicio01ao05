import Botao from './components/Botao';
import Header from './components/Header';
import ImagemHello from './components/ImagemHello';
import Input from './components/Input';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Form'>
        <Input type='search' placeholder='Procure mais figurinhas'/>
        <Botao value='Botão'/>
      </div>
      <ImagemHello texto='Aqui está um exemplo das figurinhas' />
    </div>
  );
}

export default App;
