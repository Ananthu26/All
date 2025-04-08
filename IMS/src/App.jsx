import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import ALoginPage from "./pages/Admin/ALoginPage";
import ASignupPage from "./pages/Admin/ASignupPage";

import PLoginPage from "./pages/Personal/PLoginPage";
import PSignupPage from "./pages/Personal/PSignupPage";
import Mypolicy from "./pages/Personal/Mypolicy";
import Payments from "./pages/Personal/Payments";
import Claimhistory from "./pages/Personal/Claimhistory";
import Support from "./pages/Personal/Support";
import Buynow from "./pages/Personal/paymentpage";


import ManagePolicy from "./pages/Admin/MangePolicy";
import Analytics from "./pages/Admin/Analytics";
import Billing from "./pages/Admin/Billing";


// Dashboards
import PersonalDashboard from "./pages/Personal/PersonalDashboard";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageUser from "./pages/Admin/ManageUser";
import Myprofile from "./pages/Personal/Myprofile";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboards */}
          <Route path="/personal-dashboard" element={<PersonalDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
      

          {/*individal LoginPage*/}
        {/*P*/}
          <Route path="/mypolicy" element={<Mypolicy/>} />
          <Route path="/payments" element={<Payments/>} />
          <Route path="/claimhistory" element={<Claimhistory/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/myprofile" element={<Myprofile/>} />
          <Route path="/paymentpage" element={<Buynow />} />

          {/*A*/}
          <Route path="/manage-user" element={<ManageUser/>} />
          <Route path="/manage-policy" element={<ManagePolicy/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/billing" element={<Billing/>} />
          

          

          <Route path="/PLoginPage" element={<PLoginPage />} />
          <Route path="/PSignupPage" element={<PSignupPage />} />
          <Route path="/ALoginPage" element={<ALoginPage />} />
          <Route path="/ASignupPage" element={<ASignupPage />} />
          
        </Routes>
      </main>
    </div>
  );
}

export default App;


