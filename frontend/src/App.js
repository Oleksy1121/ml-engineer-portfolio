import Portfolio from './components/Portfolio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigitPredictor from './components/HandwrittenDigitRecognizer/DigitPredctor'
import TopNavbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
    <TopNavbar></TopNavbar>
      <Routes>
        <Route path='/' element={<Portfolio></Portfolio>}></Route>
        <Route path='/handwritten-digit-recognizer' element={<DigitPredictor></DigitPredictor>}></Route>
      </Routes>

    </div>
    </Router>

  );
}

export default App;
