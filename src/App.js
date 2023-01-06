import './App.css';
import CounterContextProvider from './context/MainContext';
import Home from './pages/Home';

function App() {
  return (
    <CounterContextProvider>
      <Home/>
    </CounterContextProvider>
  );
}

export default App;
