import './App.css';
import Appbar from './Components/Appbar';
import Emi from './Components/Emi';
import Insurance from './Components/Insurance';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Insurance/>
      <Emi/>
    </div>
  );
}

export default App;
