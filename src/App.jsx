
import "./css/App.css";
import Favorite from "./pages/Favorits";  // Capitalize Favorite component
import Home from "./pages/Home";
import NavBar from './components/NavBar';
import { MovieProvider } from "./Contexts/MavoriteContext";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          
          <Route path="/" element={<Home />} />

          
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

