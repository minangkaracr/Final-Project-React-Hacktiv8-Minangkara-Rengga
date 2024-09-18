import './App.css'
import MovieDetail from './components/pages/MovieDetail';
import Homepage from './components/pages/Homepage';
import Trending from './components/pages/Trending';
import {Routes, Route} from 'react-router-dom'
import Search from './components/pages/Search';
import NavbarComponent from './components/organisms/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/search/:id/page/:page" element={<Search/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
