import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
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
import Admin from './pages/admin';
import Accordion from './pages/accordion';
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AdminDashboardSingleFile from "./admins/admins"
import SallersDashboard from './pages/sallers-pannel';
import AgentDashboard from "./components/agent/agent-dashboard";


function Layout() {
  const location = useLocation();

  const hideLayout = location.pathname === "/admin";

  return (
    <>
      {!hideLayout && <Announcement />}
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUps />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/agent" element={<Agentp />} />
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/admin" element={<Admin />} />
         <Route path="/accordion" element={<Accordion />} />

            {/* Seller Protected Route */}
          <Route
            path="/seller/dashboard"
            element={
              <ProtectedRoute requiredRole="seller">
                <SallersDashboard />
              </ProtectedRoute>
            }
          />
        {/* Seller Protected Route */}
          <Route
            path="/agent/dashboard"
            element={
              <ProtectedRoute allowedRoles={["agent"]}>
                <AgentDashboard />
              </ProtectedRoute>
            }
          />
          {/* Admin Protected Route */}
          <Route
            path="/admin"
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
