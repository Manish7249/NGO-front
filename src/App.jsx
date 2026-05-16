import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/Auth/RoleSelection';
import DonorLogin from './pages/Auth/DonorLogin';
import NGOLogin from './pages/Auth/NGOLogin';
import NGORegister from './pages/Auth/NGORegister';
import DonorRegister from './pages/Auth/DonorRegister';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Auth Selection */}
        <Route path="/login" element={<RoleSelection />} />
        <Route path="/register" element={<RoleSelection />} />

        {/* Login/Register Specific Routes */}
        <Route path="/login/donor" element={<DonorLogin />} />
        <Route path="/login/ngo" element={<NGOLogin />} />
        
        {/* Aapne kaha url /register/ngo hona chahiye */}
        <Route path="/register/donor" element={<DonorRegister />} />
        <Route path="/register/ngo" element={<NGORegister />} />
      </Routes>
    </Router>
  );
}

export default App;