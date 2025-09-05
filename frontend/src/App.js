import Portfolio from './components/Portfolio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SnakeAI from './components/SnakeAI';
import DigitPredictor from './components/HandwrittenDigitRecognizer/DigitPredctor'
import TopNavbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="app">
    <TopNavbar></TopNavbar>
      <Routes>
        <Route path='/' element={<Portfolio></Portfolio>}></Route>
        <Route path='/snake-ai' element={<SnakeAI></SnakeAI>}></Route>
        <Route path='/handwritten-digit-recognizer' element={<DigitPredictor></DigitPredictor>}></Route>
      </Routes>
    <Footer></Footer>

    </div>
    </Router>

  );
}

export default App;
