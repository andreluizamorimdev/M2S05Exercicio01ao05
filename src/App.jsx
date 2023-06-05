import Header from './components/Header';
import logo from './images/logo.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-section">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
      </section>
    </div>
  );
}

export default App;
