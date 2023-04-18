import QuoteWin from './Components/Quotewin';
import './App.css';
import Home from './Components/home';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Quotes" element={<QuoteWin/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
