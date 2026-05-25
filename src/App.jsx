import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/Auth/RoleSelection';
import DonorLogin from './pages/Auth/DonorLogin';
import NGOLogin from './pages/Auth/NGOLogin';
import OTPVerification from './pages/Auth/OTPVerification';
import NGORegister from './pages/Auth/NGORegister';
import DonorRegister from './pages/Auth/DonorRegister';
import LegalInformation from './pages/Auth/LegalInformation';
import AdminLogin from './pages/Auth/AdminLogin'
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

// Admin Dashboard Components
import AdminLayout from './pages/AdminDashboard/AdminLayout';
import AdminDashboardHome from './pages/AdminDashboard/AdminDashboardHome';
import AllNGOs from './pages/AdminDashboard/AllNGOs';
import AllDonors from './pages/AdminDashboard/AllDonors';
import DonorProfile from './pages/AdminDashboard/DonorProfile';
import DonationDetail from './pages/AdminDashboard/DonationDetail';
import DonorAllTransactions from './pages/AdminDashboard/DonorAllTransactions';
import QueriesPage from './pages/AdminDashboard/QueriesPage';
import QueryDetails from './pages/AdminDashboard/QueryDetails';
import RatingPage from './pages/AdminDashboard/RatingPage';
import NGOVerification from './pages/AdminDashboard/NGOVerification';
import NGOPayment from './pages/AdminDashboard/NGOPayment';
import RejectedNGOs from './pages/AdminDashboard/RejectedNGOs';
import NGOReviewDetail from './pages/AdminDashboard/NGOReviewDetail';
import AdminNGODetail from './pages/AdminDashboard/AdminNGODetail';
import AdminCampaignDetail from './pages/AdminDashboard/AdminCampaignDetail';
import AdminEventDetail from './pages/AdminDashboard/AdminEventDetail';
import RefundApplicationDetail from './pages/AdminDashboard/RefundApplicationDetail';

// Donor Dashboard Components
import DonorLayout from './pages/DonorDashboard/DonorLayout';
import DonorDashboard from './pages/DonorDashboard/DonorDashboard';
import MyDonations from './pages/DonorDashboard/MyDonations';
import DonorAlerts from './pages/DonorDashboard/DonorAlerts';
import DonateNowEducation from './pages/DonorDashboard/DonateNowEducation';
import DonateView from './pages/DonorDashboard/DonateView';
import DonateCampaignDetail from './pages/DonorDashboard/DonateCampaignDetail';
import DonateEventDetail from './pages/DonorDashboard/DonateEventDetail';
import CampaignPayment from './pages/DonorDashboard/CampaignPayment';
import EventPayment from './pages/DonorDashboard/EventPayment';
import CampaignPaymentSuccess from './pages/DonorDashboard/CampaignPaymentSuccess';
import EventPaymentSuccess from './pages/DonorDashboard/EventPaymentSuccess';
import InvitationPage from './pages/DonorDashboard/InvitationPage';
import DonorProfileNew from './pages/DonorDashboard/DonorProfileNew';
import DonationCampaignDetails from './pages/DonorDashboard/DonationCampaignDetails';
import DonationEventDetails from './pages/DonorDashboard/DonationEventDetails';

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
        <Route path="/register/donor/legal-info" element={<LegalInformation />} />
        <Route path="/register/ngo" element={<NGORegister />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardHome />} />
          {/* <Route path="all-ngos" element={<AllNGOs />} /> */}
           
          <Route path="all-ngos">
            <Route index element={<AllNGOs />} />
            <Route path="ngo-verification" element={<NGOVerification />} />
            <Route path="ngo-verification/detail" element={<NGOReviewDetail />} />
            <Route path="details" element={<AdminNGODetail />} />
            <Route path="details/campaign-details" element={<AdminCampaignDetail />} />
            <Route path="details/event-details" element={<AdminEventDetail />} />
            <Route path="ngo-payment" element={<NGOPayment />} />
            <Route path="rejected-ngos" element={<RejectedNGOs />} />
            <Route path="rejected-ngos/detail" element={<RefundApplicationDetail />} />
          </Route>

          <Route path="donors" element={<AllDonors />} />
          <Route path="donors/profile" element={<DonorProfile />} />
          <Route path="donors/profile/all-transactions" element={<DonorAllTransactions />} />
          <Route path="donors/profile/transaction-detail" element={<DonationDetail />} />
          <Route path="rating" element={<RatingPage />} />
          <Route path="queries" element={<QueriesPage />} />
          <Route path="queries/details" element={<QueryDetails />} />
        </Route>

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

          {/* Baaki Login/Register routes... */}
          <Route path="/donor" element={<DonorLayout />}>
            {/* Jab koi sirf /donor par jaye, toh dashboard dikhe (Index route) */}
            <Route index element={<DonorDashboard />} /> 
            
            {/* Saare tabs ke routes */}
            <Route path="dashboard" element={<DonorDashboard />} />
            <Route path="donations" element={<MyDonations />} />
            <Route path="donations/donation-campaign-detail" element={<DonationCampaignDetails />} />
            <Route path="donations/donation-event-detail" element={<DonationEventDetails />} />
            <Route path="alerts" element={<DonorAlerts />} />
            <Route path="alerts/invitation" element={<InvitationPage />} />
            <Route path="donate" element={<DonateNowEducation />} />
            <Route path="donate/education" element={<DonateNowEducation />} />
            <Route path="donate/education/view" element={<DonateView />} />
            <Route path="donate/education/view/campaign-detail" element={<DonateCampaignDetail />} />
            <Route path="donate/education/view/event-detail" element={<DonateEventDetail />} />
            <Route path="donate/education/view/campaign-detail/campaign-payment" element={<CampaignPayment />} />
            <Route path="donate/education/view/event-detail/event-payment" element={<EventPayment />} />
            <Route path="donate/education/view/campaign-detail/campaign-payment/success" element={<CampaignPaymentSuccess />} />
            <Route path="donate/education/view/event-detail/event-payment/success" element={<EventPaymentSuccess />} />
            <Route path="profile" element={<DonorProfileNew />} />
          </Route>
        
        {/* 404 Redirect (Optional) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;