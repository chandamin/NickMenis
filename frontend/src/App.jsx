// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./pages/home";
// import About from "./pages/about";
// import ContactUs from "./pages/contact-us";
// import Announcement from './components/home/annoucnment';
// import Header from './components/home/header';
// import Footer from './components/home/footer';
// import SignUps from './pages/signup';
// import Logins from './pages/login';
// import Agentp from './pages/agent';
// import Howitwork from './pages/howitwork';
// import Sellers from './pages/sellers';
// import Dashboard from "./components/admin/components-admin/Dashboard";

// // import AgentDashboard from "./components/agent/agent-dashboard";
// import ProtectedRoute from "./components/routes/ProtectedRoute";
// // import AdminLayout from "./components/admin/layout/AdminLayout";
// import SellerStepForm from "./components/seller/seller-step-form";
// import AdminDashboardSingleFile from "./admins/admins"
// import AdminDashboard from "./components/admin/AdminDashboard";


// function App() {
//   return (
    
//     <>
//     <BrowserRouter>
//     <Announcement/>
//     <Header/>
    
//       <Routes>
//       <Route path="/" element={<Home />} />
//        <Route path="/about" element={<About />} />
//        <Route path="/contact-us" element={<ContactUs />} />
//        <Route path="/signup" element={<SignUps />} />
//        <Route path="/login" element={<Logins />} />
//        <Route path="/agent" element={<Agentp />} />
//        <Route path="/how-it-works" element={<Howitwork />} />
//        <Route path="/sellers" element={<Sellers/>} />
//        {/* <Route path="/admins" element={<AdminDashboard/>} /> */}
//        {/* <Route path="/admin" element={<AdminDashboardSingleFile/>}/> */}
//        <Route path="/admins" element={<Dashboard/>} />
//        <Route element={<ProtectedRoute/>}>
//         {/* <Route path="/admin" element={<AdminLayout/>} /> */}
//         <Route path="/admin" element={<AdminDashboardSingleFile/>}/>
//        </Route>
//       </Routes>
    
//      <Footer/>
//      </BrowserRouter>
//     </>
    
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route} from "react-router-dom";
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
// import AgentDashboard from "./components/agent/agent-dashboard";
import ProtectedRoute from "./components/routes/ProtectedRoute";
// import AdminLayout from "./components/admin/layout/AdminLayout";
import SellerStepForm from "./components/seller/seller-step-form";
import AdminDashboardSingleFile from "./admins/admins"
import AgentDashboard from "./components/agent/agent-dashboard";
import SellerDashboard from "./components/seller/SellerDashboard";
function App() {
  return (
    <>
    <BrowserRouter>
    <Announcement/>
    <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact-us" element={<ContactUs />} />
       <Route path="/signup" element={<SignUps />} />
       <Route path="/login" element={<Logins />} />
       <Route path="/agent" element={<Agentp />} />
       <Route path="/how-it-works" element={<Howitwork />} />
       <Route path="/sellers" element={<Sellers/>} />
        {/* Seller Protected Route */}
          <Route
            path="/sellers-admin"
            element={
              <ProtectedRoute requiredRole="seller">
                <SellerDashboard />
              </ProtectedRoute>
            }
          />
        {/* Seller Protected Route */}
          <Route
            path="/agent-dashboard"
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
     <Footer/>
     </BrowserRouter>
    </>
  );
}
export default App;
