
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllFeedback from './components/AllFeedback';
import Feedback from './components/Feedback';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="all-feedback" element={<AllFeedback />} />
        
      </Routes>
    </div>
  );
}

export default App;
