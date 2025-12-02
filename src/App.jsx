import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact-us";
import Announcement from './components/home/annoucnment';
import Header from './components/home/header';
import Footer from './components/home/footer';
import SignUps from './pages/signup';
import Logins from './pages/login';
import Agentp from './pages/agent';


function App() {
  return (
    
    <>
    <Announcement/>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact-us" element={<ContactUs />} />
       <Route path="/signup" element={<SignUps />} />
       <Route path="/login" element={<Logins />} />
       <Route path="/agent" element={<Agentp />} />
      </Routes>
    </BrowserRouter>
     <Footer/>
    </>
    
  );
}

export default App;
