
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './layout/layout'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Layout />
    </div>
    </BrowserRouter>
  );
}

export default App;
