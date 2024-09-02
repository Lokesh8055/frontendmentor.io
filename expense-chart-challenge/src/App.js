import './App.css';
import Balance from './components/Balance';
import Expenses from './components/Expenses';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function App() {
  return (
    <>
      <Balance />
      <Expenses />
    </>
  );
}

export default App;
