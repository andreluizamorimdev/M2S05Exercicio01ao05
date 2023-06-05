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
        <Input />
        <Botao />
      </div>
      <ImagemHello />
    </div>
  );
}

export default App;
