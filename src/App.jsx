import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/Auth/RoleSelection';
import DonorLogin from './pages/Auth/DonorLogin';
import NGOLogin from './pages/Auth/NGOLogin';
import OTPVerification from './pages/Auth/OTPVerification';
import NGORegister from './pages/Auth/NGORegister';
import DonorRegister from './pages/Auth/DonorRegister';
import HelpDesk from './pages/HelpDesk';
import RefundRequest from './pages/RefundRequest';

// NGO Dashboard Components
import NGOLayout from './pages/NGODashboard/NGOLayout';
import DashboardHome from './pages/NGODashboard/DashboardHome';
import CampaignsPage from './pages/NGODashboard/CampaignsPage';
import BudgetBreakdown from './pages/NGODashboard/BudgetBreakdown';
import CampaignDetails from './pages/NGODashboard/CampaignDetails';
import CreateCampaign from './pages/NGODashboard/CreateCampaign';
import DonationsPage from './pages/NGODashboard/DonationsPage';
import EventsPage from './pages/NGODashboard/EventsPage';
import CreateEvent from './pages/NGODashboard/CreateEvent';
import EventDetails from './pages/NGODashboard/EventDetails';
import EventInvitation from './pages/NGODashboard/EventInvitation';
import ProfilePage from './pages/NGODashboard/ProfilePage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/help-desk" element={<HelpDesk />} />
        <Route path="/apply-refund" element={<RefundRequest />} />

        {/* --- Auth Selection --- */}
        <Route path="/login" element={<RoleSelection />} />
        <Route path="/register" element={<RoleSelection />} />

        {/* --- Login/Register Specific Routes --- */}
        <Route path="/login/donor" element={<DonorLogin />} />
        <Route path="/login/ngo" element={<NGOLogin />} />
        <Route path="/login/ngo/verify-otp" element={<OTPVerification />} />
        
        <Route path="/register/donor" element={<DonorRegister />} />
        <Route path="/register/ngo" element={<NGORegister />} />

        <Route path="/ngo" element={<NGOLayout />}>
          {/* Index route: /ngo hit karte hi /ngo/dashboard par bhej dega */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Ab ye sab NGOLayout ke 'Outlet' me dikhenge */}
          <Route path="dashboard">
            <Route index element={<DashboardHome />} />
            {/* <Route path="campaign-details" element={<CampaignDetails />} /> */}
            {/* <Route path="utilization" element={<BudgetBreakdown />} /> */}
          </Route>

          <Route path="campaigns">
            <Route index element={<CampaignsPage />} />
            <Route path="campaigns-budget" element={<BudgetBreakdown />} />
            <Route path="campaign-details" element={<CampaignDetails />} />
            <Route path="create" element={<CreateCampaign />} />
            {/* <Route path="utilization" element={<BudgetBreakdown />} /> */}
          </Route>

          <Route path="donations" element={<DonationsPage />} />

          <Route path="events" >
            <Route index element={<EventsPage />} />
            <Route path="create" element={<CreateEvent />} />
            <Route path="details" element={<EventDetails />} />
            <Route path="invite" element={<EventInvitation />} />
          </Route>

          <Route path="profile" element={<ProfilePage />} />

        </Route>

        {/* 404 Redirect (Optional) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;