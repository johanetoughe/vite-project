import HomePage from "./modules/home/home-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Visiteur from "./modules/visites/Visiteur";
import Navbar from "./Navbar";
import Dashboard from '@/modules/home/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules/home/Dashboard" element={<Dashboard />}/>
          <Route path="/modules/visites/Visiteur" element={<Visiteur />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
