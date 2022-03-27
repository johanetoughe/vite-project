import HomePage from "./modules/home/home-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from '@/modules/home/Dashboard';
import Gestionvidash from "./modules/visites/Gestionvidash";
import VisitorCreateForm from "./modules/visites/VisitorCreateForm";
import FicheVisiteForm from "./modules/visites/FicheVisiteForm";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules/home/Dashboard" element={<Dashboard />}/>
          <Route path="/modules/visites/Gestionvidash" element={<Gestionvidash />}/>
          <Route path="/modules/visites/VisitorCreateForm" element={<VisitorCreateForm />}/>
          <Route path="/modules/visites/FicheVisiteForm" element={<FicheVisiteForm />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
