import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Questions from './components/questions/Questions';
import Mentors from './components/mentors/Mentors';
import AskQuestion from './components/askQuestion/AskQuestion';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionDetail from './components/questionDetail/QuestionDetail';


function App() {
  return (
    <Router >

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='questions' element={<Questions />} />
        <Route path='questions/:id' element={<QuestionDetail />} />
        <Route path='mentors' element={<Mentors />} />
        <Route path='ask-question' element={<AskQuestion />} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
