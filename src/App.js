import './App.css';
import Animes from './pages/Animes';
import Facts from './pages/Facts';
import Fact from './pages/Fact';
import Nav from './components/Nav';
import {Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
function App() {
  return (
    <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Animes />} />
          <Route path="/:name" element={<Facts />} />
          <Route path="/:name/:id" element={<Fact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
