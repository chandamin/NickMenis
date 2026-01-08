import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact-us";
import Announcement from './components/home/annoucnment';
import Header from './components/home/header';
import Footer from './components/home/footer';
import SignUps from './pages/signup';
import Logins from './pages/login';
import Agentp from './pages/agent';
import Howitwork from './pages/howitwork';
import Sellers from './pages/sellers';
import Accordion from './pages/accordion';
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AdminDashboardSingleFile from "./components/admin-panel/AdminDashboard"
import SallersDashboard from './pages/sallers-pannel';
import AgentDashboard from "./components/agent/agent-dashboard";
import AcceptInvite from "./pages/AcceptInvite";
import Albertas from "./pages/alberta-agents";
import AlbertaPackagePage from './pages/albeart-package';
import AlbertaAgentCost from "./pages/AlbertaAgentCost";



function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/admin/dashboard") ||
    location.pathname.startsWith("/seller/dashboard") ||
    location.pathname.startsWith("/agent/dashboard");

  return (
    <>
      {!hideLayout && <Announcement />}
      {!hideLayout && <Header />}

      <Routes>
        {/* Frontend pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUps />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/agents" element={<Agentp />} />
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/accept-invite" element={<AcceptInvite />} />
        <Route path="/alberta-agents" element={<Albertas/>} />
         <Route path="/alberta-package"element={<AlbertaPackagePage />}/>
         <Route path="/alberta-agent-cost" element={<AlbertaAgentCost />} />

        {/* Dashboards */}
        <Route
          path="/seller/dashboard"
          element={
            <ProtectedRoute requiredRole="seller">
              <SallersDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/agent/dashboard"
          element={
            <ProtectedRoute allowedRole="agent">
              <AgentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboardSingleFile />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
